import { useState, useContext, useEffect } from "react";
import { deleteNotification, userLogged } from "../../services/userServices";
import {
  Nav,
  NavBarLogo,
  NavBarCategories,
  GoAuth,
  Notifications,
  ForEachNotification,
} from "./NavBarStyle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

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

  const deleteNotificationsNavBar = async (userId, notificationId) => {
    try {
      await deleteNotification(userId, notificationId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, [user.notification]);

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
              <button onClick={toggleNotifications}>
                <i className="fa-solid fa-bell"></i>
                {user.notification && user.notification.length > 0 && (
                  <span>({user.notification.length})</span>
                )}
              </button>
              {showNotifications && (
                <Notifications>
                  {user.notification?.map((notifications) => {
                    return (
                      <ForEachNotification key={notifications._id}>
                        <Link to={`/profile/${notifications.username}`}>
                          <h2>{notifications.username || "User Deletado"}</h2>
                          <p>{notifications.title}</p>
                        </Link>
                        <button
                          onClick={() =>
                            deleteNotificationsNavBar(
                              user._id,
                              notifications.notificationIdCreated,
                            )
                          }
                        >
                          <i className="fa-solid fa-x"></i>
                        </button>
                      </ForEachNotification>
                    );
                  })}
                </Notifications>
              )}
            </>
          ) : (
            <>
              {/* MOD NAV BAR */}
              <Link to="/categories">Categorias</Link>
              <Link to="/post">Sobre</Link>
              <Link to="/community">Comunidade</Link>
              <button onClick={toggleNotifications}>
                <i className="fa-solid fa-bell"></i>
                {user.notification && user.notification.length > 0 && (
                  <span>({user.notification.length})</span>
                )}
              </button>
              {showNotifications && (
                <Notifications>
                  {user.notification?.map((notifications) => {
                    return (
                      <ForEachNotification key={notifications._id}>
                        <Link to={`/profile/${notifications.username}`}>
                          <h2>{notifications.username || "User Deletado"}</h2>
                          <p>{notifications.title}</p>
                        </Link>
                        <button
                          onClick={() =>
                            deleteNotificationsNavBar(
                              user._id,
                              notifications.notificationIdCreated,
                            )
                          }
                        >
                          <i className="fa-solid fa-x"></i>
                        </button>
                      </ForEachNotification>
                    );
                  })}
                </Notifications>
              )}
              {/* <Link to="/adm">Adm</Link> */}
            </>
          )}
          {user && Object.keys(user).length > 0 ? (
            <>
              <GoAuth>
                <button onClick={goUserPage}>
                  {/* <img src={user.avatar} alt="avatar" /> */}
                  Perfil
                </button>
              </GoAuth>

              <GoAuth>
                <button onClick={signout}>Sair</button>
              </GoAuth>
            </>
          ) : (
            <GoAuth>
              <button onClick={goAuth}>Entrar</button>
            </GoAuth>
          )}
        </NavBarCategories>
      </NavBarLogo>
    </Nav>
  );
};

export default NavBar;
