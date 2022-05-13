import React from 'react';

function Playlist({ playlist, choosePlaylist }) {

  function handlePlay() {
    choosePlaylist(playlist);
  }

  return (
    <div className="container" onClick={handlePlay} style={{ cursor: 'pointer' }}>
      <img src={playlist.albumUrl} style={{ height: '202px', width: '202px' }}></img>
    </div >
  )
}

export default Playlist;