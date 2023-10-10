import NavBar from "./nav/NavBar";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const Error = () => {
  const error = useRouteError();
  //Página não encontrada

  // Ops! Parece que você encontrou uma menor perdida no ciberespaço.
  // Infelizmente, não podemos ajudar a localizá - la aqui.
  // Recomendamos que você verifique novamente as informações inseridas ou tente pesquisar por algo diferente.

  return (
    <div id="error-page">
      <nav>
        <NavBar />
      </nav>
      <div className="erroPage-area">
        <h2>Erro</h2>
        <h1>titleErro</h1>
        <h3>textErro</h3>
        <Link to="/">
          <button>Voltar</button>
        </Link>
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
};

export default Error;
