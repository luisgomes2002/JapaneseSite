import styled from "styled-components";

export const PostIntroduction = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  img {
    margin: 2% 0;
    width: 90%;
    object-fit: cover;
    max-height: 700px;
  }
`;

export const UserAndPostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 15%;
  height: 40%;
  width: 100%;
  float: left;
  position: absolute;

  h1 {
    color: white;
  }
`;

export const OtherPosts = styled.div``;

export const OnlyPostArea = styled.div``;

export const PostCreatorInfo = styled.section``;

export const PostText = styled.div``;

export const Comments = styled.div`
  margin: 2% 5%;

  h1 {
    color: #fff;
  }
`;

export const CommentsArea = styled.div`
  display: flex;
  margin: 3% 0;
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

export const ReplayComment = styled.div`
  display: flex;
  margin: 3%;
  color: #fff;
  border-radius: 5px;

  a {
    padding-right: 1%;
    height: 0;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 15px;
  }
`;

export const CommentBox = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 5px;
    width: 100px;
    height: 36px;
    border-radius: 25px;
    border: none;
    background-color: #00000058;
    color: white;
    float: right;
    font-size: 16px;
    cursor: pointer;
  }

  h2 {
    width: 5%;
  }

  textArea {
    width: 1400px;
    height: 40px;
    resize: none;
    overflow: auto;
    background-color: #121214;
    border: none;
    font-size: 16px;
    color: white;
    outline: none;
    margin-left: 15px;
  }

  textarea:focus {
    border: none;
    border-bottom: 2px solid white;
  }
`;

export const ReplayBox = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 5px;
    width: 100px;
    height: 36px;
    border-radius: 25px;
    border: none;
    background-color: #00000058;
    color: white;
    float: right;
    font-size: 16px;
    cursor: pointer;
  }

  h2 {
    width: 5%;
  }

  textArea {
    width: 1360px;
    height: 40px;
    resize: none;
    overflow: auto;
    background-color: #121214;
    border: none;
    font-size: 16px;
    color: white;
    outline: none;
    margin-left: 15px;
  }

  textarea:focus {
    border: none;
    border-bottom: 2px solid white;
  }
`;

export const TextEdit = styled.div`
  display: grid;
  grid-template-columns: 1fr 3%;

  button {
    width: 100px;
    height: 30px;
    cursor: pointer;
  }
`;

export const FollowAndLike = styled.div`
  text-align: center;

  button {
    margin: 20px;
    width: 150px;
    height: 100px;
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
