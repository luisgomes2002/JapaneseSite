import { useState } from "react";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(signupSchema),
  });

  const onRegister = async (data) => {
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
        <Section type="signup">
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onRegister)}>
            <input
              {...register("name")}
              type="text"
              placeholder="Nome"
              name="name"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="E-mail"
              name="email"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
              name="password"
            />
            <input
              {...register("passwordConfimation")}
              type="password"
              placeholder="Confirmar Senha"
              name="password"
            />
            <button type="submit">Entrar</button>
          </form>
          <Link to="/auth">Logar ・ </Link>
          <Link to="/">Recuperar conta</Link>
        </Section>
      </AuthContainer>
    </>
  );
};

export default Register;
