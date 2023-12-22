import styled from "styled-components";

export const UserUpdateArea = styled.div`
  margin: 20px 200px;

  p {
    font-size: 25px;
    padding-top: 20px;
  }

  button {
    width: 150px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    background-color: black;
    color: #fff;
  }
`;

export const InfoUpdate = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid black;
    width: 600px;
    height: 50px;
    margin: 5px 0;
    padding: 15px;
    font-size: 18px;
  }
`;

export const ChooseColor = styled.div`
  input {
    width: 70px;
    height: 30px;
    padding: 0;
    border-radius: 5px;
  }
`;

export const ChooseColorArea = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  border: 2px solid #bababa;
`;
