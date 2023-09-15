import React, { useState, useEffect } from "react";
import {
  IntroSpaceCommunity,
  SearchArea,
  CardContainerBody,
  CardContainerCommunity,
  CardBodyCommunity,
  CardIconsCommunity,
  UsersPostsAreaCommunity,
} from "./CommunityStyled";
import NavBar from "../../nav/NavBar";
import Card from "./Card";
import { getAllPosts } from "../../../services/postsServices";
import { TextLimit } from "../../textLimit/TextLimit";

const UsersPostsArea = () => {
  const [posts, setPosts] = useState([]);

  const findAllPosts = async () => {
    const response = await getAllPosts();
    setPosts(response.data.results);
  };

  useEffect(() => {
    findAllPosts();
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
            <div>
              {posts.length > 0 ? (
                <>
                  <h2>{posts[0].title}</h2>
                  <TextLimit text={posts[0].text} limit={280} />
                  <CardIconsCommunity>
                    <div>
                      <i className="fa-regular fa-heart"></i>
                      <span>{posts[0].likes ? posts[0].likes.length : 0}</span>
                    </div>
                    <div>
                      <i className="fa-regular fa-message"></i>
                      <span>
                        {posts[0].comments ? posts[0].comments.length : 0}
                      </span>
                    </div>
                  </CardIconsCommunity>
                </>
              ) : (
                <h3>Nenhuma postagem disponível</h3>
              )}
            </div>
          </CardBodyCommunity>
          <img src={posts.length > 0 ? posts[0].banner : ""} alt="banner" />
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
              likes={item.likes ? item.likes.length : 0}
              comments={item.comments ? item.comments.length : 0}
            />
          );
        })}
      </CardContainerBody>
    </UsersPostsAreaCommunity>
  );
};

export default UsersPostsArea;
