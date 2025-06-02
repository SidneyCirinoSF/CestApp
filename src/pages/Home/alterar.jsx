import React, { useState, useRef} from "react";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import api from '../services/api';

export default function UpdateData() {
  const [campoParaAlterar, setCampoParaAlterar] = useState("");
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem("userid")
    navigate("/login");
  }

  const BackHome = () => {
    navigate("/home");
  }

  const inputName = useRef();
  const inputBirthDate = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef();
  const inputCpf = useRef();
  const inputAddress = useRef();
  const inputCep = useRef();
  const inputCity = useRef();
  const inputDistrict = useRef();
  const inputIncomeFamily = useRef();
  const inputPeopleLive = useRef();
  const inputGovProgramYes = useRef();

  const [inputGender, setInputGender] = useState("");
  const [inputProvider, setInputProvider] = useState("");
  const [inputGovProgram, setInputGovProgram] = useState("");

  const handleUpdate = async () => {
    const dataToUpdate = {};

    if (campoParaAlterar === "nome") dataToUpdate.nome = inputName.current.value;
    if (campoParaAlterar === "dataNasc") dataToUpdate.dataNasc = inputBirthDate.current.value;
    if (campoParaAlterar === "email") dataToUpdate.email = inputEmail.current.value;
    if (campoParaAlterar === "telefone") dataToUpdate.telefone = inputPhone.current.value;
    if (campoParaAlterar === "cpf") dataToUpdate.cpf = inputCpf.current.value;
    if (campoParaAlterar === "endereco") dataToUpdate.endereco = inputAddress.current.value;
    if (campoParaAlterar === "cep") dataToUpdate.cep = inputCep.current.value;
    if (campoParaAlterar === "cidade") dataToUpdate.cidade = inputCity.current.value;
    if (campoParaAlterar === "bairro") dataToUpdate.bairro = inputDistrict.current.value;
    if (campoParaAlterar === "genero") dataToUpdate.genero = inputGender;
    if (campoParaAlterar === "provedor") dataToUpdate.provedor = inputProvider;
    if (campoParaAlterar === "renda") dataToUpdate.renda = inputIncomeFamily.current.value;
    if (campoParaAlterar === "moradoresCasa") dataToUpdate.moradoresCasa = inputPeopleLive.current.value;
    if (campoParaAlterar === "programaGoverno") dataToUpdate.programaGoverno = inputGovProgram;
    if (campoParaAlterar === "seSimProg") dataToUpdate.seSimProg = inputGovProgramYes.current.value;

    try{
      const userid = localStorage.getItem("userid")
      const response = await api.put(`http://localhost:3000/api/user/${userid}`, dataToUpdate)
      alert(response.data.message)

    }catch(error){
      alert("Erro na Atualização!")
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-100 flex flex-col gap-4">
  <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Alterar Dados</h1>

  <div className="mb-10">
    <label htmlFor="campoEscolhido" className="block text-sm font-medium text-gray-700 mb-2">
      Escolha o campo a alterar:
    </label>
    <select
      id="campoEscolhido"
      value={campoParaAlterar}
      onChange={(e) => setCampoParaAlterar(e.target.value)}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Selecione um campo...</option>
      <option value="nome">Nome</option>
      <option value="dataNasc">Data de nascimento</option>
      <option value="email">E-mail</option>
      <option value="telefone">Telefone</option>
      <option value="cpf">CPF</option>
      <option value="endereco">Endereço</option>
      <option value="cep">CEP</option>
      <option value="cidade">Cidade</option>
      <option value="bairro">Bairro</option>
      <option value="genero">Gênero</option>
      <option value="provedor">Provedor</option>
      <option value="renda">Renda</option>
      <option value="moradoresCasa">Moradores na casa</option>
      <option value="programaGoverno">Participa de programa governamental</option>
      <option value="seSimProg">Quais programas?</option>
    </select>
  </div>

  <form className="space-y-4">
    {campoParaAlterar === "nome" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Nome</label>
        <input 
          type="text" 
          ref={inputName}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "dataNasc" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Data de nascimento</label>
        <input 
          type="date" 
          ref={inputBirthDate}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "email" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">E-mail</label>
        <input 
          type="email" 
          ref={inputEmail}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "telefone" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Telefone</label>
        <IMaskInput 
          mask="(00) 00000-0000" 
          ref={inputPhone}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "cpf" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">CPF</label>
        <IMaskInput 
          mask="000.000.000-00" 
          ref={inputCpf}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "endereco" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Endereço</label>
        <input 
          type="text" 
          ref={inputAddress}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "cep" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">CEP</label>
        <IMaskInput 
          mask="00000-000" 
          ref={inputCep}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "cidade" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Cidade</label>
        <input 
          type="text" 
          ref={inputCity}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "bairro" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Bairro</label>
        <input 
          type="text" 
          ref={inputDistrict}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "genero" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gênero</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="fem" 
              name="genero" 
              value="feminino" 
              onChange={(e) => setInputGender(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="fem" className="ml-2 block text-sm text-gray-700">Feminino</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="masc" 
              name="genero" 
              value="masculino" 
              onChange={(e) => setInputGender(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="masc" className="ml-2 block text-sm text-gray-700">Masculino</label>
          </div>
        </div>
      </div>
    )}
    
    {campoParaAlterar === "provedor" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Provedor</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="provSim" 
              name="provedor" 
              value="sim" 
              onChange={(e) => setInputProvider(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="provSim" className="ml-2 block text-sm text-gray-700">Sim</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="provNao" 
              name="provedor" 
              value="nao" 
              onChange={(e) => setInputProvider(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="provNao" className="ml-2 block text-sm text-gray-700">Não</label>
          </div>
        </div>
      </div>
    )}
    
    {campoParaAlterar === "renda" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Renda familiar</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">R$</span>
          </div>
          <input 
            type="number" 
            ref={inputIncomeFamily}
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
      </div>
    )}
    
    {campoParaAlterar === "moradoresCasa" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Moradores na casa</label>
        <input 
          type="number" 
          ref={inputPeopleLive}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}
    
    {campoParaAlterar === "programaGoverno" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Participa de programa governamental?</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="progSim" 
              name="programaGoverno" 
              value="sim" 
              onChange={(e) => setInputGovProgram(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="progSim" className="ml-2 block text-sm text-gray-700">Sim</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="progNao" 
              name="programaGoverno" 
              value="nao" 
              onChange={(e) => setInputGovProgram(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
            />
            <label htmlFor="progNao" className="ml-2 block text-sm text-gray-700">Não</label>
          </div>
        </div>
      </div>
    )}
    
    {campoParaAlterar === "seSimProg" && (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Quais programas?</label>
        <input 
          type="text" 
          ref={inputGovProgramYes}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    )}

    <div className="pt-4">
      <button 
        type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-10 " onClick={handleUpdate}>
        Salvar Alteração
      </button>

      <button className="w-full mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " onClick={BackHome}>
            Voltar
          </button>

      <button className="w-full mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " onClick={handleLogout}>
            Sair
          </button>
    </div>
  </form>
</div>
  );
}
