import {
  CardContainer,
  CardBody,
  CardIconsAndUsername,
  CardIconsCommunity,
  CardHomeBody,
  IconsArea,
  UserPagePostArea,
  InfoPostsBody,
  CardBodyTop,
  PostsByUser,
  CardIconsArea,
} from "./CardStyle";
import { TextLimit } from "../textLimit/TextLimit";
import { useState, useEffect, useRef, useContext } from "react";
import ModalPerfil from "../modal/modalPerfil/ShowModalPerfil";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
        <TextLimit text={title} limit={30} type={"title"} />
        <TextLimit text={text} limit={280} type={"text"} />
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
              <TextLimit text={title} limit={30} type={"title"} />
              <TextLimit text={text} limit={210} type={"text"} />
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
            <section>
              <TextLimit text={title} limit={30} type={"title"} />
              {username == user.username ? (
                <>
                  <button
                    onClick={() => navigate(`/managePosts/edit/${postId}`)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => navigate(`/managePosts/delete/${postId}`)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </>
              ) : (
                ""
              )}
            </section>
            <TextLimit text={text} limit={210} type={"text"} />
            <h3>@{username}</h3>
            <CardIconsArea>
              <CardIconsAndUsername>
                <i className="fa-regular fa-heart"></i>
                <span>{likes?.length}</span>
              </CardIconsAndUsername>
              <CardIconsAndUsername>
                <i className="fa-regular fa-message"></i>
                <span>{comments?.length}</span>
              </CardIconsAndUsername>
            </CardIconsArea>
          </InfoPostsBody>
          <img src={banner} alt="banner" />
        </UserPagePostArea>
      </PostsByUser>
    );
  } else {
    return (
      <CardContainer>
        <button onClick={() => navigate(`/post/${postId}`)}>
          <CardBody>
            <img src={banner} alt="banner" />
          </CardBody>
          <div>
            <TextLimit text={title} limit={30} type={"title"} />
            <TextLimit text={text} limit={210} type={"text"} />
            <div>
              <CardIconsAndUsername>
                <i className="fa-regular fa-heart"></i>
                <span>{likes?.length}</span>

                <i className="fa-regular fa-message"></i>
                <span>{comments?.length}</span>
              </CardIconsAndUsername>
              <h3
                ref={usernameRef}
                onMouseEnter={openModal}
                onMouseLeave={closeModal}
              >
                @{username}
              </h3>
            </div>
          </div>
        </button>
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
