import NavBar from "../../nav/NavBar";
import { Card } from "./Card";
import { getSearchPost } from "../../../services/postsServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { CardContainerBody } from "./CommunityStyled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../searchSchema.jsx";

const Search = () => {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  const searchPost = async () => {
    try {
      const postResponse = await getSearchPost(title);
      setPosts(postResponse.data.foundPosts);
      console.log(postResponse.data.foundPosts);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    searchSchema();
  }

  useEffect(() => {
    searchPost();
  }, [title]);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <form onSubmit={handleSubmit(onSearch)}>
        <div>
          {/*transform in button*/}
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            {...register("title")}
            type="text"
            placeholder="Pequise aqui"
          />
        </div>
        {errors.title && <span>{errors.title.message}</span>}
      </form>
      <h1>{title}</h1>
      <CardContainerBody>
        {posts.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </CardContainerBody>
    </>
  );
};

export default Search;
