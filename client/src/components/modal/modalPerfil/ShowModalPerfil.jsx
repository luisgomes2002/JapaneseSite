import { useContext, useEffect, useState } from "react";
import {
  ModalTotalArea,
  AdjustArea,
  BaseInfo,
  FollowPosts,
  PostsImg,
  FollowButton,
} from "./ShowModalPerfilStyle";
import { UserContext } from "../../context/UserContext";
import { findUser, followUser } from "../../../services/userServices";
import { getAllPostsByUser } from "../../../services/postsServices";
import { Link } from "react-router-dom";

const ModalPerfil = ({ top, left, onMouseEnter, onMouseLeave, username }) => {
  const { user } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [followBtn, setFollowBtn] = useState(false);
  const newUsername = username;

  const getProfile = async () => {
    try {
      const response = await findUser(newUsername);
      setProfileInfo(response.data);
      const postsResponse = await getAllPostsByUser(newUsername);

      setPosts(postsResponse.data.postsByUser);
    } catch (e) {
      console.log(e.message);
    }
  };
  const checkIfFollowed = () => {
    if (user.followed) {
      return user.followed.some((users) => users.idName.includes(newUsername));
    }
    return false;
  };

  const follow = async () => {
    try {
      await followUser(newUsername);
      setFollowBtn(!followBtn);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfile();
    setFollowBtn(checkIfFollowed());
  }, []);

  return (
    <ModalTotalArea
      style={{ top, left }}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <AdjustArea>
        <BaseInfo>
          <Link to={`/profile/${profileInfo.username}`}>
            <img src={profileInfo.avatar} alt="img" />
            <div>
              <h3>{profileInfo.username}</h3>
              <h2>{profileInfo.name} </h2>
            </div>
          </Link>
        </BaseInfo>
        <FollowPosts>
          <div>
            <p>Posts</p>
            <h3>{posts?.length}</h3>
          </div>
          <div>
            <p>Seguindo</p>
            <h3>{profileInfo.followed?.length}</h3>
          </div>
          <div>
            <p>Seguidores</p>
            <h3>{profileInfo.follows?.length}</h3>
          </div>
        </FollowPosts>
        <PostsImg>
          {posts.slice(0, 3).map((item) => {
            return (
              <Link to={`/post/${item.id}`} key={item.id}>
                <img src={item.banner} alt="" />
              </Link>
            );
          })}
        </PostsImg>
        <FollowButton>
          <button onClick={follow}>
            {followBtn === true ? "Seguindo" : "Seguir"}
          </button>
        </FollowButton>
      </AdjustArea>
    </ModalTotalArea>
  );
};

export default ModalPerfil;
