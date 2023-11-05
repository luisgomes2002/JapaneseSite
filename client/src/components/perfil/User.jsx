import { useContext, useEffect, useState } from "react";
import NavBar from "../nav/NavBar";
import {
  UserInfomationsArea,
  TotalSpace,
  UserInformation,
  GifArea,
  UserAbout,
  Follows,
  CadsAndAchievements,
  UserInfoPostsFollows,
  CardEmpty,
} from "./UserStyle";
import { UserContext } from "../context/UserContext";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../cards/Card";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();
  const [posts, setPostsd] = useState([]);

  const findAllPostsByUser = async () => {
    const postsResponse = await getAllPostsByUser(username);
    setPostsd(postsResponse.data.postsByUser);
  };

  useEffect(() => {
    findAllPostsByUser();
  }, []);

  const backgroundStyle = {
    backgroundImage:
      user.background && user.background !== "undefined"
        ? `url(${user.background})`
        : "none",
    backgroundColor:
      user.background && user.background !== "undefined"
        ? "transparent"
        : "black",
  };

  return (
    <TotalSpace style={{ backgroundColor: "#121214" }}>
      <NavBar />
      <GifArea style={backgroundStyle}>
        <UserInfomationsArea>
          <UserInformation>
            <div>
              <img src={user.avatar} alt="img" />
              <h2>
                {user.name}{" "}
                <button>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </h2>
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
                  <h3>{posts?.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguindo</p>
                  <h3>{user.followed?.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguidores</p>
                  <h3>{user.follows?.length}</h3>
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
              <h1>Posts</h1>
              <div>
                {posts.map((item) => {
                  return (
                    <Card
                      perfil={true}
                      key={item.id}
                      title={item.title}
                      text={item.text}
                      banner={item.banner}
                      likes={item.likes}
                      comments={item.comments}
                      username={item.username}
                    />
                  );
                })}
              </div>
              <CardEmpty>
                <button>
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </CardEmpty>
            </section>
          </CadsAndAchievements>
        </UserInfomationsArea>
      </GifArea>
    </TotalSpace>
  );
};

export default UserPage;
