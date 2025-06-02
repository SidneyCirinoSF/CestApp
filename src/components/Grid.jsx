import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import api from "../pages/services/api";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function Grid() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteUser = async (id) => {
    try {
      await api.delete(`/api/user/${id}`);
      setRowData((prev) => prev.filter((row) => row._id !== id));
      setSuccessMessage("Usuário removido com sucesso!");

    } catch (err) {
      setError("Erro ao deletar usuário");
      console.error("Erro na deleção:", err);
      setErrorMessage("Erro ao remover usuário. Tente novamente.");
    }
  };

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

  const defaultColDef = useMemo(() => ({
    flex: 1,
    filter: true,
    floatingFilter: true,
    resizable: true,
  }), []);

  const [colDefs] = useState([
    { field: "nome" },
    { field: "idade" },
    { field: "email" },
    { field: "telefone" },
    { field: "cpf" },
    { field: "endereco" },
    { field: "cep" },
    { field: "cidade" },
    { field: "bairro" },
    { field: "genero" },
    { field: "provedor" },
    {
      field: "renda",
      valueFormatter: (p) => "R$" + p.value.toLocaleString(),
    },
    { field: "tamanhoFam" },
    { field: "outrosProgramas" },
    { field: "quaisProgramas" },
    { field: "estadoUser" },
      {
  headerName: "Remover",
  cellRenderer: (params) => (
    <button
      onClick={() => deleteUser(params.data._id)}
      className="delete-button"
    >
      Remover
    </button>
  ),
  filter: false,
  sortable: false,
}
  ]);

  useEffect(() => {
    const delay = 0;
    const timer = setTimeout(async () => {
      try {
        const response = await api.get("/api/users");
        setRowData(response.data);
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error("Erro na requisição:", err);
      } finally {
        setLoading(false);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="ag-theme-quartz" style={{ height: 800, padding: 10 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20]}
      />
    <Toast message={successMessage} type="success" onClose={handleCloseToast} />
    <Toast message={errorMessage} type="error" onClose={handleCloseToast} />
    </div>
  );
}

export default Grid;
