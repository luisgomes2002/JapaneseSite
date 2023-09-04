import React from "react";
import "./Community.css";
import NavBar from "../../nav/NavBar";

const UsersPosts = [
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
    name: "password",
    userName: "password",
    userAvatar: "https://avatars.githubusercontent.com/u/85139913?v=4",
  },
  {
    id: "64dd8a28a89363d6acbd30ac",
    title: "22222222222222",
    text: "22222222222",
    banner: "img2.jpg",
    likes: [],
    Comments: [],
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
      <div className="intro-space-community">
        <div className="search-area">
          <h1>Comunidade Murasaki</h1>
          <p>
            Bem-vindo à Comunidade Murasaki! Este é o lugar ideal para
            compartilhar seus conhecimentos e ideias, assim como explorar as
            contribuições de outras pessoas e interagir com elas. Junte-se a nós
            e enriqueça nossa comunidade com seus insights e perspectivas
            únicas.
          </p>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Pequise aqui" />
        </div>
        <div className="amount-like--post">
          <h1>OK</h1>
        </div>
      </div>
      <div className="users-posts--area">
        {UsersPosts.map((post) => (
          <div className="post-area">
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPostsArea;
