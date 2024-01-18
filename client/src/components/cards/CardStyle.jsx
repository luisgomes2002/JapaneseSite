import styled from "styled-components";

export const CardBodyTop = styled.div`
  h1 {
    padding: 15px 30px;
    color: #6c6c72;
    font-size: 15px;
  }
`;

export const CardContainer = styled.section`
  margin: 2% 0;
  padding: 1%;
  border-radius: 25px;
  background-color: var(--card-color);
  width: 100%;
  height: 280px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h2 {
    font-size: 35px;
    padding: 2% 8%;
    color: var(--second-main-color);
  }

  h3 {
    padding-top: 10px;
    color: #6c6c72;
    font-size: 15px;
    width: 400px;
  }

  p {
    font-size: 18px;
    padding: 0 8%;
    color: var(--main-color);
  }

  i {
    color: var(--main-color);
  }

  span {
    padding: 0 10%;
    color: var(--main-color);
  }

  a {
    display: grid;
    grid-template-columns: 25% 1fr 3%;
  }
`;

export const PostsByUser = styled.div`
  margin-top: 40px;
  border-radius: 5px;
  background-color: #202024;
  box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.096);
  height: 250px;
`;

export const CardBody = styled.article`
  img {
    width: 400px;
    height: 300px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 25px 25px 25px 25px;
  }
`;

export const CardIcons = styled.article`
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: 2% 8%;
`;

export const CardIconsCommunity = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 35%;
`;

export const CardHomeBody = styled.section`
  display: grid;
  grid-template-columns: 1fr 44%;
  background-color: #202024;
  border-radius: 25px;
  height: 250px;
  width: 900px;

  img {
    border-radius: 0px 25px 25px 0px;
    width: 400px;
    height: 250px;
  }

  h2 {
    color: #6f00ff;
    text-align: center;
    padding-top: 5%;
    font-size: 20px;
  }

  h3 {
    font-size: 17px;
    margin: 0 20px;
    color: #585858;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 17px;
  }
`;

export const IconsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin: 0 35%;

  i {
    color: #fff;
    padding-right: 5px;
  }

  span {
    color: #fff;
  }
`;

export const UserPagePostArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 46%;
  color: #fff;

  img {
    border-radius: 0px 5px 5px 0px;
    height: 250px;
  }
`;

export const InfoPostsBody = styled.div`
  margin: 5%;

  h2 {
    color: var(--second-main-color);
  }

  h3 {
    padding-top: 30px;
    color: #b6b6c4;
    font-size: 15px;
  }

  p {
    padding-top: 10px;
  }
`;

export const LikeButton = styled.div`
  z-index: 900;

  i {
    font-size: 23px;
    border-radius: 50%;
    border: 1px solid #fff;
    padding: 10px;
  }
`;
