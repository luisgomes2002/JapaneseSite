import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import {
  ChooseColor,
  ChooseColorArea,
  InfoUpdate,
  UserUpdateArea,
  UpdateAreaMargin,
  UserCard,
  StyledSelect,
  ChangePassword,
} from "./UserUpdateStyle";
import { ButtonSpaceArea } from "./UserPageStyle";
import ModalDelete from "../modal/modalDelete/ModalDelete";
import { useNavigate, useParams } from "react-router-dom";
import { updatePasswordUser, updateUser } from "../../services/userServices";
import { usersSchema } from "../schemas/usersSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextLimit } from "../textLimit/TextLimit";
import { SpanErrors } from "./ManagePostsStyle";

const UpdateUserFunction = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();
  const [color, setColor] = useState("");
  const [openModal, setOpenModal] = useState(false);

  //user informations
  const [name, setName] = useState("");
  const [usernameForms, setUsernameForms] = useState("");
  const [icon, setIcon] = useState("");
  const [background, setBackground] = useState("");
  const [about, setAbout] = useState("");

  //password
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: handleSubmitUser,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(usersSchema),
  });

  const userLoggedIn = () => {
    if (user.username !== username) {
      navigate("/");
    }
  };

  const editProfile = async (data) => {
    try {
      await updateUser(data, user._id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (data) => {
    try {
      await updatePasswordUser(data, user._id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const showUserInformations = () => {
    setName(user.name);
    setValue("name", user.name);

    setUsernameForms(user.username);
    setValue("username", user.username);

    setValue("email", user.email);

    setIcon(user.avatar);
    setValue("avatar", user.avatar);

    setBackground(user.background);
    setValue("background", user.background);

    setAbout(user.about);
    setValue("about", user.about);
  };

  const selectColor = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    userLoggedIn();
    showUserInformations();
  }, []);

  return (
    <UpdateAreaMargin>
      <UserUpdateArea>
        <h1>Alterar informações da conta {user.username}</h1>
        <InfoUpdate>
          <form onSubmit={handleSubmitUser(editProfile)}>
            <p>Informações basicas:</p>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              {...register("name")}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username")}
              onChange={(e) => setUsernameForms(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <p>Estilo do perfil:</p>
            <input
              type="text"
              name="avatar"
              placeholder="Foto de perfil"
              {...register("avatar")}
              onChange={(e) => setIcon(e.target.value)}
            />
            <input
              type="text"
              name="background"
              placeholder="Plano de fundo"
              {...register("background")}
              onChange={(e) => setBackground(e.target.value)}
            />
            <ChooseColor>
              <div>
                <p>Selecione a cor de fundo:</p>
                <ChooseColorArea style={{ backgroundColor: color }}>
                  <label>Cor escolhida: {color}</label>
                </ChooseColorArea>
                <input type="color" value={color} onChange={selectColor} />
              </div>
              <div>
                <p>Nivel de japones</p>
                <StyledSelect>
                  <option value="">Selecione uma opcao</option>
                  <option value="N5">N5</option>
                  <option value="N4">N4</option>
                  <option value="N3">N3</option>
                  <option value="N2">N2</option>
                  <option value="N1">N1</option>
                </StyledSelect>
              </div>
            </ChooseColor>
            <p>Informações do perfil: </p>
            <textarea
              name="text"
              laceholder="Texto de apresentação"
              {...register("about")}
              onChange={(e) => setAbout(e.target.value)}
            />
            <ButtonSpaceArea>
              <button type="submit">Alterar</button>
              <button
                onClick={() => setOpenModal(!openModal)}
                style={{ backgroundColor: "#aa2525" }}
              >
                {openModal && <ModalDelete />}
                Deletar Conta
              </button>
              <SpanErrors>
                {errors.name && <span>{errors.name.message}</span>}
              </SpanErrors>
            </ButtonSpaceArea>
          </form>
          <UserCard>
            <img src={background} alt="background" />
            <section>
              <img src={icon} alt="icon" />
              <h1>{name}</h1>

              <article>
                <h2>{usernameForms}</h2>
                <h2>JLPT: N2</h2>
              </article>

              <TextLimit
                text={about || `Até agora ${name} não incluiu uma introdução.`}
                limit={100}
              />
            </section>
            <ChangePassword>
              <input
                type="checkbox"
                onChange={handlePasswordChange}
                checked={!showPasswordFields}
              />
              <h2>Alterar Senha:</h2>
              <form onSubmit={handleSubmitUser(changePassword)}>
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  disabled={showPasswordFields}
                  {...register("password")}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar Senha"
                  disabled={showPasswordFields}
                  {...register("confirmPassword")}
                />
                <button type="submit">Alterar Senha</button>
              </form>
            </ChangePassword>
          </UserCard>
        </InfoUpdate>
      </UserUpdateArea>
    </UpdateAreaMargin>
  );
};

export default UpdateUserFunction;
