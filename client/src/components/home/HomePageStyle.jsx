import styled from "styled-components";

export const HomePage = styled.div`
  background: linear-gradient(to right, #161616, #000000);
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
  }
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
    /* width: 40%; */
    padding-top: 25%;
    text-shadow: 1px 1px 20px rgba(34, 34, 34, 0.5);
  }

  p {
    width: 30%;
    font-size: 23px;
    color: var(--main-color);
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    margin: 100% 0 0 5%;

    h1 {
      font-size: 60px;
    }

    p {
      width: 100%;
      font-size: 17px;
    }
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
    background-size: 200% 100%;
    border: none;
    cursor: pointer;
    font-size: 20px;
    width: 300px;
    height: 50px;
    padding: 0 30px;
    border-radius: 2px;
    margin: 30px 0;

    h2 {
      font-size: 20px;
    }

    i {
      font-size: 20px;
      color: black;
    }
  }

  @media (max-width: 600px) {
    button {
      width: 230px;
      height: 40px;

      h2 {
        font-size: 15px;
      }
    }
  }
`;
