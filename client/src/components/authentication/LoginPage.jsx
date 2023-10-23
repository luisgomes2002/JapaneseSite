import { useState, useEffect } from "react";
import NavBar from "../nav/NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom.jsx";
import { Input } from "../Input/Input.jsx";
import { Button } from "../button/Button.jsx";

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
            <Input type="email" placeholder="Email" name="email"></Input>
            <Input type="text"></Input>
            <Button type="button" text="Entrar"></Button>
          </form>
        </Section>
      </AuthContainer>
    </>
  );
};

export default Login;
