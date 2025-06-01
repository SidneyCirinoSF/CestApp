import "./style.css";
import Sidebar from "../../components/SideBar";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixa à esquerda */}
      <aside className="flex w-64 h-screen fixed top-0 left-0 text-white z-50">
        <Sidebar />
      </aside>

      {/* Main content (com margem esquerda para compensar a sidebar) */}
      <main
        className="ml-64 flex items-center justify-center h-screen p-4"
        style={{ width: "calc((100vw - 256px) * 0.9)" }}
      >
        <div className="w-1/2 bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold text-gray-700 text-center">
            Configurações
          </h1>

          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600">LOGIN: [puxar email do banco de dados]</label>
            <input
              type="email"
              placeholder="Digite seu novo e-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="self-end text-sm text-white bg-blue-400 rounded-lg transition">
              Alterar E-mail
            </button>
          </div>

          {/* Campo de senha */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600">SENHA: [puxar CPF do banco de dados]</label>
            <input
              type="password"
              placeholder="Digite sua nova senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="self-end text-sm text-white bg-blue-400 rounded-lg transition">
              Alterar Senha
            </button>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition">
            <Link to="/login">Sair</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Settings;
