// Grid.jsx
import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

// REGISTRO DOS MÓDULOS
ModuleRegistry.registerModules([ClientSideRowModelModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";



function Grid() {

  // Row Data: informações que serão mostradas nas colunas.
    const [rowData, setRowData] = useState([
        { nome: "Pedro", idade: 25, email: "teste@01.com", telefone: 81999999999, cpf: 11122233344, endereco: "rua 1", cep: 53333333, cidade: "paulista", bairro: "nobre", genero: "masculino", provedor: true, renda: 1000, tamanhoFam: 5, outrosProgramas: true, quaisProgramas: "bolsa família" },
        { nome: "Wagner", idade: 15, email: "teste@02.com", telefone: 81999999998, cpf: 11122233355, endereco: "rua 2", cep: 63333333, cidade: "olinda", bairro: "ouro preto", genero: "masculino", provedor: false, renda: 3000, tamanhoFam: 9, outrosProgramas: false, quaisProgramas: "" },
        { nome: "Gabriel", idade: 38, email: "teste@03.com", telefone: 81999999997, cpf: 11122233366, endereco: "rua 3", cep: 73333333, cidade: "recife", bairro: "torre", genero: "masculino", provedor: true, renda: 1800, tamanhoFam: 2, outrosProgramas: true, quaisProgramas: "bolsa família" },
        { nome: "Joalison", idade: 55, email: "teste@04.com", telefone: 81999999996, cpf: 11122233377, endereco: "rua 4", cep: 83333333, cidade: "paulista", bairro: "pau amarelo", genero: "masculino", provedor: false, renda: 2000, tamanhoFam: 1, outrosProgramas: false, quaisProgramas: "" },
        
    ]);

    const defaultColDef = useMemo( ()=> {
      return {
        flex: 1,
        filter: true,
        floatingFilter: true
      }
    });

    // Column Definitions: definição das colunas que serão mostradas.
    const [colDefs, setColDefs] = useState([
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
          valueFormatter: p => "R$" + p.value.toLocaleString()
        },
        { field: "tamanhoFam" },        
        { field: "outrosProgramas" },
        { field: "quaisProgramas" }
    ]);


  return (
    <div className='ag-theme-quartz' style={{height: 800, padding: 10}}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={10} paginationPageSizeSelector={[10,20]} />
    </div>
  );
};

export default Grid;