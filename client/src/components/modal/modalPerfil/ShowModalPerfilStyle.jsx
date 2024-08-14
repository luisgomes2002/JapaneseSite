import styled from "styled-components";

export const ModalTotalArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #202024;
  max-width: 366px;
  max-height: 336px;
  border-radius: 10px;
  box-shadow: var(--black-shadow);
`;

export const AdjustArea = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90%;
`;

export const BaseInfo = styled.div`
  margin: 0 10px;
  justify-content: flex-start;

  a {
    display: flex;
    text-decoration: none;
  }

  img {
    width: 60px;
    height: 60px;
    margin: 0 20px;
    border-radius: 5px;
  }

  h2 {
    padding: 0;
    font-size: 15px;
    color: #585858;
  }

  h3 {
    padding: 0;
    font-size: 20px;
    color: #dfdcd8;
  }
`;

export const FollowPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  h3 {
    color: #dfdcd8;
  }

  p {
    color: #dfdcd8;
  }
`;

export const PostsImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: ${(props) =>
    props.children.length === 3 ? "space-between" : "flex-start"};

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 0;
    margin-right: ${(props) => (props.children.length >= 2 ? "3px" : "0")};
  }
`;

export const FollowButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 80%;
    height: 30px;
    border-radius: 10px;
    background-color: var(--second-main-color);
    color: #fff;
    border: none;
  }
`;
