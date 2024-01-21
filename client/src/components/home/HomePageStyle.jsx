import styled from "styled-components";

export const HomePage = styled.div`
  background: linear-gradient(to right, #161616, #000000);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HomeInfoText = styled.div`
  margin-bottom: 70px;
  padding: 75px;

  h1 {
    color: aliceblue;
    font-size: 50px;
    padding-top: 76%;
    text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.5);
  }

  p {
    font-size: 30px;
    color: var(--main-color);
    text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.5);
  }
`;

export const HomeBtn = styled.div`
  font-size: 1.8rem;
  padding: 20px 60px;
  box-shadow: none;
  border-radius: 4px;
  margin-top: 2rem;
  position: relative;
  outline: none;
  background-color: transparent;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  transition: all 0.3s ease-out;

  &:hover {
    color: #000000;
    background-color: var(--main-color);
    transform: scale(1.075);
    transition: 0.3s ease-in;
    cursor: pointer;
  }

  a {
    position: relative;
    z-index: 2;
    color: var(--main-color);
    text-decoration: none;
  }

  &:hover a {
    color: #000000;
  }
`;
