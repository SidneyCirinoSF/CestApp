import { Link } from "react-router-dom"
import "./style.css"


function Login() {
    return (
        <div>
            <form className="container">
                <h1>LOGIN</h1>

                <input id="email" name="email" type="email" placeholder="E-mail" required />

                <input id="cpf" name="cpf" type="text" placeholder="CPF (apenas os números)" required />

                <button><Link to="/home">Entrar</Link></button>

                <label htmlFor="naoTemConta">Ainda não é cadastrado? <span><Link to="/cadastro">Registre-se</Link></span></label>

            </form>
        </div>
    )
}

export default Login