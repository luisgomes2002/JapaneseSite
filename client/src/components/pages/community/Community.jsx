import {
  IntroSpaceCommunity,
  SearchArea,
  CardContainerBody,
  CardContainerCommunity,
  CardBodyCommunity,
  UsersPostsAreaCommunity,
  CardContainerBodyInfo,
  PostsInfoTop,
} from "./CommunityStyled";
import { Card } from "../../cards/Card";
import { getAllPosts, getTopPost } from "../../../services/postsServices";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";

const UsersPostsArea = () => {
  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const onSearch = (data) => {
    const { title } = data;
    navigate(`/search/${title}`);
    searchSchema();
  };

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
            <Link to={`/post/${topPost.id}`} key={topPost.id}>
              <Card
                top={true}
                title={topPost.title}
                text={topPost.text}
                likes={topPost.likes}
                comments={topPost.comments}
                username={topPost.username}
              />
            </Link>
          </CardBodyCommunity>
          <img src={topPost.banner} alt="banner" />
        </CardContainerCommunity>
      </IntroSpaceCommunity>
      <CardContainerBodyInfo>
        <CardContainerBody>
          {posts.map((item) => {
            return (
              <Card
                key={item.id}
                postId={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
                username={item.username}
              />
            );
          })}
        </CardContainerBody>
        <PostsInfoTop>
          <h1>Criar top Post topicos</h1>
        </PostsInfoTop>
      </CardContainerBodyInfo>
    </UsersPostsAreaCommunity>
  );
};

export default UsersPostsArea;
