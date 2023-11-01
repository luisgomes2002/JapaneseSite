import { useEffect, useState } from "react";
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
  UserInfoPostsFollows,
} from "./UserStyle";
import baka from "../../assets/baka/channelBaka.jpg";
import cyberpunk from "../../assets/cyberpunk/img.gif";
import Cookies from "js-cookie";
import { userLogged } from "../../services/userServices";

const UserPage = () => {
  const [user, setUser] = useState({});

  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

  return (
    <TotalSpace style={{ backgroundColor: "#121214" }}>
      <NavBar />
      <GifArea style={{ backgroundImage: `url(${cyberpunk})` }}>
        <UserInfomationsArea>
          <UserInformation>
            <div>
              <img src={user.avatar} alt="img" />
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
              <p>JLPT: N2</p>
            </div>
            <div>
              <UserAbout>
                <h1>Sobre mim</h1>
                <p>
                  {user.about
                    ? user.about
                    : "Até agora " + user.name + " não incluiu uma introdução."}
                </p>
              </UserAbout>
              <Follows>
                <UserInfoPostsFollows>
                  <p>Posts</p>
                  <h3>0</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguindo</p>
                  <h3>{user.followed.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguidores</p>
                  <h3>{user.follows.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Pontos</p>
                  <h3>{user.points}</h3>
                </UserInfoPostsFollows>
              </Follows>
            </div>
          </UserInformation>
          <CadsAndAchievements>
            <section>
              <h1 style={{ paddingLeft: "7%" }}>Posts</h1>
              <Card></Card>
            </section>
          </CadsAndAchievements>
        </UserInfomationsArea>
      </GifArea>
    </TotalSpace>
  );
};

export default UserPage;
