import { useContext, useEffect } from "react";
import { userLogged } from "../../services/userServices";
import { Nav, NavBarLogo, NavBarCategories } from "./NavBarStyle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const goAuth = () => {
    navigate("/auth");
  };

  const goUserPage = () => {
    navigate(`/profile/${user.username}`);
  };

  const signout = () => {
    Cookies.remove("token");
    setUser(undefined);
    window.location.reload();
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
          {user &&
          (user.fullPermission === undefined || !user.fullPermission) ? (
            <>
              <Link to="/categories">Categorias</Link>
              <Link to="/post">Sobre</Link>
              <Link to="/community">Comunidade</Link>
            </>
          ) : (
            <>
              <Link to="/categories">Categorias</Link>
              <Link to="/post">Sobre</Link>
              <Link to="/community">Comunidade</Link>
              <Link to="/adm">Adm</Link>
            </>
          )}
          {user && Object.keys(user).length > 0 ? (
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
};

export default NavBar;
