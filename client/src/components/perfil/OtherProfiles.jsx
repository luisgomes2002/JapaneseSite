import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findUser, followUser } from "../../services/userServices";
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
  BasicInfoUser,
} from "./UserStyle";
import NavBar from "../nav/NavBar";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../cards/Card";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState({});
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [followBtn, setFollowBtn] = useState(false);

  const navigate = useNavigate();
  if (username === user.username) {
    navigate(`/myprofile/${user.username}`);
  }

  const getProfile = async () => {
    try {
      const response = await findUser(username);
      setProfileInfo(response.data);
      const postsResponse = await getAllPostsByUser(username);
      setPosts(postsResponse.data.postsByUser);
    } catch (e) {
      console.log(e.message);
    }
  };

  const follow = async () => {
    try {
      await followUser(username);
      followBtn === true ? setFollowBtn(false) : setFollowBtn(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, [profileInfo.follows, user.username]);

  const backgroundStyle = {
    backgroundImage:
      profileInfo.background && profileInfo.background !== "undefined"
        ? `url(${profileInfo.background})`
        : "none",
    backgroundColor:
      profileInfo.background && profileInfo.background !== "undefined"
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
              <img src={profileInfo.avatar} alt="img" />
              <BasicInfoUser>
                <button onClick={follow}>
                  {followBtn === true ? "Seguindo" : "Seguir"}
                </button>
                <h2>{profileInfo.name} </h2>
                <h3>{profileInfo.username}</h3>
                <p>JLPT: N2</p>
              </BasicInfoUser>
            </div>
            <div>
              <UserAbout>
                <h1>Sobre mim</h1>
                <p>
                  {profileInfo.about
                    ? profileInfo.about
                    : "Até agora " +
                      profileInfo.name +
                      " não incluiu uma introdução."}
                </p>
              </UserAbout>
              <Follows>
                <UserInfoPostsFollows>
                  <p>Posts</p>
                  <h3>{posts?.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguindo</p>
                  <h3>{profileInfo.followed?.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Seguidores</p>
                  <h3>{profileInfo.follows?.length}</h3>
                </UserInfoPostsFollows>
                <UserInfoPostsFollows>
                  <p>Pontos</p>
                  <h3>{profileInfo.points}</h3>
                </UserInfoPostsFollows>
              </Follows>
            </div>
          </UserInformation>
          <CadsAndAchievements>
            <section>
              <h1>Posts</h1>
              {posts?.length > 0 ? (
                <div>
                  {posts.map((item) => {
                    return (
                      <Link to={`/post/${item.id}`} key={item.id}>
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
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <CardEmpty>
                  <button>
                    <h2>Nenhum post encontrado!</h2>
                  </button>
                </CardEmpty>
              )}
            </section>
          </CadsAndAchievements>
        </UserInfomationsArea>
      </GifArea>
    </TotalSpace>
  );
};

export default Profile;