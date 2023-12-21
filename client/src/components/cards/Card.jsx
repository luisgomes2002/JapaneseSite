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
import { useState, useEffect, useRef } from "react";
import ModalPerfil from "../modal/modalPerfil/ShowModalPerfil";
import { Link } from "react-router-dom";

const Card = (props) => {
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

  if (props.top) {
    return (
      <CardBodyTop>
        <h2>{props.title}</h2>
        <TextLimit text={props.text} limit={280} />
        <h1
          ref={usernameRef}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          @{props.username}
        </h1>
        <CardIconsCommunity>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>{props.likes?.length}</span>
          </div>
          <div>
            <i className="fa-regular fa-message"></i>
            <span>{props.comments?.length}</span>
          </div>
        </CardIconsCommunity>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={props.username}
          ></ModalPerfil>
        )}
      </CardBodyTop>
    );
  } else if (props.home) {
    return (
      <>
        <CardHomeBody>
          <div>
            <div>
              <h2>{props.title}</h2>
              <TextLimit text={props.text} limit={210} />
              <h3
                ref={usernameRef}
                onMouseEnter={openModal}
                onMouseLeave={closeModal}
              >
                @{props.username}
              </h3>
            </div>
            <IconsArea>
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>{props.likes?.length}</span>
              </div>
              <div>
                <i className="fa-regular fa-message"></i>
                <span>{props.comments?.length}</span>
              </div>
            </IconsArea>
          </div>
          <img src={props.banner} alt="banner" />
        </CardHomeBody>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={props.username}
          ></ModalPerfil>
        )}
      </>
    );
  } else if (props.perfil) {
    return (
      <PostsByUser>
        <UserPagePostArea>
          <InfoPostsBody>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={210} />
            <h3>@{props.username}</h3>
            <CardIcons>
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>{props.likes?.length}</span>
              </div>
              <div>
                <i className="fa-regular fa-message"></i>
                <span>{props.comments?.length}</span>
              </div>
            </CardIcons>
          </InfoPostsBody>
          <img src={props.banner} alt="banner" />
        </UserPagePostArea>
      </PostsByUser>
    );
  } else {
    return (
      <CardContainer>
        <Link to={`/post/${props.postId}`}>
          <CardBody>
            <img src={props.banner} alt="banner" />
          </CardBody>
          <div>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={140} />
            <h3
              ref={usernameRef}
              onMouseEnter={openModal}
              onMouseLeave={closeModal}
            >
              @{props.username}
            </h3>
          </div>
          <CardIcons>
            <div>
              <i className="fa-regular fa-heart"></i>
              <span>{props.likes?.length}</span>
            </div>
            <div>
              <i className="fa-regular fa-message"></i>
              <span>{props.comments?.length}</span>
            </div>
          </CardIcons>
        </Link>
        {isModalOpen && (
          <ModalPerfil
            top={usernamePosition.top}
            left={usernamePosition.left}
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            username={props.username}
          ></ModalPerfil>
        )}
      </CardContainer>
    );
  }
};

export { Card };
