import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import "./ErroPage.css";
import { Link } from "react-router-dom";

const Erro = () => {
  const [numErro, setNumerro] = useState("");
  const [titleErro, setTitleErro] = useState("");
  const [textErro, setTextErro] = useState("");

  //Página não encontrada

  // Ops! Parece que você encontrou uma menor perdida no ciberespaço.
  // Infelizmente, não podemos ajudar a localizá - la aqui.
  // Recomendamos que você verifique novamente as informações inseridas ou tente pesquisar por algo diferente.

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="erroPage-area">
        <h2>Erro {numErro}</h2>
        <h1>{titleErro}</h1>
        <h3>{textErro}</h3>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default Erro;
