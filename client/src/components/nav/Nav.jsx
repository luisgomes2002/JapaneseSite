import React from "react";
import "./Nav.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo-nav--bar">
        <Link to="/">
          <h1>MURASAKI</h1>
        </Link>

        <div className="options-nav--bar">
          <Link to="/categorias">Categorias</Link>
          <Link to="/">Sobre</Link>
          <Link to="/community">Comunidade</Link>
          <Link to="/login">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
