import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';
import Song from './Song';
import Player from './Player';
import useAuth from '../hooks/useAuth';


const SpotifyApi = new SpotifyWebApi({
  clientId: '04306bc8614e44bbb0f6f8071bb81e01'
})


function SearchPage() {
  const accessToken = localStorage.getItem('code');
  // const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingSong, setPlayingSong] = useState();
  const [lyrics, setLyrics] = useState('');


  function chooseSong(song) {
    setPlayingSong(song);
    setSearch('');
    setLyrics('');
  }

  useEffect(() => {
    if (!playingSong) return

    axios.get('http://localhost:3001/lyrics', {
      params: {
        track: playingSong.title,
        artist: playingSong.artist,
      }
    }).then(res => {
      setLyrics(res.data.lyrics);
    })
  }, [playingSong])

  useEffect(() => {
    if (!accessToken) return;
    SpotifyApi.setAccessToken(accessToken)
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return;

    SpotifyApi.searchTracks(search).then(res => {

      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])


        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    })
  }, [search, accessToken])

  return (
    <div>
      <div className="search-page-title">
        <h4>Search your favorite music...</h4>
      </div>
      <Container className="d-flex flex-column py-2" style={{ height: "100vh", marginTop: '20px' }} >
        <Form.Control type="search" placeholder="Enter a song/ artist..." value={search} onChange={e => setSearch(e.target.value)} />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
          {searchResults.map(song => (
            < Song song={song} key={song.uri} chooseSong={chooseSong} />
          ))}

          {searchResults.length === 0 && (
            <div className="text-center" style={{ whiteSpace: "pre" }}>
              {lyrics}
            </div>
          )}
        </div>
        <div>
          <Player accessToken={accessToken} trackUri={playingSong?.uri} />
        </div>
      </Container >
    </div>
  )

}

export default SearchPage;