import React from "react";


function Song({ song, chooseSong }) {

  function handlePlay() {
    chooseSong(song);
  }
  return (
    <div className='d-flex m-2 align-items-center' style={{ cursor: 'pointer' }} onClick={handlePlay}>
      <img src={song.albumUrl} style={{ height: '60px', width: '60px' }} />
      <div className="ml-3">
        <div>{song.title}</div>
        <div className="text-muted">{song.artist}</div>
      </div>
    </div>
  )
}

export default Song;
