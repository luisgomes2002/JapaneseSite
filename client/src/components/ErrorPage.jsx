import NavBar from "./nav/NavBar";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { ErrorPage } from "./ErrorPageStyle";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
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
    </>
  );
};

export default Error;
