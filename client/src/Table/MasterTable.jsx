import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Stack } from "@mui/material";

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

export default function MasterTable({ column=[], tableData=[], table="" }) {
  const columnsData = column.map((val, index) => {
    if (val === "Image") {
      return {
        field: val,
        headerName: val,
        renderCell: (params) => (
          <img
            src={params.value}
            alt="Image"
            style={{ width: "100%", height: "auto" }}
          />
        ),
      };
    } else {
      return { field: val, headerName: val };
    }
  });
  // const columns = [
  //   { field: "id", headerName: "ID", width: 130 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 130,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  //   },
  // ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnsData.map((col, id) => (
              <TableCell>{col.headerName}</TableCell>
            ))}
            <TableCell>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table === "packages" &&
            tableData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.SN0}
                </TableCell>

                <TableCell>{row.Title}</TableCell>
                <TableCell>{row.Description}</TableCell>
                <TableCell>{row["No of Days"]}</TableCell>
                <TableCell>
                  {" "}
                  <img
                    src={row.Image}
                    alt="Image"
                    style={{ width: "80px", height: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <AiTwotoneEdit
                      style={{
                        color: "green",
                      }}
                    />
                    <AiOutlineDelete
                      style={{
                        color: "red",
                      }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          {table === "enquiry" &&
            tableData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.SN0}
                </TableCell>
                <TableCell>{row["Name"]}</TableCell>
                <TableCell>{row["Mobile no"]}</TableCell>
                <TableCell>{row["Email"]}</TableCell>
                <TableCell>{row["Type"]}</TableCell>
                <TableCell>{row["Message"]}</TableCell>

                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <AiTwotoneEdit
                      style={{
                        color: "green",
                      }}
                    />
                    <AiOutlineDelete
                      style={{
                        color: "red",
                      }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
