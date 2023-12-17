import { useContext } from "react";
import NavBar from "../nav/NavBar";
import { UserContext } from "../context/UserContext";
import { InfoUpdate, UserUpdateArea } from "./UserUpdateStyle";
import { ButtonSpaceArea } from "./UserStyle";
import { deleteUser } from "../../services/userServices";

const UpdateUser = () => {
  const { user } = useContext(UserContext);

  const deleteAccount = async () => {
    await deleteUser(user._id);
  };

  return (
    <>
      <NavBar />
      <UserUpdateArea>
        <InfoUpdate>
          <h1>Alterar informações da conta {user.username}</h1>
          <form>
            <p>Informações basicas:</p>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <input type="text" placeholder="Confirmar Senha" />
            <p>Estilo do perfil:</p>
            <input type="text" placeholder="Foto de perfil" />
            <input type="text" placeholder="Plano de fundo" />
            <p>Informações do perfil:</p>
            <input type="text" placeholder="Texto de apresentação" />
            <input type="text" placeholder="JLPT" />
          </form>
        </InfoUpdate>
        <ButtonSpaceArea>
          <button>Alterar</button>
          <button
            onClick={deleteAccount}
            style={{ backgroundColor: "#aa2525" }}
          >
            Deletar Conta
          </button>
        </ButtonSpaceArea>
      </UserUpdateArea>
    </>
  );
};

export default UpdateUser;
