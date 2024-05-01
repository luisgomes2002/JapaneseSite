import styled from "styled-components";

export const UpdateAreaMargin = styled.div`
  margin: 5% 0;
  background-color: #121214;

  h1 {
    color: white;
  }

  p {
    color: white;
  }
`;

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

export const UserCard = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  background-color: #202024;
  width: 350px;
  height: 500px;
  border-radius: 25px;
  margin: 0 20%;

  img {
    width: 350px;
    height: 160px;
    border-radius: 25px 25px 0 0;
    object-fit: cover;
    object-position: center;
  }

  section {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      margin: 20px;
    }

    h1 {
      color: white;
      margin-left: 25px;
    }

    h2 {
      font-size: 15px;
      color: white;
      margin: 0 25px;
    }

    p {
      background-color: #2d2d30;
      color: white;
      margin: 10px;
      border-radius: 25px;
      padding: 10px;
      font-size: 17px;
      max-width: 330px;
      height: 205px;
    }
    article {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const InfoUpdate = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;

  input {
    padding-left: 1%;
    width: 500px;
    height: 40px;
    margin: 1% 1% 1% 0;
    background-color: #202024;
    color: white;
    border: none;
    border-radius: 5px;
  }

  textarea {
    padding: 1%;
    width: 100%;
    height: 300px;
    margin: 1% 0;
    background-color: #202024;
    color: white;
    border: none;
    border-radius: 5px;
    resize: none;
  }

  span {
    color: #ff0000;
    font-size: 18px;
  }
`;

export const ChooseColor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  input {
    width: 70px;
    height: 30px;
    padding: 0;
    border-radius: 5px;
  }
`;

export const ChooseColorArea = styled.div`
  margin: 1% 0;
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
