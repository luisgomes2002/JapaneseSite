import styled from "styled-components";

export const ErroArea = styled.div`
  background-color: #ffffff;
`;

export const ErrorPage = styled.div`
  margin: 5% 600px 100px 9%;
  padding: 3%;
  background-color: #ffffff;

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
