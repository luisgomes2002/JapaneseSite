import { useContext, useEffect, useState } from "react";
import NavBar from "../nav/NavBar";
import { UserContext } from "../context/UserContext";
import {
  ChooseColor,
  ChooseColorArea,
  InfoUpdate,
  UserUpdateArea,
} from "./UserUpdateStyle";
import { ButtonSpaceArea } from "./UserStyle";
import ModalDelete from "../modal/modalDelete/ModalDelete";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();
  const [color, setColor] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navegate = useNavigate();

  const userLoggedIn = () => {
    if (user.username !== username) {
      navegate("/");
    }
  };

  const selectColor = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    userLoggedIn();
  }, [user]);

  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
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
            <ChooseColor>
              <p>Selecione a cor de fundo:</p>
              <ChooseColorArea style={{ backgroundColor: color }}>
                <label>Cor escolhida: {color}</label>
              </ChooseColorArea>
              <input type="color" value={color} onChange={selectColor} />
            </ChooseColor>
            <p>Informações do perfil:</p>
            <textarea placeholder="Texto de apresentação" />
            <div>
              <p>Nivel de japones</p>
              <select>
                <option value="">Selecione uma opcao</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
              </select>
            </div>
          </form>
        </InfoUpdate>
        <ButtonSpaceArea>
          <button>Alterar</button>
          <button
            onClick={() => setOpenModal(!openModal)}
            style={{ backgroundColor: "#aa2525" }}
          >
            {openModal && <ModalDelete />}
            Deletar Conta
          </button>
        </ButtonSpaceArea>
      </UserUpdateArea>
    </>
  );
};

export default UpdateUser;
