import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  margin: 5% 0;
  padding-left: 10%;
`;

export const Section = styled.section`
  h2 {
    font-size: 40px;
    padding: 1% 0;
  }

  a {
    font-size: 16px;
    color: #464646;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
  }

  input {
    border: 1px solid black;
    width: 400px;
    height: 50px;
    margin: 5px 0;
    padding: 15px;
    font-size: 18px;
  }

  button {
    background-color: black;
    border: none;
    color: #fff;
    height: 60px;
    width: 170px;
    font-size: 23px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
