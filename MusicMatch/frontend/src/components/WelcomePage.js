import React from 'react';
import SearchPage from './SearchPage';
import Dashboard from './Dashboard';

function WelcomePage() {
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=04306bc8614e44bbb0f6f8071bb81e01&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

  const code = new URLSearchParams(window.location.search).get('code');

  localStorage.setItem('code', code)

  if (code) {
    return (
      <Dashboard code={code} />
      // <SearchPage />
    )
  }
  return (
    <div className="welcome-page">

      <h1>Welcome to Music Match !</h1>
      <p>Click the button below to get started.</p>

      <a className="btn btn-success btn-lg" href={AUTH_URL}>Connect</a>

      <hr></hr>
      <div className='note-1'>
        <p>Note: Spotify Premium Account Required</p>
      </div>
    </div>

  );
}

export default WelcomePage;
