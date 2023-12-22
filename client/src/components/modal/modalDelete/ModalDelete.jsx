import { ModalArea, Overlay } from "../modalFollow/ModalStyleFollow";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteUser } from "../../../services/userServices";

const ModalDelete = () => {
  const { user } = useContext(UserContext);

  const deleteAccount = async () => {
    await deleteUser(user._id);
  };

  return (
    <>
      <Overlay />
      <ModalArea>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <img src={user.avatar} alt="" />
        <button
          onClick={() => {
            deleteAccount;
          }}
          style={{ backgroundColor: "#aa2525" }}
        >
          Deletar Conta
        </button>
      </ModalArea>
    </>
  );
};

export default ModalDelete;
