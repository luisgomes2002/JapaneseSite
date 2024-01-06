import styled from "styled-components";

export const DeleteModalArea = styled.div`
  width: 550px;
  height: 300px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;

  h1,
  h2 {
    color: black;
    margin: 10px;
  }
`;

export const UserInfo = styled.div`
  border-radius: 5px;
  padding: 20px;
  margin: 30px;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.267);
  display: flex;

  img {
    border-radius: 25px;
    width: 50px;
    height: 50px;
  }
`;

export const NameAndUsername = styled.div`
  h1,
  h2 {
    color: black;
    margin: 5px 15px;
    font-size: 25px;
  }

  h2 {
    font-size: 15px;
  }
`;
