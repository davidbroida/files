import React from 'react';

function NewReleases({ album, chooseNewRelease }) {

  function handlePlay() {
    chooseNewRelease(album);
  }

  return (
    <div className="container mt-0 new-releases" onClick={handlePlay} style={{ cursor: 'pointer' }}>
      <img src={album.albumUrl} style={{ height: '150px', width: '150px' }}></img>
      <p>{album.name}</p>
    </div >
  )
}

export default NewReleases;