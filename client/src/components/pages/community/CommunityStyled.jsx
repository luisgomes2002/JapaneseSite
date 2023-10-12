import styled from "styled-components";

export const UsersPostsAreaCommunity = styled.div`
  background-color: var(--background-color);
`;

export const IntroSpaceCommunity = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin: 0 10% 5% 10%;
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

export const CardContainerBody = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin: 0 auto;
  width: 80%;
  padding-bottom: 5%;
`;

export const CardContainerCommunity = styled.section`
  display: grid;
  grid-template-columns: 1fr 65%;
  width: 100%;
  border-radius: 25px;
  background-color: var(--card-color);

  img {
    width: 100%;
    height: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: 0px 25px 25px 0px;
  }
`;

export const CardBodyCommunity = styled.article`
  display: flex;
  align-items: center;
  text-align: left;

  h2 {
    padding: 3% 8%;
    color: var(--second-main-color);
    font-size: 35px;
  }

  h3 {
    margin: 0 10%;
    font-size: 20px;
    color: var(--second-main-color);
  }

  p {
    padding: 0 8%;
    color: var(--main-color);
    margin: 5% 0;
  }

  i {
    color: var(--main-color);
  }

  span {
    padding: 0 10%;
    color: var(--main-color);
  }
`;

export const CardIconsCommunity = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 35%;
`;
