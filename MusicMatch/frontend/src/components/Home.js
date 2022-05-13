import React from 'react';

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1>Log in to Music Match</h1>
        <p>or create an account if you're new!</p>
        <div>
          <a href="/login" className="btn btn-success btn-lg display-flex" style={{ margin: "5px" }}>Log in</a>
          <a href="/signup" className="btn btn-success btn-lg display-flex" style={{ margin: "5px" }}>Sign up</a>
        </div>
      </div>
    </div >
  )
}

export default Home;