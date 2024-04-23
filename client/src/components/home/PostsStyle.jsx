import styled from "styled-components";

export const PostsHome = styled.section`
  margin-top: 60px;
  padding: 80px 10px;
  background-color: #161616;

  h1 {
    color: #fff;
    padding-bottom: 20px;
    font-size: 50px;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 23px;
    color: rgb(255, 255, 255);
    padding: 20px;
  }
`;

export const CarouselItem = styled.div`
  min-width: 900px;
  height: 300px;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const ButtonArea = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  background: transparent;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  font-size: 24px;
  background-color: #161616;
  color: #fff;
  border: none;
`;
