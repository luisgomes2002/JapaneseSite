import styled from "styled-components";

export const AddPostsContainer = styled.div`
  padding: 5%;
  text-align: center;

  h2 {
    color: white;
    margin-left: 2%;
    font-size: 40px;
    padding-bottom: 2%;
    color: #6f00ff;
  }

  input {
    padding-left: 1%;
    width: 500px;
    height: 40px;
    margin: 1%;
    background-color: #202024;
    color: white;
    border: none;
    border-radius: 5px;
  }

  textarea {
    padding: 1%;
    width: 100%;
    height: 300px;
    margin: 1%;
    background-color: #202024;
    color: white;
    border: none;
    border-radius: 5px;
    resize: none;
  }

  button {
    color: white;
    cursor: pointer;
    width: 200px;
    height: 60px;
    background-color: #6f00ff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }

  span {
    color: #ff0000;
    font-size: 18px;
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
    margin: 17% 0;
    font-size: 15px;
    color: white;
  }
`;

export const SpanErrors = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
`;
