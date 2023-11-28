import { Link } from "react-router-dom";
import {
  ModalArea,
  Overlay,
  InfoModalUser,
  ShowUsers,
  NameUser,
} from "./ModalStyle";
import { useEffect, useState } from "react";
import { findUser } from "../../services/userServices";
import Black from "../../assets/AllBlack.png";

const Modal = ({ users: initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(true);

  const findUsersByUsername = async () => {
    try {
      const userDetails = await Promise.all(
        initialUsers.map(async (user) => {
          const response = await findUser(
            user.idName !== undefined ? user.idName : user.userIdName,
          );
          return response.data;
        }),
      );
      setUsers(userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findUsersByUsername();
  }, []);

  return (
    <>
      <Overlay />
      <ModalArea>
        {loading ? (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: 0,
            }}
          >
            Loading...
          </h2>
        ) : users.length === 0 ? (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: 0,
            }}
          >
            Nenhum usuário encontrado.
          </h2>
        ) : (
          users.map((user) => (
            <ShowUsers key={user._id}>
              <Link to={`/profile/${user.username}`}>
                <img
                  src={user.background === null ? Black : user.background}
                  alt="background"
                />
                <InfoModalUser>
                  <img src={user.avatar} alt="avatar" />
                  <NameUser>
                    <h1>{user.username}</h1>
                    <h3>{user.name}</h3>
                  </NameUser>
                  <h2>Pontos: {user.points}</h2>
                </InfoModalUser>
              </Link>
            </ShowUsers>
          ))
        )}
      </ModalArea>
    </>
  );
};

export default Modal;
