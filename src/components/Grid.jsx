// Grid.jsx
import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import api from "../pages/services/api";

// REGISTRO DOS MÓDULOS
ModuleRegistry.registerModules([ClientSideRowModelModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function Grid() {
  // Estado para armazenar os dados da API
  const [rowData, setRowData] = useState([]);
  // Estado para carregamento/erro (opcional)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function deleteUser() {
      try {
        const response = await api.delete("/api/user/:id"); // Substitua pela sua rota da API
        setRowData(response.data); // Atualiza os dados da grid
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error("Erro na requisição:", err);
      } finally {
        setLoading(false);
      }
    }

  // Definição das colunas (igual ao seu código original)
  const [colDefs] = useState([
    { field: "nome" },
    { field: "dataNasc" },
    { field: "email" },
    { field: "telefone" },
    { field: "cpf" },
    { field: "endereco" },
    { field: "cep" },
    { field: "cidade" },
    { field: "bairro" },
    { field: "genero" },
    { field: "provedorF" },
    { field: "renda" },
    { field: "qtPessoasC" },        
    { field: "programaGov" }, 
    { field: "nomeGov" },
    { field: "estadoUser" }
  ]);

  // Busca os dados da API quando o componente é montado
  useEffect(() => {
      const delay = 2000; // 3 segundos de delay
      let timer;
    async function fetchData() {
      try {
        const response = await api.get("/api/users"); // Substitua pela sua rota da API
        setRowData(response.data); // Atualiza os dados da grid
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error("Erro na requisição:", err);
      } finally {
        setLoading(false);
      }
    }

    timer = setTimeout(fetchData, delay);
    return () => clearTimeout(timer);
  }, []);

  // Exibe mensagens de carregamento ou erro
  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="ag-theme-quartz" style={{ height: 800, padding: 10 }}>
      <AgGridReact 
        rowData={rowData} 
        columnDefs={colDefs} 
      />
    </div>
  );
}

export default Grid;