import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import logo from '../images/MMLogoWhite.png';


function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedOutNav() {
    return (
      <div className="justify-content-center">
        <div>
          <span>
            <div id="logo" className="justify-content-center"><img src={logo} className="justify-content-center" alt=""></img></div>
          </span>
        </div>
        <div className="logout-btn">
          <Link to="/home" onClick={logout}>
            Log out
            {/* {currentUser.first_name || currentUser.username} */}
          </Link>
        </div>
      </div>
    );
  }

  function loggedInNav() {
    return (
      <div>
      </div>
    );
  }

  return (
    <nav>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}


export default NavBar;