import styled from 'styled-components';

export const IntroSpaceCommunity = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin: 0 10% 5% 10%;
`;

export const SearchArea = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--second-main-color);
  }

  input{
    border: solid 1px rgba(0, 0, 0, 0.349);
    border-radius: 25px;
    padding-left: 5%;
  }

  i {
    margin-right: 2%;
    color: rgba(0, 0, 0, 0.459);
  }
`;

export const CardContainerBody = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin: 5% auto;
  width: 80%;
`;

export const CardContainerCommunity = styled.section`
  display: grid;
  grid-template-columns: 1fr 65%;
  width: 100%;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.267);;
  border-radius: 25px;

  img {
   width: 100%;
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

  h2{
    padding: 3% 8%;
    color: var(--second-main-color);
  }
  
  p{
    padding: 0 8%;
  }
`;

export const CardIconsCommunity = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 35%;
`;