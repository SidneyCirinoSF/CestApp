import "./style.css";
//npm install react-imask para a seguinte lib=>
import { IMaskInput } from "react-imask";

function Cadastro() {
  return (
    <div>
      <form className="container">
        <h1>Cadastro CestApp</h1>

        <label htmlFor="nome">Nome completo:</label>
        <input id="nome" name="nome" type="text" required />

        <label htmlFor="dataNasc">Data de nascimento:</label>
        <input id="dataNasc" name="dataNasc" type="date" required />

        <label htmlFor="email">E-mail:</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <IMaskInput
        id="telefone"
        name="telefone"
        mask="(00) 00000-0000"
        type="text"
        required
        />

        <label htmlFor="cpf">CPF:</label>
        <IMaskInput
        id="cpf"
        name="cpf"
        mask="000.000.000-00"
        type="text"
        required
        />

        <label htmlFor="endereco">Endereço:</label>
        <input id="endereco" name="endereco" type="text" required />

        <label htmlFor="cep">CEP:</label>
        <IMaskInput
        id="cep"
        name="cep"
        mask="00000-000"
        type="text"
        required
        />

        <label htmlFor="cidade">Cidade:</label>
        <input id="cidade" name="cidade" type="text" required />

        <label htmlFor="bairro">Bairro:</label>
        <input id="bairro" name="bairro" type="text" required />

        <fieldset>
          <legend>Gênero:</legend>
          <input
            type="radio"
            id="female"
            name="gender"
            value="feminino"
            required
          />
          <label htmlFor="female">Feminino</label>

          <input type="radio" id="male" name="gender" value="masculino" />
          <label htmlFor="male">Masculino</label>
        </fieldset>

        <fieldset>
          <legend>Você é o provedor da sua família?</legend>
          <input
            type="radio"
            id="provSim"
            name="provedor"
            value="sim"
            required
          />
          <label htmlFor="provSim">Sim</label>

          <input type="radio" id="provNao" name="provedor" value="nao" />
          <label htmlFor="provNao">Não</label>
        </fieldset>

        <label htmlFor="renda">Renda familiar:</label>
        <input id="renda" name="renda" type="number" required />

        <label htmlFor="moradoresCasa">
          Quantas pessoas moram na sua casa?
        </label>
        <input id="moradoresCasa" name="moradoresCasa" type="number" required />

        <fieldset>
          <legend>Participa de algum programa de ajuda pelo governo?</legend>
          <input
            type="radio"
            id="progSim"
            name="programaGoverno"
            value="sim"
            required
          />
          <label htmlFor="progSim">Sim</label>

          <input type="radio" id="progNao" name="programaGoverno" value="nao" />
          <label htmlFor="progNao">Não</label>
        </fieldset>

        <label htmlFor="seSimProg">
          Se participa de algum programa ofertado pelo governo, cite-os:
        </label>
        <input id="seSimProg" name="seSimProg" type="text" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
