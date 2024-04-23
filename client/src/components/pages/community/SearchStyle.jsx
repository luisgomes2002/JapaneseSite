import styled from "styled-components";

export const SearchBack = styled.div`
  background-color: #121214;
`;

export const TextResults = styled.div`
  display: flex;
  margin: 3%;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #202024;
    height: 100px;
    width: 80%;
    border-radius: 25px;
    color: #6f00ff;
    font-size: 40px;
  }
`;

export const SearchInputArea = styled.div`
  text-align: center;

  span {
    padding: 10%;
    color: #ff0000;
    font-size: 13px;
  }
`;

export const TextInput = styled.div`
  input {
    border: solid 1px rgba(0, 0, 0, 0.349);
    border-radius: 25px;
    padding: 1% 2%;
    width: 500px;
    height: 40px;
    color: #fff;
    background-color: var(--card-color);
  }

  i {
    margin-right: 0.5%;
    color: var(--main-color);
  }
`;
