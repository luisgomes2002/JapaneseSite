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
  display: flex;
  margin: 0 10px;
  text-align: left;

  a {
    display: flex;
  }

  img {
    width: 56px;
    height: 56px;
    margin: 0 20px;
  }

  h2 {
    padding: 0;
    font-size: 15px;
    color: #585858;
  }

  h3 {
    padding: 0;
    font-size: 20px;
    color: #fff;
  }
`;

export const FollowPosts = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: space-between;
  text-align: center;

  h3 {
    color: #fff;
  }
`;

export const PostsImg = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.children.length === 3 ? "space-between" : "flex-start"};

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: ${(props) => (props.children.length === 2 ? "3px" : "0")};
  }
`;

export const FollowButton = styled.div`
  button {
    width: 80%;
    height: 30px;
    border-radius: 10px;
    background-color: var(--second-main-color);
    color: #fff;
  }
`;
