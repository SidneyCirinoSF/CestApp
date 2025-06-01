import { useEffect, useState, useRef } from "react";
import "./style.css";
import "../services/api";
//npm install react-imask para a seguinte lib=>
import { IMaskInput } from "react-imask";
import api from "../services/api";

function Cadastro() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputGender, setinputGender] = useState("");
  const [inputProvider, setinputProvider] = useState("");
  const [inputGovProgram, setinputGovProgram] = useState("");

  const inputName = useRef()
  const inputBirthDate = useRef()
  const inputEmail = useRef()
  const inputPhone = useRef()
  const inputCpf = useRef()
  const inputAddress = useRef()
  const inputCep = useRef()
  const inputCity = useRef()
  const inputDistrict = useRef()
  const inputIncomeFamily = useRef()
  const inputPeopleLive = useRef()
  const inputGovProgramYes = useRef()
  const	estadoUsers = "aguardando validacao"

  async function createUsers() {
    try {
    await api.post("/api/user", {
      nome: inputName.current.value,
      dataNasc: inputBirthDate.current.value,
      email: inputEmail.current.value,
      telefone: inputPhone.current.element.value,
      cpf: inputCpf.current.element.value,
      endereco: inputAddress.current.value,
      cep: inputCep.current.element.value,
      cidade: inputCity.current.value,
      bairro: inputDistrict.current.value,
      genero: inputGender,
      provedorF: inputProvider,
      renda: inputIncomeFamily.current.value,
      qtPessoasC: inputPeopleLive.current.value,
      programaGov: inputGovProgram,
      nomeGov: inputGovProgramYes.current.value,
      estadoUser: estadoUsers
    });

    setSuccessMessage("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    setErrorMessage("Erro ao cadastrar usuário. Tente novamente.");
  }
}
  function Toast({ message, type, onClose }) {
    if (!message) return null;

    const background = type === "success" ? "#4BB543" : "#FF3333";

    return (
      <div style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: background,
        color: "#fff",
        padding: "12px 20px",
        borderRadius: 5,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 9999,
      }}>
        {message}
        <button 
          onClick={onClose} 
          style={{
            marginLeft: 10,
            background: "transparent",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          × 
        </button>
      </div>
    );
  }

  function handleCloseToast() {
    setSuccessMessage("");
    setErrorMessage("");
  }

  useEffect(() => {
  if (successMessage || errorMessage) {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 2000); 
    return () => clearTimeout(timer);
  }
}, [successMessage, errorMessage]);


  return ( 
    
    <div>
      <form className="container">
        <h1>Cadastro CestApp</h1>

        <label htmlFor="nome">Nome completo:</label>
        <input id="nome" name="nome" type="text" ref={inputName} required />

        <label htmlFor="dataNasc">Data de nascimento:</label>
        <input id="dataNasc" name="dataNasc" type="date" ref={inputBirthDate} required />

        <label htmlFor="email">E-mail:</label>
        <input id="email" name="email" type="email" ref={inputEmail} required />

        <label htmlFor="telefone">Telefone:</label>
        <IMaskInput
        id="telefone"
        name="telefone"
        mask="(00) 00000-0000"
        type="text"
        ref={inputPhone}
        required
        /> 

        <label htmlFor="cpf">CPF:</label>
        <IMaskInput
        id="cpf"
        name="cpf"
        mask="000.000.000-00"
        type="text"
        ref={inputCpf}
        required
        />

        <label htmlFor="endereco">Endereço:</label>
        <input id="endereco" name="endereco" type="text" ref={inputAddress} required />

        <label htmlFor="cep">CEP:</label>
        <IMaskInput
        id="cep"
        name="cep"
        mask="00000-000"
        type="text"
        ref={inputCep}
        required
        />

        <label htmlFor="cidade">Cidade:</label>
        <input id="cidade" name="cidade" type="text" ref={inputCity} required />

        <label htmlFor="bairro">Bairro:</label>
        <input id="bairro" name="bairro" type="text" ref={inputDistrict} required />

        <fieldset>
          <legend>Gênero:</legend>
          <input
            type="radio"
            id="female"
            name="gender"
            value="feminino"
            onChange={(e) => setinputGender(e.target.value)}
            required
          />
          <label htmlFor="female">Feminino</label>

          <input type="radio" id="male" name="gender"  value="masculino" onChange={(e) => setinputGender(e.target.value)} />
          <label htmlFor="male">Masculino</label>
        </fieldset>

        <fieldset>
          <legend>Você é o provedor da sua família?</legend>
          <input
            type="radio"
            id="provSim"
            name="provedor"
            value="sim"
            onChange={(e) => setinputProvider(e.target.value)}
            required
          />
          <label htmlFor="provSim">Sim</label>

          <input type="radio" id="provNao" name="provedor" value="nao" onChange={(e) => setinputProvider(e.target.value)} />
          <label htmlFor="provNao">Não</label>
        </fieldset>

        <label htmlFor="renda">Renda familiar:</label>
        <input id="renda" name="renda" type="number" ref={inputIncomeFamily} required />

        <label htmlFor="moradoresCasa">
          Quantas pessoas moram na sua casa?
        </label>
        <input id="moradoresCasa" name="moradoresCasa" type="number"  ref={inputPeopleLive}required />

        <fieldset>
          <legend>Participa de algum programa de ajuda pelo governo?</legend>

          <input type="radio" id="progSim" name="programaGoverno" value="sim" onChange={(e) => setinputGovProgram(e.target.value)} required/>
          <label htmlFor="progSim">Sim</label>

          <input type="radio" id="progNao" name="programaGoverno" value="nao"  onChange={(e) => setinputGovProgram(e.target.value)} />
          <label htmlFor="progNao">Não</label>
        </fieldset>

        <label htmlFor="seSimProg">
          Se participa de algum programa ofertado pelo governo, cite-os:
        </label>
        <input id="seSimProg" name="seSimProg" type="text" ref={inputGovProgramYes} />

        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>
      
    <Toast message={successMessage} type="success" onClose={handleCloseToast} />
    <Toast message={errorMessage} type="error" onClose={handleCloseToast} />
    </div>
  );
}

export default Cadastro;
