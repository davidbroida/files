import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import Playlist from './Playlist';
import NewReleases from './NewReleases';
import { Container } from 'react-bootstrap';
import Player from './Player';



const SpotifyApi = new SpotifyWebApi({
  clientId: '04306bc8614e44bbb0f6f8071bb81e01',
})

function Dashboard() {
  const code = localStorage.getItem('code');
  const accessToken = useAuth(code);
  const [playlists, setPlaylists] = useState([]);
  const [playingSong, setPlayingSong] = useState();
  const [newReleases, setNewReleases] = useState([]);

  function choosePlaylist(playlist) {
    setPlayingSong(playlist);
  }
  function chooseNewRelease(album) {
    setPlayingSong(album);
  }

  useEffect(() => {
    if (!accessToken) return;
    SpotifyApi.setAccessToken(accessToken)
  }, [accessToken]);


  useEffect(() => {
    if (!accessToken) return;
    SpotifyApi.getNewReleases({ limit: 26, offset: 0, country: 'US' })
      .then(res => {
        console.log(res.body)
        setNewReleases(res.body.albums.items.map(album => {
          return {
            name: album.name,
            uri: album.uri,
            albumUrl: album.images[0].url
          }
        }))
      }, function (err) {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);


  useEffect(() => {
    if (!accessToken) return;
    SpotifyApi.getPlaylistsForCategory('party', {
      country: 'US',
      limit: 20,
      offset: 0
    })
      .then(res => {
        console.log(res.body)
        setPlaylists(res.body.playlists.items.map(playlist => {

          return {
            name: playlist.name,
            description: playlist.description,
            uri: playlist.uri,
            albumUrl: playlist.images[0].url
          }
        }))
      }, function (err) {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);

  return (
    <> <div className="top-row">
      <Container className="flex-row"   >
        {playlists.map(playlist => (
          <Playlist playlist={playlist} key={playlist.uri} choosePlaylist={choosePlaylist} />
        ))}
      </Container>
    </div>
      <div>
        <Container className="flex-row"  >
          {newReleases.map(album => (
            <NewReleases album={album} key={album.uri} chooseNewRelease={chooseNewRelease} />
          ))}
        </Container >
      </div>
      <div className="music-player">
        <Player accessToken={accessToken} trackUri={playingSong?.uri} />
      </div>
      <div>
        <a id="search-btn" className="btn btn-success btn-lg" href="/search">Search Songs & Lyrics</a>
      </div>
    </>
  )
}

export default Dashboard;
