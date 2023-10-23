import { Nav, NavBarLogo, NavBarCategories } from "./NavBarStyle";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const goAuth = () => {
    navigate("/auth");
  };

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
          <button onClick={goAuth}>
            <i className="fa-regular fa-user"></i>
          </button>
        </NavBarCategories>
      </NavBarLogo>
    </Nav>
  );
}

export default NavBar;
