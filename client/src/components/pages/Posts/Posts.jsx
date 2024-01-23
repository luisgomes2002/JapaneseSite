import { useContext, useEffect, useState } from "react";
import {
  commentCreate,
  commentsDelete,
  getByIdPost,
  likeFunction,
} from "../../../services/postsServices";
import { Link, useParams } from "react-router-dom";
import {
  CommentBox,
  Comments,
  CommentsArea,
  FollowAndLike,
  LinksRef,
  OnlyPostArea,
  PostCreatorInfo,
  TextEdit,
} from "./PostsStyle";
import { UserContext } from "../../context/UserContext";
import { findUser, followUser } from "../../../services/userServices";

const Post = () => {
  const [post, setPost] = useState([]);
  const [postUser, setPostUser] = useState({});
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [hasLiked, setHasLiked] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const [message, setMessage] = useState("");

  const getPost = async () => {
    try {
      const postResponse = await getByIdPost(id);
      const UserResponse = await findUser(postResponse.data.username);
      setPost(postResponse.data);
      setPostUser(UserResponse.data);
    } catch (error) {
      console.error("Erro ao buscar o post:", error.message);
    }
  };

  const createComment = async () => {
    event.preventDefault();
    const response = await commentCreate(id, message);
    return response;
  };

  const deleteComment = async (idComment) => {
    const response = await commentsDelete(id, idComment);
    return response;
  };

  const checkIfFollowed = () => {
    if (user.followed) {
      return user.followed.some((users) =>
        users.idName.includes(postUser.username),
      );
    }
    return false;
  };

  const follow = async () => {
    try {
      await followUser(postUser.username);
      setFollowBtn(!followBtn);
    } catch (e) {
      console.log(e);
    }
  };

  const checkIfLiked = () => {
    if (post.likes) {
      return post.likes.some((post) => post.userId.includes(user._id));
    }
  };

  const like = async () => {
    try {
      await likeFunction(post.id);
      setHasLiked(!hasLiked);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
    setFollowBtn(checkIfFollowed());
    setHasLiked(checkIfLiked());
  }, [id, post.username, user._id]);

  return (
    <div style={{ backgroundColor: "#121214" }}>
      <OnlyPostArea>
        <img src={post.banner} alt="banner" />
        <div>Outros posts</div>
        <div>
          <PostCreatorInfo>
            <img src={post.avatar} alt="avatar" />
            <div>
              <h1>{post.name}</h1>
              {post.username == "Conta Deletada" ? (
                <p>@CONTA DELETADA</p>
              ) : (
                <Link to={`/profile/${post.username}`}>
                  <p>@{post.username}</p>
                </Link>
              )}
            </div>
          </PostCreatorInfo>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
        <FollowAndLike>
          {user.username === post.username ? null : (
            <button
              onClick={follow}
              style={{ backgroundColor: followBtn ? "#6f00ff" : "#2c2a2a" }}
            >
              {followBtn === true ? "Seguindo" : "Seguir"}
            </button>
          )}

          <button
            onClick={like}
            style={{ backgroundColor: hasLiked ? "red" : "#2c2a2a" }}
          >
            {hasLiked ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
          <LinksRef>
            <p>Links de referencia: https://www.instagram.com/_gomesluis/ </p>
            <p>Links de redes sociais: https://www.instagram.com/_gomesluis/</p>
            <p>Links de redes sociais: https://www.instagram.com/_gomesluis/</p>
            <p>Links de redes sociais: https://www.instagram.com/_gomesluis/</p>
            <p>Links de redes sociais: https://www.instagram.com/_gomesluis/</p>
          </LinksRef>
        </FollowAndLike>
      </OnlyPostArea>
      <Comments>
        <h1>{post.comments?.length} Comentarios</h1>
        {post.comments &&
          post.comments.map((comment) => (
            <CommentsArea key={comment.idComment}>
              <Link to={`/profile/${comment.userIdUsername}`}>
                <img src={comment.userIdAvatar} alt="avatar" />
              </Link>
              <CommentBox>
                {/* <h1>{comment.userIdName}</h1> */}
                <Link to={`/profile/${comment.userIdUsername}`}>
                  <h2>@{comment.userIdUsername}</h2>
                </Link>
                <TextEdit>
                  <p>{comment.message}</p>
                  <button onClick={() => deleteComment(comment.idComment)}>
                    Edit
                  </button>
                </TextEdit>
              </CommentBox>
            </CommentsArea>
          ))}
        <CommentsArea>
          <img src={user.avatar} alt="avatar" />
          <CommentBox>
            <form onSubmit={createComment}>
              <textarea
                placeholder="Adicione um comentario"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Comment</button>
            </form>
          </CommentBox>
        </CommentsArea>
      </Comments>
    </div>
  );
};

export default Post;
