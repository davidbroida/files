import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="NavBar">
      {/* <NavLink exact to="/">
        Home
      </NavLink> */}
      <NavLink exact to="/Cookies">
        Cookies
      </NavLink>
      <NavLink exact to="/Doritos">
        Doritos
      </NavLink>
      <NavLink exact to="/Snickers">
        Snickers
      </NavLink>
    </nav>
  );
}

export default Navbar;
