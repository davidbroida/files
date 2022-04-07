import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ colors }) {
  const links = colors.map((color) => (
    <NavLink key={color.name} to={`/colors/${color.name.toLowerCase()}`}>
      {color.name}
    </NavLink>
  ));
  return <nav>{links}</nav>;
}

export default NavBar;
