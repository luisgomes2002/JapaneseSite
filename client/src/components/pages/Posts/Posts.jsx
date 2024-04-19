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
  OtherPosts,
  PostCreatorInfo,
  PostIntroduction,
  PostText,
  ReplayBox,
  ReplayComment,
  TextEdit,
  UserAndPostInfo,
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
  const [replay, setReplay] = useState("");

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
    const response = await commentCreate(id, message.trim());
    return response;
  };

  const replayComment = async () => {};

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
  }, [id, post.username, user._id, post.comments]);

  return (
    <div style={{ backgroundColor: "#121214" }}>
      <PostIntroduction>
        <img src={post.banner} alt="banner" />
        <UserAndPostInfo>
          <div>
            <h1>{post.name}</h1>
            <h1>{post.title}</h1>
          </div>
          <OtherPosts>Outros posts</OtherPosts>
        </UserAndPostInfo>
      </PostIntroduction>
      <OnlyPostArea>
        <div>
          <PostCreatorInfo>
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
          <PostText>
            <p>{post.text}</p>
          </PostText>
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
            {post.links &&
              post.links.map((link) => (
                <>
                  <a href={link}>Instagram</a>
                </>
              ))}
          </LinksRef>
        </FollowAndLike>
      </OnlyPostArea>
      <Comments>
        <h1>{post.comments?.length} Comentarios</h1>
        <CommentsArea>
          <img src={user.avatar} alt="icon" />
          <CommentBox>
            <form onSubmit={createComment}>
              <textarea
                placeholder="Adicione um comentario"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div>
                <button type="submit">Comment</button>
                <button>Cancel</button>
              </div>
            </form>
          </CommentBox>
        </CommentsArea>
        {post.comments &&
          post.comments.map((comment) => (
            <>
              <CommentsArea key={comment.idComment}>
                <Link to={`/profile/${comment.username}`}>
                  <img src={comment.icon} alt="icon" />
                </Link>
                <CommentBox>
                  {/* <h1>{comment.userIdName}</h1> */}
                  <Link to={`/profile/${comment.username}`}>
                    <h2>@{comment.username}</h2>
                  </Link>
                  <TextEdit>
                    <p>{comment.message}</p>
                    <div>
                      <button onClick={() => deleteComment(comment.idComment)}>
                        Edit
                      </button>
                      <button>Comment</button>
                    </div>
                  </TextEdit>
                </CommentBox>
              </CommentsArea>
              <ReplayComment>
                <img src={user.avatar} alt="icon" />
                <ReplayBox>
                  <form onSubmit={replayComment}>
                    <textarea
                      placeholder="Adicione um comentario"
                      value={replay}
                      onChange={(e) => setReplay(e.target.value)}
                    />
                    <div>
                      <button type="submit">Comment</button>
                      <button>Cancel</button>
                    </div>
                  </form>
                </ReplayBox>
              </ReplayComment>
            </>
          ))}
      </Comments>
    </div>
  );
};

export default Post;
