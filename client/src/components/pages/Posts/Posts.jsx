import { useEffect, useState } from "react";
import { getByIdPost } from "../../../services/postsServices";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../nav/NavBar";
import { OnlyPostArea } from "./PostsStyle";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  console.log(post);

  const getPost = async () => {
    try {
      const response = await getByIdPost(id);
      setPost(response.data);
    } catch (error) {
      console.error("Erro ao buscar o post:", error.message);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
      <OnlyPostArea>
        <img src={post.banner} alt="banner" />
        <div>Outros posts</div>
        <div>
          <img src={post.avatar} alt="avatar" />
          <h1>{post.name}</h1>
          {post.username == "Conta Deletada" ? (
            <p>@CONTA DELETADA</p>
          ) : (
            <Link to={`/profile/${post.username}`}>
              <p>@{post.username}</p>
            </Link>
          )}
          <i className="fa-regular fa-heart"></i>
          <span>{post.likes?.length}</span>
          <h2>{post.text}</h2>
        </div>
        <div></div>
      </OnlyPostArea>
      <div>
        {post.comments &&
          post.comments.map((comment) => (
            <div key={comment.idComment}>
              <h1>{comment.userIdName}</h1>
              <h2>{comment.userIdUsername}</h2>
              <img src={comment.userIdAvatar} alt="avatar" />
              <p>{comment.message}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
