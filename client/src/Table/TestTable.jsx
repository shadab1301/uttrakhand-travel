import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Muitable = () => {
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
  ]);
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
 
];
  const handleDeleteColumn = (field) => {
    const updatedColumns = columns.filter((column) => column.field !== field);
    setColumns(updatedColumns);
  };

  const CustomToolbar = () => (
    <GridToolbar>
      {columns.map((column) => (
        <button
          key={column.field}
          onClick={() => handleDeleteColumn(column.field)}
        >
          Deleteaaaa {column.headerName}
        </button>
      ))}
    </GridToolbar>
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        components={{ Toolbar: CustomToolbar }}
        getRowId={(row) => Math.random()*100000009999}
      />
    </div>
  );
};

export default Muitable;
