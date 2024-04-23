import React from "react";
import "./JapaneseHome.css";
import "./Info.css";
import "./Alfabeto.css";
import "./Presentation.css";
import { Link } from "react-router-dom";
import JlptImg from "../../../assets/JLPT/livros.jpg";

const TabsJlptInfo = [
  {
    id: 1,
    img: JlptImg,
    h1: "JLPT",
    p: "escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jpltescrever",
    link: "/jlpt",
  },
  {
    id: 2,
    img: JlptImg,
    h1: "JAPONÊS",
    p: "escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jplt escrever algo sobre jpltescrever",
    link: "/learner",
  },
];

const InfoContents = [
  {
    id: 1,
    h2: "Informe",
    text: " Na seção a seguir, você encontrará não apenas o básico do japonês, mas também um guia completo para estudar de forma independente, sem depender de cursos.",
  },
  {
    id: 2,
    h2: "Informe",
    text: "Porém, caso você sinta a necessidade de adquirir um curso ou tenha recursos disponíveis, mais adiante compartilharei alguns cursos que conheço, juntamente com os respectivos links do criador.",
  },
  {
    id: 3,
    h2: "Informe",
    text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
  },
];

function Home() {
  return (
    <div className="hero-japanese" id="home">
      <div className="hero-container">
        <h1 className="hero-heading">
          Interessado em aprender <span>JAPONÊS?</span>
        </h1>
        <p className="hero-description">
          Seja para assistir anime sem legenda ou ir para o Japão
        </p>
      </div>
    </div>
  );
}

const Presentation = () => {
  return (
    <section className="grid-presentation">
      <div className="presentation-area">
        <h2>MERGULHE DE CABEÇA NO IDIOMA</h2>
        <h1>A oportunidade de estudar Japonês nunca esteve tão acessível</h1>
        <p>
          Neste espaço, você terá acesso a um conhecimento abrangente sobre os
          exames de proficiência em língua japonesa, bem como informações
          detalhadas sobre o próprio idioma japonês. Além disso, você receberá
          dicas inéditas e inovadoras que não foram disponibilizadas em nenhum
          outro lugar na internet.
        </p>
      </div>
      <section className="presentation-extra">
        <h1>Exoplore outras áreas</h1>
        <div className="grid-presentation--extra">
          <button className="text-area">More no Japão</button>
          <button className="text-area">Viaje para o Japão</button>
          <button className="text-area">Veja mais</button>
          <button className="text-area">Compartilhe</button>
        </div>
      </section>
    </section>
  );
};

function Info() {
  return (
    <div className="main" id="about">
      <h3>INFORMAÇÕES IMPORTANTES</h3>
      <h1>Um pouco sobre</h1>
      <div className="main-container">
        {InfoContents.map((items, i) => (
          <div className="main-content" key={i}>
            <i className="fa-solid fa-circle-info"></i>
            <h2>{items.h2}</h2>
            <p>{items.text}</p>
          </div>
        ))}
      </div>
      <a href="#tabs">
        <button>VAMOS</button>
      </a>
    </div>
  );
}

function TabsJlpt() {
  return (
    <div id="tabs" className="title">
      <h3>APRENDA ALGO NOVO</h3>
      <h2>Explore a sua área de interesse</h2>
      <div className="tabs-container">
        {TabsJlptInfo.map((items, i) => (
          <div className="tabs-info--jlpt" key={i}>
            <Link to={items.link} className="box-items">
              <img src={items.img} alt="" />
            </Link>
            <h1>{items.h1}</h1>
            <p>{items.p}</p>
          </div>
        ))}
      </div>
      <Link to="/register">
        <button>Cadastre-se</button>
      </Link>
    </div>
  );
}

function JapaneseHome() {
  return (
    <>
      <Home />
      <Presentation />
      <Info />
      <TabsJlpt />
    </>
  );
}

export default JapaneseHome;
