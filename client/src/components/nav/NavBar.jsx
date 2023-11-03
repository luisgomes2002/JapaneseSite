import { useContext, useEffect } from "react";
import { userLogged } from "../../services/userServices";
import { Nav, NavBarLogo, NavBarCategories } from "./NavBarStyle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const goAuth = () => {
    navigate("/auth");
  };

  const goUserPage = () => {
    navigate("/user");
  };

  const signout = () => {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  };

  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

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
          {user ? (
            <>
              <button onClick={goUserPage}>
                <img src={user.avatar} alt="" />
              </button>

              <button onClick={signout}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </>
          ) : (
            <button onClick={goAuth}>
              <i className="fa-regular fa-user"></i>
            </button>
          )}
        </NavBarCategories>
      </NavBarLogo>
    </Nav>
  );
}

export default NavBar;
