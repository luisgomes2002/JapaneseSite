import { useContext, useEffect, useState } from "react";
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
  ButtonSpaceArea,
  BasicInfoUser,
} from "./UserPageStyle";
import { UserContext } from "../context/UserContext";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../cards/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../modal/modalFollow/ModalFollow";
import { findUser, followUser } from "../../services/userServices";

const UserPage = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [openFollowersModal, setOpenFollowersModal] = useState(false);
  const [openFollowedModal, setOpenFollowedModal] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});

  const navegate = useNavigate();

  const findAllPostsByUser = async () => {
    const postsResponse = await getAllPostsByUser(username);
    setPosts(postsResponse.data.postsByUser);
  };

  //Other accounts
  const getProfile = async () => {
    try {
      const response = await findUser(username);
      setProfileInfo(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const checkIfFollowed = () => {
    if (user.followed) {
      return user.followed.some((users) => users.idName.includes(username));
    }
    return false;
  };

  const follow = async () => {
    try {
      await followUser(username);
      setFollowBtn(!followBtn);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user.username === username) {
          await findAllPostsByUser();
        } else if (user.username !== username) {
          await getProfile();
          await findAllPostsByUser();
          setFollowBtn(checkIfFollowed());
        } else {
          navegate("/");
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
      }
    };

    fetchData();
  }, [username, user.username, navegate]);

  const backgroundStyle = {
    backgroundImage:
      user.background && user.background !== "undefined"
        ? `url(${user.background})`
        : "none",
    backgroundColor:
      user.background && user.background !== "undefined"
        ? "transparent"
        : user.backgroundColor,
  };

  if (user.username === username) {
    return (
      <TotalSpace style={{ backgroundColor: "#121214" }}>
        <GifArea style={backgroundStyle}>
          <UserInfomationsArea>
            <UserInformation>
              <div>
                <img src={user.avatar} alt="avatar" />
                <h2>
                  {user.name}{" "}
                  <Link to={`/update/${user.username}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
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
                      : "Até agora " +
                        user.name +
                        " não incluiu uma introdução."}
                  </p>
                </UserAbout>
                <Follows>
                  <UserInfoPostsFollows>
                    <p>Posts</p>
                    <h3>{posts?.length}</h3>
                  </UserInfoPostsFollows>
                  <UserInfoPostsFollows>
                    <button
                      onClick={() => setOpenFollowedModal(!openFollowedModal)}
                    >
                      {openFollowedModal && (
                        <Modal users={user.followed} type={"Seguindo"} />
                      )}
                      <ButtonSpaceArea>
                        <p>Seguindo</p>
                        <h3>{user.followed?.length}</h3>
                      </ButtonSpaceArea>
                    </button>
                  </UserInfoPostsFollows>
                  <UserInfoPostsFollows>
                    <button
                      onClick={() => setOpenFollowersModal(!openFollowersModal)}
                    >
                      {openFollowersModal && (
                        <Modal users={user.follows} type={"Seguidores"} />
                      )}
                      <ButtonSpaceArea>
                        <p>Seguidores</p>
                        <h3>{user.follows?.length}</h3>
                      </ButtonSpaceArea>
                    </button>
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
                <h1>
                  Posts{" "}
                  <Link to="/managePosts/add">
                    <button>
                      <i className="fa-solid fa-circle-plus"></i>
                    </button>
                  </Link>
                </h1>
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
                <CardEmpty>
                  <Link to="/managePosts/add">
                    <button>
                      <i className="fa-solid fa-circle-plus"></i>
                    </button>
                  </Link>
                </CardEmpty>
              </section>
            </CadsAndAchievements>
          </UserInfomationsArea>
        </GifArea>
      </TotalSpace>
    );
  } else {
    return (
      <TotalSpace style={{ backgroundColor: "#121214" }}>
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
                    <button
                      onClick={() => setOpenFollowedModal(!openFollowedModal)}
                    >
                      {openFollowedModal && (
                        <Modal users={profileInfo.followed} type={"Seguindo"} />
                      )}
                      <ButtonSpaceArea>
                        <p>Seguindo</p>
                        <h3>{profileInfo.followed?.length}</h3>
                      </ButtonSpaceArea>
                    </button>
                  </UserInfoPostsFollows>
                  <UserInfoPostsFollows>
                    <button
                      onClick={() => setOpenFollowersModal(!openFollowersModal)}
                    >
                      {openFollowersModal && (
                        <Modal
                          users={profileInfo.follows}
                          type={"Seguidores"}
                        />
                      )}
                      <ButtonSpaceArea>
                        <p>Seguidores</p>
                        <h3>{profileInfo.follows?.length}</h3>
                      </ButtonSpaceArea>
                    </button>
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
  }
};

export default UserPage;
