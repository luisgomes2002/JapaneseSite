import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--card-color);
  padding: 120px;
`;

export const SocialIcons = styled.div`
  text-align: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 25px;
    padding: 3px;
  }

  a:hover {
    color: #fff;
  }

  i {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
  }

  i:hover {
    transform: translateY(-10px);
  }
`;

export const SocialMediaWrap = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 40%;
  padding-top: 40px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  }

  p {
    color: #fff;
    padding-top: 14px;
  }
`;

export const Credits = styled.div`
  text-align: center;
  padding-top: 20px;

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #6f00ff;
  }
`;
