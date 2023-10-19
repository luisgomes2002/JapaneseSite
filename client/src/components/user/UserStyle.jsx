import styled from "styled-components";

export const TotalSpace = styled.div`
  p {
    margin: 0;
  }
`;

export const GifArea = styled.div`
  background-size: cover;
  background-color: black;
  background-position: center center;
  background-attachment: fixed;
`;

export const UserInfomationsArea = styled.div`
  margin: 0 20%;
  background-color: #232325f0;
  height: 100%;
`;

export const UserInformation = styled.div`
  padding: 10%;
  display: grid;
  grid-template-columns: 30% 1fr;

  img {
    border: 1px solid #fff;
    height: 200px;
    width: 200px;
    margin-bottom: 20%;
  }

  h2 {
    color: #6c6c72;
    font-size: 20px;
  }

  h3 {
    color: #fff;
    font-size: 40px;
    padding: 3% 0;
  }

  p {
    color: #fff;
    font-size: 20px;
    padding-bottom: 5%;
  }
`;

export const UserAbout = styled.div`
  background-color: #202024;
  border-radius: 5px;
  padding: 5%;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);

  h1 {
    color: #fff;
    font-size: 40px;
    padding-bottom: 3%;
  }

  p {
    font-size: 17px;
    color: #b6b6c4;
  }
`;

export const Follows = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: 5%;
`;

export const UserInfoPostsFollows = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: 5% 5% 0 5%;
  border-radius: 5px;
  background-color: #202024;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);

  p {
    font-size: 17px;
    color: #b6b6c4;
    padding: 0;
    margin-left: 10%;
  }
  h3 {
    color: #fff;
    font-size: 30px;
    margin-right: 10%;
  }
`;

export const CadsAndAchievements = styled.div`
  padding: 0 5%;
  padding-bottom: 5%;

  h1 {
    color: #fff;
  }
`;

export const Card = styled.div`
  margin-right: 5%;
  background-color: #202024;
  border-radius: 5px;
  padding: 0 5%;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);
`;

export const Achievementsiv = styled.div`
  background-color: #202024;
  border-radius: 5px;
  padding: 5%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);
`;

export const Case = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  background-color: #202024;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  padding: 3% 10% 3% 5%;
  width: 200px;
  border: #5400d9;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);

  h3 {
    font-size: 55px;
    color: #fff;
    margin: 0;
    background-color: #202024;
    border-radius: 50%;
    border: #5400d9;
    box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.096);
  }

  p {
    padding-left: 5%;
    color: #fff;
  }
`;
