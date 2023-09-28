import styled from "styled-components";

export const About = styled.div`
  h1 {
    text-align: center;
    font-size: 3rem;
    padding-top: 50px;
    color: black;
  }
`;

export const AboutBox = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px;

  img {
    border-radius: 50%;
    object-fit: cover;
    height: 250px;
    width: 250px;
    object-position: top;
  }

  p {
    font-size: 20px;
    padding: 5px;
    width: 80%;
  }
`;
