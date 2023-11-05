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
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/profile/${props.username}`);
  };

  if (props.top) {
    return (
      <CardBodyTop>
        <h2>{props.title}</h2>
        <TextLimit text={props.text} limit={280} />
        <h1>@{props.username}</h1>
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
      </CardBodyTop>
    );
  } else if (props.home) {
    return (
      <CardHomeBody>
        <div>
          <div>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
            <h3>@{props.username}</h3>
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
        <CardBody>
          <img src={props.banner} alt="banner" />
        </CardBody>
        <div>
          <h2>{props.title}</h2>
          <TextLimit text={props.text} limit={140} />
          <button onClick={goHome}>
            <h3>@{props.username}</h3>
          </button>
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
      </CardContainer>
    );
  }
};

export { Card };
