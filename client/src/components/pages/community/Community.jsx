import React, { useState, useEffect } from "react";
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

const UsersPostsArea = () => {
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
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Pequise aqui" />
          </div>
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
              top={false}
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
