import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/menu/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menu/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/additem">Add Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
