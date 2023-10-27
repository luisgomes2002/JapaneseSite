import {
  IntroSpaceCommunity,
  SearchArea,
  CardContainerBody,
  CardContainerCommunity,
  CardBodyCommunity,
  UsersPostsAreaCommunity,
} from "./CommunityStyled";
import NavBar from "../../nav/NavBar";
import { Card } from "./Card";
import { getAllPosts, getTopPost } from "../../../services/postsServices";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";

const UsersPostsArea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  const onSearch = (data) => {
    const { title } = data;
    navigate(`/search/${title}`);
    searchSchema();
  };

  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});

  const findAllPosts = async () => {
    const postResponse = await getAllPosts();
    setPosts(postResponse.data.results);
  };

  const findTopPost = async () => {
    const topPostResponse = await getTopPost();
    setTopPost(topPostResponse.data.post);
  };

  useEffect(() => {
    findAllPosts();
    findTopPost();
  }, []);

  return (
    <UsersPostsAreaCommunity>
      <nav>
        <NavBar />
      </nav>
      <IntroSpaceCommunity>
        <SearchArea>
          <h1>Comunidade Murasaki</h1>
          <p>
            Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para
            compartilhar seus conhecimentos e ideias, assim como explorar as
            contribuições de outras pessoas e interagir com elas. Junte-se a nós
            e enriqueça nossa comunidade com seus insights e perspectivas
            únicas.
          </p>
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
        </SearchArea>
        <CardContainerCommunity>
          <CardBodyCommunity>
            <Card
              top={true}
              title={topPost.title}
              text={topPost.text}
              banner={topPost.banner}
              likes={topPost.likes}
              comments={topPost.comments}
            />
          </CardBodyCommunity>
          <img src={topPost.banner} alt="banner" />
        </CardContainerCommunity>
      </IntroSpaceCommunity>
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
    </UsersPostsAreaCommunity>
  );
};

export default UsersPostsArea;
