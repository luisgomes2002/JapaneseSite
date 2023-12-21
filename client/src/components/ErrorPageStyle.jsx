import styled from "styled-components";

export const ErrorPage = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.267);
  margin: 100px 600px 100px 300px;
  padding: 20px;

  h1 {
    color: #020202;
    padding: 30px;
    font-size: 45px;
  }

  h2 {
    color: #000000;
    padding: 20px 30px;
    font-size: 30px;
  }

  h3 {
    padding: 15px 30px;
    font-size: 25px;
  }

  p {
    padding: 0 30px;
  }

  ul {
    padding: 10px 30px;
  }

  button {
    border: none;
    background-color: #ffffff;
    border-radius: 30px;
    font-size: 20px;
    width: 130px;
    height: 50px;
    margin: 100px 0 15px 20px;
    transition: background-color 0.5s ease-in-out;
    border: 2px solid black;
    cursor: pointer;
  }
`;
