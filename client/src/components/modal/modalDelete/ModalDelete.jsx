import { Overlay } from "../modalFollow/ModalStyleFollow";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteUser } from "../../../services/userServices";
import { DeleteModalArea, UserInfo, NameAndUsername } from "./ModalDeleteStyle";

const ModalDelete = () => {
  const { user } = useContext(UserContext);

  const deleteAccount = async (userAccountId) => {
    await deleteUser(userAccountId);
    window.location.reload();
  };

  return (
    <>
      <Overlay />
      <DeleteModalArea>
        <h1>Excluir Conta?</h1>
        <UserInfo>
          <img src={user.avatar} alt="" />
          <NameAndUsername>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
          </NameAndUsername>
          <h2>Pontos: {user.points}</h2>
          <h2>Posts:{user.posts ? user.posts.length : 0}</h2>
        </UserInfo>
        <button
          onClick={() => deleteAccount(user._id)}
          style={{ backgroundColor: "#aa2525" }}
        >
          Deletar Conta
        </button>
      </DeleteModalArea>
    </>
  );
};

export default ModalDelete;
