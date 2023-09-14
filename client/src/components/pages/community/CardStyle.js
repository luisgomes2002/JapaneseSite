import styled from 'styled-components';

export const CardContainer= styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: var(--black-shadow);
  border-radius: 25px;
  text-align: center;

  h2{
    padding: 3% 5%;
    color: var(--second-main-color);
  }
  
  p{
    padding: 0 8%;
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