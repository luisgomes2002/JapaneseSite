import React from "react";
import {
  IntroSpaceCommunity,
  SearchArea,
  CardContainerBody,
  CardContainerCommunity,
  CardBodyCommunity,
  CardIconsCommunity,
} from "./CommunityStyled";
import NavBar from "../../nav/NavBar";
import Card from "./Card";

const UsersPosts = [
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar:
      "https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar:
      "https://s2-techtudo.glbimg.com/394RBfUvMKCOa2BI9qaeFzafTdA=/0x0:1024x609/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar:
      "https://img.freepik.com/fotos-gratis/papeis-de-parede-e-imagens-do-por-do-sol-na-praia_1340-43042.jpg?w=740&t=st=1694659704~exp=1694660304~hmac=ef486711f0c991254d5211ff0c01b2ce461ecbac8667d5aba9655df3d35716fe",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "Digitar um titulo legal aqui",
    text: "Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para compartilhar seus conhecimentos e ideias, assim como explorar as contribuições de outras pessoas e interagir com elas. Junte-se a nós e enriqueça nossa comunidade com seus insights e perspectivas únicas.",
    banner: "img2.jpg",
    likes: [],
    comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
];

const UsersPostsArea = () => {
  return (
    <div>
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
              <h2>{UsersPosts[0].title}</h2>
              <p>{UsersPosts[0].text}</p>
              <CardIconsCommunity>
                <div>
                  <i className="fa-regular fa-heart"></i>
                  <span>2{UsersPosts.likes}</span>
                </div>
                <div>
                  <i className="fa-regular fa-message"></i>
                  <span>3{UsersPosts.comments}</span>
                </div>
              </CardIconsCommunity>
            </div>
          </CardBodyCommunity>
          <img src={UsersPosts[0].userAvatar} alt="Imagem" />
        </CardContainerCommunity>
      </IntroSpaceCommunity>
      <CardContainerBody>
        {UsersPosts.map((post, index) => {
          return <Card key={index} UsersPosts={post} />;
        })}
      </CardContainerBody>
    </div>
  );
};

export default UsersPostsArea;
