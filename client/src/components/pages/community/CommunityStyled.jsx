import styled from "styled-components";

export const UsersPostsAreaCommunity = styled.div`
  background-color: var(--background-color);
`;

export const IntroSpaceCommunity = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin: 5% 8% 5% 8%;
`;

export const SearchArea = styled.div`
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--second-main-color);
    font-size: 35px;
  }

  p {
    color: var(--main-color);
    font-size: 20px;
    margin: 10% 0;
  }

  input {
    border: solid 1px rgba(0, 0, 0, 0.349);
    border-radius: 25px;
    padding: 2% 5%;
    color: #fff;
    background-color: var(--card-color);
  }

  i {
    margin-right: 2%;
    color: var(--main-color);
  }

  span {
    padding: 10%;
    color: #ff0000;
    font-size: 13px;
  }
`;

export const CardContainerBodyInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 35%;
`;

export const CardContainerBody = styled.section`
  margin: 0 0 5% 15%;
  width: 90%;
  padding-bottom: 5%;
  overflow-y: auto;
  height: 1000px;

  a {
    text-decoration: none;
  }
`;

export const PostsInfoTop = styled.div`
  margin: 0 90px;
  height: 500px;
  width: 65%;
  background-color: #202024;
  border-radius: 5%;
`;

export const CardContainerCommunity = styled.section`
  display: grid;
  grid-template-columns: 1fr 65%;
  width: 100%;
  border-radius: 25px;
  background-color: var(--card-color);
`;

export const CardIconsCommunity = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 35%;
`;
