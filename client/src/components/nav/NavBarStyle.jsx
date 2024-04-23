import styled from "styled-components";

export const Nav = styled.nav`
  background-color: transparent;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 10px 15% 10% 10%;
`;

export const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 5%;

  a {
    text-decoration: none;
    font-size: var(--size-h3);
    margin-right: 10%;
  }

  a:hover {
    color: #dfdcd8;
  }

  h1 {
    color: var(--main-color);
    font-size: 30px;
    margin: 0;
  }

  h1:hover {
    color: #dfdcd8;
  }

  button {
    text-decoration: none;
    font-size: var(--size-h3);
    margin-right: 10%;
    background-color: transparent;
    border: none;
    color: #fff;
  }

  button:hover {
    color: #dfdcd8;
    cursor: pointer;
  }
`;

export const NavBarCategories = styled.div`
  display: flex;

  a {
    color: var(--main-color);
    padding: 5% 3%;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const GoAuth = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 1px solid white;
    border-radius: 5px;
    width: 120px;
    height: 45px;
    transition: all 0.2s ease-in;
  }

  button:hover {
    transition: all 0.2s ease-in;
    color: black;
    background-color: #fff;
  }
`;

export const Notifications = styled.div`
  position: absolute;
  background-color: #202024;
  width: 280px;
  max-height: 500px;
  border-radius: 15px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 370px;
  margin-top: 70px;

  button {
    padding: 1%;
    margin: 0 8%;
  }

  a {
    padding: 0 6%;
    margin: 3% 0;
  }
`;

export const ForEachNotification = styled.div`
  display: flex;
  padding: 10px 0;
  width: 250px;

  h2 {
    color: #6f00ff;
    font-size: 17px;
  }

  a:hover {
    background-color: #c3c3d41a;
    border-radius: 15px;
  }

  p {
    color: white;
    font-size: 15px;
  }
`;
