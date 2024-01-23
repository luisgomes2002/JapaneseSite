import styled from "styled-components";

export const Nav = styled.nav`
  background-color: transparent;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 10px 10%;
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
