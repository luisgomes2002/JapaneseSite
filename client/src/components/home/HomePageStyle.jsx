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
  align-items: left;
`;

export const HomeInfoText = styled.div`
  margin: 0 0 70px 80px;

  h1 {
    color: aliceblue;
    font-size: 150px;
    width: 40%;
    padding-top: 25%;
    text-shadow: 1px 1px 20px rgba(34, 34, 34, 0.5);
  }

  p {
    width: 30%;
    font-size: 23px;
    color: var(--main-color);
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const HomeBtn = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    color: black;
    background: linear-gradient(
      to right,
      white 0%,
      white 50%,
      #0a0a0a 50%,
      #0a0a0a 100%
    );
    background-size: 200% 100%;
    transition: background-position 1s;
    border: none;
    cursor: pointer;
    font-size: 20px;
    width: 300px;
    height: 50px;
    padding: 0 30px;
    border-radius: 2px;
    margin: 30px 0;

    i {
      font-size: 20px;
      color: black;
    }
  }

  button:hover {
    background-position: -100% 0;
    color: #fff;
    i {
      color: #fff;
    }
  }

  /* font-size: 1.8rem;
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
  &:hover a {
    color: #000000;
  } */
`;
