import { Link } from "react-router-dom";
import {
  Credits,
  FooterContainer,
  SocialIcons,
  SocialMediaWrap,
} from "./FooterStyled";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <section>
          <SocialIcons>
            <Link
              to="https://www.instagram.com/_gomesluis/"
              target="react/jsx-no-target-blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/luis-gomes-8462b321a/"
              target="react/jsx-no-target-blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              to="https://github.com/luisgomes2002"
              target="react/jsx-no-target-blank"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://twitter.com/SAiForaMalucoXD"
              target="react/jsx-no-target-blank"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </SocialIcons>
          <SocialMediaWrap>
            <div>
              <Link to="/">Murasaki</Link>
            </div>
            <p>© 2023. Murasaki</p>
          </SocialMediaWrap>
          <Credits>
            <p>
              <Link to="/creditsPage">Créditos das imagens ・</Link>
              <Link to="/portfolio"> Murasaki Products</Link>
            </p>
          </Credits>
        </section>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
