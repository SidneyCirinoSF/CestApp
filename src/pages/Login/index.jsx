import { useRef, useState } from "react";
import Home from "../Home";
import "./style.css";
import api from "../services/api";

function Login() {
  const inputEmail = useRef();
  const inputCpf = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getUserValidate(e) {
    e.preventDefault();
    try {
      const response = await api.get("/api/users");
      const users = response.data;

      const userFound = users.find(
        (user) =>
          user.email === inputEmail.current.value &&
          user.cpf === inputCpf.current.value &&
          user.funcionario === "true"
      );

      if (userFound) {
        setIsLoggedIn(true);
      } else {
        alert("E-mail ou CPF incorretos.");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
    }
  }

  if (isLoggedIn) {
    return <Home />;
  }

  return (
     <div>
            <form className="container">
                <h1>LOGIN</h1>

                <input id="email" name="email" type="email" placeholder="E-mail"  ref={inputEmail}required />

                <input id="cpf" name="cpf" type="text" placeholder="CPF (apenas os números)"  ref={inputCpf} required />

                <button onClick={getUserValidate}>Entrar</button>

            </form>
        </div>
    )
}

export default Login;
