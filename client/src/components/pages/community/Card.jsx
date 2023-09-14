import React from "react";
import { CardContainer, CardBody, CardIcons } from "./CardStyle";

const Card = ({ UsersPosts }) => {
  return (
    <CardContainer>
      <CardBody>
        <img src={UsersPosts.userAvatar} alt="Imagem" />
      </CardBody>
      <div>
        <h2>{UsersPosts.title}</h2>
        <p>{UsersPosts.text}</p>
      </div>
      <CardIcons>
        <div>
          <i className="fa-regular fa-heart"></i>
          <span>2{UsersPosts.likes}</span>
        </div>
        <div>
          <i className="fa-regular fa-message"></i>
          <span>3{UsersPosts.comments}</span>
        </div>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
