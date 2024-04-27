import {
  CardContainer,
  CardBody,
  CardIcons,
  CardIconsCommunity,
  CardHomeBody,
  IconsArea,
  UserPagePostArea,
  InfoPostsBody,
  CardBodyTop,
  PostsByUser,
} from "./CardStyle";
import { TextLimit } from "../textLimit/TextLimit";
import { useState, useEffect, useRef, useContext } from "react";
import ModalPerfil from "../modal/modalPerfil/ShowModalPerfil";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Card = ({
  title,
  username,
  likes,
  comments,
  banner,
  text,
  top,
  home,
  perfil,
  postId,
}) => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usernamePosition, setUsernamePosition] = useState({ top: 0, left: 0 });
  const usernameRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateUsernamePosition = () => {
    if (usernameRef.current) {
      const rect = usernameRef.current.getBoundingClientRect();
      setUsernamePosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  useEffect(() => {
    updateUsernamePosition();
  }, []);

  if (top) {
    return (
      <CardBodyTop>
        <h2>{title}</h2>
        <TextLimit text={text} limit={280} />
        <h1
          ref={usernameRef}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          @{username}
        </h1>
        <CardIconsCommunity>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>{likes?.length}</span>
          </div>
          <div>
            <i className="fa-regular fa-message"></i>
            <span>{comments?.length}</span>
          </div>
        </CardIconsCommunity>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={username}
          ></ModalPerfil>
        )}
      </CardBodyTop>
    );
  } else if (home) {
    return (
      <>
        <CardHomeBody>
          <div>
            <div>
              <h2>{title}</h2>
              <TextLimit text={text} limit={210} />
              <h3
                ref={usernameRef}
                onMouseEnter={openModal}
                onMouseLeave={closeModal}
              >
                @{username}
              </h3>
            </div>
            <IconsArea>
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>{likes?.length}</span>
              </div>
              <div>
                <i className="fa-regular fa-message"></i>
                <span>{comments?.length}</span>
              </div>
            </IconsArea>
          </div>
          <img src={banner} alt="banner" />
        </CardHomeBody>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={username}
          ></ModalPerfil>
        )}
      </>
    );
  } else if (perfil) {
    return (
      <PostsByUser>
        <UserPagePostArea>
          <InfoPostsBody>
            <h2>{title}</h2>
            {username == user.username ? (
              <Link to={`/managePosts/edit/${postId}`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            ) : (
              ""
            )}

            <TextLimit text={text} limit={210} />
            <h3>@{username}</h3>
            <CardIcons>
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>{likes?.length}</span>
              </div>
              <div>
                <i className="fa-regular fa-message"></i>
                <span>{comments?.length}</span>
              </div>
            </CardIcons>
          </InfoPostsBody>
          <img src={banner} alt="banner" />
        </UserPagePostArea>
      </PostsByUser>
    );
  } else {
    return (
      <CardContainer>
        <Link to={`/post/${postId}`}>
          <CardBody>
            <img src={banner} alt="banner" />
          </CardBody>
          <div>
            <h2>{title}</h2>
            <TextLimit text={text} limit={200} />
            <CardIcons>
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>{likes?.length}</span>

                <i className="fa-regular fa-message"></i>
                <span>{comments?.length}</span>
              </div>
              <h3
                ref={usernameRef}
                onMouseEnter={openModal}
                onMouseLeave={closeModal}
              >
                @{username}
              </h3>
            </CardIcons>
          </div>
        </Link>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={username}
          ></ModalPerfil>
        )}
      </CardContainer>
    );
  }
};

export { Card };
