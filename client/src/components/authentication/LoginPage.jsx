import { useState, useEffect } from "react";
import NavBar from "../nav/NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../schemas/signinSchema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onLogin = async (data) => {
    const { email, password } = data;
    console.log(data);
    // signupSchema();
  };

  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
      <AuthContainer>
        <Section type="signin">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onLogin)}>
            <input
              {...register("email")}
              type="email"
              placeholder="E-mail"
              name="email"
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
              name="password"
            />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit">Entrar</button>
          </form>
          <Link to="/register">Criar conta ・ </Link>
          <Link to="/">Recuperar conta</Link>
        </Section>
      </AuthContainer>
    </>
  );
};

export default Login;
