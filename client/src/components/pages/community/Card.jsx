import React from "react";
import { CardContainer, CardBody, CardIcons,CardIconsCommunity } from "./CardStyle";
import { TextLimit } from "../../textLimit/TextLimit";

const Card = (props) => {
  if (props.top) {
    return (
      <div>
        <h2>{props.title}</h2>
        <TextLimit text={props.text} limit={280} />
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
      </div>
    );
  } else {
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
}

export {Card};
