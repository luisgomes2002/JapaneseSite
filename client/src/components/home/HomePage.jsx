import {
  HomePage,
  HomeContainer,
  HomeInfoText,
  HomeBtn,
} from "./HomePageStyle.jsx";
import "./Services.css";
import { About, AboutBox } from "./AboutStyle";
import { Benefits, BenefitsInfo, BenefitsInfoCard } from "./VantagensStyle.jsx";
import { Link } from "react-router-dom";
import homeImage from "../../assets/baka/background/backgroundHome2.jpg";

function Home() {
  return (
    <>
      <HomePage style={{ backgroundImage: `url(${homeImage})` }}>
        <HomeContainer>
          <HomeInfoText>
            <h1 className="home-heading">MURASAKI</h1>
            <p className="home-description">
              Conheça um site dedicado a pessoas que querem aprender japonês,
              explorar a cultura japonesa e compartilhar suas experiências de
              estudo!
            </p>
            <HomeBtn>
              <button>
                <h2>Comece uma jornada</h2>
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </HomeBtn>
            {/* Criar um pagina com todos os serviços */}
          </HomeInfoText>
        </HomeContainer>
      </HomePage>
      <div className="categorias" id="categorias">
        <div className="categorias-wrapper">
          <div className="categorias-card">
            <div className="categorias-btns">
              <Link to="/japanese">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>APRENDA JAPONÊS</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card1">
            <div className="categorias-btns">
              <Link to="/">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>MORE NO JAPÃO</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card2">
            <div className="categorias-btns">
              <Link to="/">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>VIAJE PARA O JAPÃO</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card3">
            <div className="categorias-btns">
              <Link to="/creators">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>VEJA MAIS</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card4">
            <div className="categorias-btns">
              <Link to="/community">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>COMUNIDADE</h3>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <About>
        <h1>SOBRE</h1>
        <AboutBox>
          <img src="" />
          <div>
            <p className="card-title">Sobre Murasaki</p>
            <p className="card-text">
              Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos
              aqueles que desejam embarcar na emocionante jornada de aprender
              japonês. Sou Luis, o criador deste projeto apaixonante, e estou
              entusiasmado em compartilhar com você tudo o que o MURASAKI tem a
              oferecer. Junte-se a nós no MURASAKI e comece sua jornada de
              aprendizado do japonês hoje mesmo. Vamos explorar juntos as
              maravilhas deste idioma único e desbloquear um mundo de
              oportunidades!
            </p>
            <p className="card-text">Fundador da MURASAKI</p>
          </div>
        </AboutBox>
      </About>
      <Benefits>
        <div>
          <img src="" />
        </div>
        <BenefitsInfo>
          <BenefitsInfoCard>
            <div>
              <h3>Murasaki</h3>
              <p>
                Site criado para ensinar japonês gratuitamente a qualquer
                pessoa.
              </p>
            </div>
          </BenefitsInfoCard>
          <BenefitsInfoCard>
            <div>
              <h3>Cursos online criados por </h3>
              <p>
                Nossos curso online foram desenvolvidos para auxiliá-lo a
                aprender japonês, não importando onde você esteja, em breve com
                vídeos.
              </p>
            </div>
          </BenefitsInfoCard>
          <BenefitsInfoCard>
            <div>
              <h3>Suporte é gratuito</h3>
              <p>
                Não cobramos pelo esclarecimento de dúvidas relacionadas ao
                japonês. Basta enviar-nos uma mensagem direta para obter ajuda.
              </p>
            </div>
          </BenefitsInfoCard>
        </BenefitsInfo>
      </Benefits>
    </>
  );
}

export default Home;
