import styled from "styled-components";

export const ModalArea = styled.div`
  width: 550px;
  height: 300px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  overflow-y: auto;

  h1 {
    color: black;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 70px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
    margin: 0;
  }

  i {
    position: fixed;
    top: 0;
    right: 0;
    color: black;
    padding: 1%;
  }
`;

export const ShowUsers = styled.div`
  margin: 2% 5%;
  border-radius: 25px;
  box-shadow: var(--black-shadow);

  h1 {
    font-size: 20px;
    color: black;
  }

  h3 {
    color: #444444;
    font-size: 15px;
  }
`;

export const NameUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`;

export const InfoModalUser = styled.div`
  display: flex;
  padding: 2% 5%;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  h2 {
    color: #444444;
    font-size: 15px;
    margin-left: 35%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;
