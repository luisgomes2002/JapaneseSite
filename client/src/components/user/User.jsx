import React from "react";
import NavBar from "../nav/NavBar";
import {
  UserInfomationsArea,
  TotalSpace,
  UserInformation,
  GifArea,
  UserAbout,
  Follows,
  CadsAndAchievements,
  Card,
  Achievementsiv,
  Case,
} from "./UserStyle";
import baka from "../../assets/baka/channelBaka.jpg";
import cyberpunk from "../../assets/cyberpunk/img.gif";

const UserPage = () => {
  return (
    <TotalSpace style={{ backgroundColor: "#121214" }}>
      <NavBar />
      <GifArea style={{ backgroundImage: `url(${cyberpunk})` }}>
        <UserInfomationsArea>
          <UserInformation>
            <div>
              <img src={baka} alt="img" />
              <h2>Luis Gustavo</h2>
              <h3>UserName</h3>
              <p>JLPT: N2</p>
            </div>
            <div>
              <Follows>
                <h3>10 Posts</h3>
                <h3>10 Seguidores</h3>
                <h3>10 Seguindo</h3>
              </Follows>
              <UserAbout>
                <h1>Sobre mim</h1>
                <p>
                  Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos
                  aqueles que desejam embarcar na emocionante jornada de
                  aprender japonês. Sou Luis Gomes, o criador deste projeto
                  apaixonante, e estou entusiasmado em compartilhar com você
                  tudo o que o MURASAKI tem a oferecer. Junte-se a nós no
                  MURASAKI e comece sua jornada de aprendizado do japonês hoje
                  mesmo. Vamos explorar juntos as maravilhas deste idioma único
                  e desbloquear um mundo de oportunidades!
                </p>
              </UserAbout>
            </div>
          </UserInformation>
          <CadsAndAchievements>
            <section>
              <h1 style={{ paddingLeft: "7%" }}>Posts</h1>
              <Card></Card>
            </section>
            <section>
              <h1 style={{ textAlign: "center" }}>Conquistas</h1>
              <Achievementsiv>
                <Case>
                  <h3>7</h3>
                  <p>Anos Murasaki</p>
                </Case>
              </Achievementsiv>
            </section>
          </CadsAndAchievements>
        </UserInfomationsArea>
      </GifArea>
    </TotalSpace>
  );
};

export default UserPage;
