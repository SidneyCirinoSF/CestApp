import { useRef, useState } from "react";
import Home from "../Home";
import "./style.css";
import api from "../services/api";

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const body = {cpf : inputCpf}

  async function getUserValidate(e) {
    e.preventDefault();
    try {
      const response = await api.post("/api/user/login", body);
      const users = response.data;
      console.log(users)

      if (users.funcionario) {
        setIsLoggedIn(true);
        localStorage.setItem('userid', users.userid)
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

                <input id="email" name="email" type="email" placeholder="E-mail" onChange={(e) => setInputEmail(e.target.value)} required />

                <input id="cpf" name="cpf" type="text" placeholder="CPF (apenas os números)"  onChange={(e) => setInputCpf(e.target.value)} required />

                <button onClick={getUserValidate}>Entrar</button>

            </form>
        </div>
    )
}

export default Login;
