import { Link } from "react-router-dom";
import { ModalArea, Overlay, InfoModalUser } from "./ModalStyle";
import { useEffect, useState } from "react";
import { findUser } from "../../services/userServices";

const Modal = ({ users: initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(true);

  const findUsersByUsername = async () => {
    try {
      const userDetails = await Promise.all(
        initialUsers.map(async (user) => {
          const response = await findUser(user.idName);
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
          <p>Loading...</p>
        ) : (
          users.map((user) => (
            <Link to={`/profile/${user.username}`} key={user._id}>
              <img src={user.background} alt="background" />
              <InfoModalUser>
                <h2>{user.username}</h2>
                <img src={user.avatar} alt="avatar" />
              </InfoModalUser>
            </Link>
          ))
        )}
      </ModalArea>
    </>
  );
};

export default Modal;
