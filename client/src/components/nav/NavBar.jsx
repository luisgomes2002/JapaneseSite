import React from "react";
import { Nav, NavBarLogo, NavBarCategories } from "./NavBarStyled";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Nav>
      <NavBarLogo>
        <Link to="/">
          <h1>MURASAKI</h1>
        </Link>
        <NavBarCategories>
          <Link to="/categorias">Categorias</Link>
          <Link to="/">Sobre</Link>
          <Link to="/community">Comunidade</Link>
          <Link to="/login">
            <i className="fa-regular fa-user"></i>
          </Link>
        </NavBarCategories>
      </NavBarLogo>
    </Nav>
  );
}

export default NavBar;
