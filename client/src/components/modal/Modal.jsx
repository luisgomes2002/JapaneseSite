import { Link } from "react-router-dom";
import { ModalArea, Overlay } from "./ModalStyle";

const Modal = (props) => {
  return (
    <>
      <Overlay />
      <ModalArea>
        {props.users.map((itens) => {
          return (
            <Link to={`/profile/${itens.idName}`} key={itens.id}>
              <h2>{itens.idName}</h2>
              <img src={itens.idAvatar} alt="avatar" />
              <img src={itens.idBackground} alt="background" />
            </Link>
          );
        })}
      </ModalArea>
    </>
  );
};

export default Modal;
