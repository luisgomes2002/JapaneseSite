import { useState } from "react";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContainer, Section } from "./AuthenticationFrom.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "../schemas/signupSchema";
import { signup } from "../../services/userServices";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onRegister = async (data) => {
    try {
      const response = await signup(data);
    } catch (error) {
      console.log(error);
    }
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
            {errors.name && <span>{errors.name.message}</span>}
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
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirmar Senha"
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
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
