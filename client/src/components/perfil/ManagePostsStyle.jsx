import styled from "styled-components";

export const AddPostsContainer = styled.div`
  padding: 5%;

  h2 {
    margin-left: 2%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding-left: 1%;
    width: 500px;
    height: 40px;
    margin: 1%;
  }
  textarea {
    padding-left: 1%;
    width: 500px;
    height: 200px;
    margin: 1%;
  }
  button {
    color: black;
    cursor: pointer;
    width: 100px;
    height: 40px;
  }

  span {
    color: #ff0000;
    font-size: 13px;
  }
`;

export const ShowPost = styled.div`
  margin: 7% 5% 0 5%;
  background-color: #202024;
  width: 90%;
  height: 300px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 50% 20%;

  img {
    margin: 5%;
    border-radius: 25px 25px 25px 25px;
    width: 400px;
    height: 250px;
  }

  h1 {
    color: #6f00ff;
    font-size: 40px;
    padding: 2% 0;
  }

  p {
    color: white;
    padding-bottom: 2%;
  }

  h3 {
    color: #7645b1;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin: 42px 0;
    font-size: 15px;
    color: white;
  }
`;
