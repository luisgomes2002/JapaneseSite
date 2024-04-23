import styled from "styled-components";

export const Benefits = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--third-color);
  padding: 2%;
  justify-items: center;
  align-items: center;

  img {
    border-radius: 15%;
    object-fit: cover;
    height: 600px;
    width: 600px;
    object-position: top;
  }
`;

export const BenefitsInfo = styled.div`
  h3 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }
`;

export const BenefitsInfoCard = styled.div`
  margin: 10% 0;
`;
