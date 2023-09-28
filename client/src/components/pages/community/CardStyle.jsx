import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  text-align: center;
  background-color: var(--card-color);

  h2 {
    padding: 3% 5%;
    color: var(--second-main-color);
  }

  p {
    padding: 0 8%;
    color: var(--main-color);
  }

  i {
    color: var(--main-color);
  }

  span {
    padding: 0 10%;
    color: var(--main-color);
  }
`;

export const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 250px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 25px 25px 0px 0px;
  }
`;

export const CardIcons = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3% 35%;
`;

export const CardIconsCommunity = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 35%;
`;

export const CardHomeBody = styled.section`
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #202024;
  border-radius: 25px;
  height: 250px;

  img {
    border-radius: 0px 25px 25px 0px;
    width: 400px;
    height: 250px;
  }

  h2 {
    color: #6f00ff;
    text-align: center;
    padding-top: 5%;
  }

  p {
    font-size: 20px;
  }
`;

export const IconsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin: 0 35%;

  i {
    color: #fff;
    padding-right: 5px;
  }

  span {
    color: #fff;
  }
`;
