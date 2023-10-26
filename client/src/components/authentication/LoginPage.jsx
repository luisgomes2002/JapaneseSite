import { useState, useEffect } from "react";
import NavBar from "../nav/NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom.jsx";

const Login = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
      <AuthContainer>
        <Section type="signin">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="E-mail" name="email" />
            <input type="password" placeholder="Senha" name="password" />
            <button type="submit">Entrar</button>
          </form>
          <Link to="/">Criar conta ・ </Link>
          <Link to="/register">Recuperar conta</Link>
        </Section>
      </AuthContainer>
    </>
  );
};

export default Login;
