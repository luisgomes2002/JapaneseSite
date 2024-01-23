import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { ErroArea, ErrorPage } from "./ErrorPageStyle";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";

const Error = () => {
  const error = useRouteError();

  return (
    <ErroArea>
      <NavBar />
      <ErrorPage>
        <h1>Erro {error.status}</h1>
        <h2>
          {error.statusText} <i className="fa-solid fa-exclamation"></i>
        </h2>
        <h3>{error.message}</h3>
        <p>
          Desculpe, ocorreu um erro inesperado. Por favor, tente novamente mais
          tarde.
        </p>
        <ul>
          <li>Verifique sua conexão com a internet.</li>
          <li>Atualize a página e tente novamente.</li>
          <li>Entre em contato com o suporte se o problema persistir.</li>
        </ul>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </ErrorPage>
      <Footer />
    </ErroArea>
  );
};

export default Error;
