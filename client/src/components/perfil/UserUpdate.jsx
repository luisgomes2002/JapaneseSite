import { useContext, useState } from "react";
import NavBar from "../nav/NavBar";
import { UserContext } from "../context/UserContext";
import { InfoUpdate, UserUpdateArea } from "./UserUpdateStyle";
import { ButtonSpaceArea } from "./UserStyle";
import ModalDelete from "../modal/modalDelete/ModalDelete";

const UpdateUser = () => {
  const { user } = useContext(UserContext);
  const [color, setColor] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const selectColor = (e) => {
    setColor(e.target.value);
  };

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
            <div>
              <p>Selecione a cor de fundo:</p>
              <div style={{ backgroundColor: color }}>
                <label>Escolha a cor: {color}</label>
              </div>

              <input type="color" value={color} onChange={selectColor} />
            </div>
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
