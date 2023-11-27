import { Link } from "react-router-dom";
import { ModalArea, Overlay, InfoModalUser } from "./ModalStyle";
import { useEffect, useState } from "react";
import { findUser } from "../../services/userServices";

const Modal = (props) => {
  const [users, setUser] = useState([]);

  const findUserByUsername = async () => {
    const details = [];
    for (let i = 0; i < props.users.length; i++) {
      const postsResponse = await findUser(props.users[i].idName);
      details.push(postsResponse.data);
    }
    setUser(details);
  };

  useEffect(() => {
    findUserByUsername();
  }, []);

  return (
    <>
      <Overlay />
      <ModalArea>
        {users.map((itens) => (
          <Link to={`/profile/${itens.username}`} key={itens._id}>
            <img src={itens.background} alt="background" />
            <InfoModalUser>
              <h2>{itens.username}</h2>
              <img src={itens.avatar} alt="avatar" />
            </InfoModalUser>
          </Link>
        ))}
      </ModalArea>
    </>
  );
};

export default Modal;
