import React from "react";
import NavBar from "../nav/NavBar";
import "./HomePage.scss";
import "./Services.css";
import "./About.css";
import "./Novidades.css";
import "./Vantagens.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-container">
        {/* Navbar Section */}
        <NavBar />

        {/* <home Section */}
        <div className="home-imag">
          <h1 className="home-heading">Gosta da Cultura Japonesa?</h1>
          <p className="home-description">Qual é o seu interesse?</p>
          <button className="home-btn">
            <Link to="/">Explore</Link>
          </button>
          {/* Criar um pagina com todos os serviços */}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
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
            <Link to="/">
              <span className="span-btns">MOSTRE MAIS</span>
              <span className="span-card">
                <h3>COMUNIDADE</h3>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="text">
      <h1>SOBRE</h1>
      <div className="about-box">
        <img />
        <div>
          <p className="card-title">Sobre Murasaki</p>
          <p className="card-text">
            Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos
            aqueles que desejam embarcar na emocionante jornada de aprender
            japonês. Sou Luis Gomes, o criador deste projeto apaixonante, e
            estou entusiasmado em compartilhar com você tudo o que o MURASAKI
            tem a oferecer. Junte-se a nós no MURASAKI e comece sua jornada de
            aprendizado do japonês hoje mesmo. Vamos explorar juntos as
            maravilhas deste idioma único e desbloquear um mundo de
            oportunidades!
          </p>
          <p className="card-text">Luis Gomes</p>
          <p className="card-text">Fundador da MURASAKI</p>
        </div>
      </div>
    </div>
  );
}

const Novidades = () => {
  return (
    <div className="info-area">
      <h1>Novidades</h1>
      <div className="all-info">
        <div className="info-img"></div>
        <div className="info-img"></div>
        <div className="info-img"></div>
      </div>
    </div>
  );
};

const Vantagens = () => {
  return (
    <div className="space-area">
      <img />
      <section className="content-info-vant">
        {/* mudar todos os textos com gpt e adequar com o site */}
        <div className="grid-display-vant">
          <img src="" />
          <div>
            <h3>Cursos online criados por</h3>
            <p>
              Nossos cursos online foram criados para ajudá-lo a aprender
              japonês, não importa onde você esteja.
            </p>
          </div>
        </div>
        <div className="grid-display-vant">
          <img src="" />
          <dic>
            <h3>Suporte em 1 idiomas</h3>
            <p>
              Nossa dedicada equipe oferece suporte em inglês, francês,
              italiano, espanhol, sueco, alemão e português.
            </p>
          </dic>
        </div>
        <div className="grid-display-vant">
          <img src="" />
          <div>
            <h3>Nosso suporte é gratuito</h3>
            <p>
              Não cobramos por nosso serviço, então você paga exatamente o mesmo
              que pagaria caso se inscrevesse na escola desejada por conta
              própria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <About />
      {/* <Novidades /> */}
      <Vantagens />
    </>
  );
}

export default HomePage;
