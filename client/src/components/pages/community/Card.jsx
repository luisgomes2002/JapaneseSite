import React from "react";
import { CardContainer, CardBody, CardIcons } from "./CardStyle";
import { TextLimit } from "../../textLimit/TextLimit";

const Card = (props) => {
  return (
    <CardContainer>
      <CardBody>
        <img src={props.banner} alt="banner" />
      </CardBody>
      <div>
        <h2>{props.title}</h2>
        <TextLimit text={props.text} limit={150} />
      </div>
      <CardIcons>
        <div>
          <i className="fa-regular fa-heart"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="fa-regular fa-message"></i>
          <span>{props.comments}</span>
        </div>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
