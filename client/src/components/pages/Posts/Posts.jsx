import { useEffect, useState } from "react";
import { getByIdPost } from "../../../services/postsServices";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

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
      <h1>{post.name}</h1>
      <Link to={`/profile/${post.username}`}>
        <p>@{post.username}</p>
      </Link>
      <img src={post.banner} alt="" />
      <h2>{post.text}</h2>
    </>
  );
};

export default Post;
