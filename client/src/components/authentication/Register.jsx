import { useState } from "react";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom";

const Register = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
      <AuthContainer>
        <Section type="signup">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Nome" name="name" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="password" placeholder="Senha" name="password" />
            <input
              type="password"
              placeholder="Confirmar Senha"
              name="password"
            />
            <button type="submit">Entrar</button>
          </form>
          <Link to="/">Criar conta ・ </Link>
          <Link to="/auth">Logar</Link>
        </Section>
      </AuthContainer>
    </>
  );
};

export default Register;
