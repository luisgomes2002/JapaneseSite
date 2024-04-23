import { Link } from "react-router-dom";
import { AuthContainer, Section } from "./AuthenticationFromStyle.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../schemas/signinSchema";
import { signin } from "../../services/userServices";
import Cookies from "js-cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onLogin = async (data) => {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 5 });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
