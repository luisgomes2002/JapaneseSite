import styled from "styled-components";

export const OnlyPostArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  color: #fff;
  margin: 6% 5%;

  img {
    border-radius: 25px;
  }

  p {
    margin-top: 2%;
    color: #b9b6b6;
  }
`;

export const PostCreatorInfo = styled.section`
  display: flex;
  align-items: center;
  width: 500px;
  height: 100px;
  color: #585858;

  img {
    margin-right: 4%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  a {
    color: #585858;
    text-decoration: none;
  }
`;

export const Comments = styled.div`
  margin: 2% 5%;

  h1 {
    color: #fff;
  }
`;

export const CommentsArea = styled.div`
  display: flex;
  margin: 3% 0;
  /* background-color: #202024; */
  color: #fff;
  border-radius: 5px;
  width: 100%;

  a {
    padding-right: 1%;
    height: 0;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 15px;
  }
`;

export const CommentBox = styled.section`
  h2 {
    width: 5%;
  }

  textArea {
    width: 1400px;
    height: 30px;
    resize: none;
    overflow: auto;
  }
`;

export const TextEdit = styled.div`
  display: grid;

  grid-template-columns: 1fr 3%;
`;

export const FollowAndLike = styled.div`
  text-align: center;

  button {
    margin: 20px;
    width: 150px;
    height: 60px;
    background-color: #2c2a2a;
    border: none;
    border-radius: 15px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  i {
    font-size: 32px;
  }
`;

export const LinksRef = styled.div`
  margin: 5% 18%;
  display: flex;
  text-align: left;
  flex-direction: column;

  p {
    margin-bottom: 10px;
  }
`;
