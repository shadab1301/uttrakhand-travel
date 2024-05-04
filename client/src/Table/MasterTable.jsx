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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ConfirmDelete from "../Modal/ConfirmDelete";
import { fetchController } from "../utils/fetchController/fetchController";
import { toast, ToastContainer } from "react-toastify";

export default function MasterTable({ column = [], tableData = [], table = "", loadData }) {
  const [open, setOpen] = React.useState(false);
  const [itemToBeDeleteId, setItemToBeDeleteId] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemToBeDeleteId(null);
  };
  const columnsData = column.map((val, index) => {
    if (["Image", "City Image"].includes(val)) {
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

  const handleConfirmDelete = async () => {
    if (table === "packages") {
      await deletePackages();
      await loadData();
    } else if (table === "enquiry") {
      await deleteEnquiry();
      await loadData();
    } else if (table === "destination") {
      await deleteDestination();
      await loadData();
    } else if (table === "testimonial") {
      await deleteTestimonial();
      await loadData();
    } else if (table === "gallery") {
      await deleteGallery();
      await loadData();
    }
    handleClose();
  };
  const handleClickOnDelete = (id) => {
    setItemToBeDeleteId(id);
    handleOpen();
  };
  const deletePackages = async () => {
    try {
      const res = await fetchController(
        `/package/${itemToBeDeleteId}`,
        "DELETE"
      );
      if (res.statusCode === 201 || res.statusCode === 200) {
        toast.success(res.message, {
          position: "top-right",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error occour while delete packages");
      console.log({ error });
    } finally {
    }
  };
  const deleteEnquiry = async () => {
    try {
      const res = await fetchController(
        `/enquery/${itemToBeDeleteId}`,
        "DELETE"
      );
      if (res.statusCode === 201 || res.statusCode === 200) {
        toast.success(res.message, {
          position: "top-right",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error occour while delete packages");
      console.log({ error });
    } finally {
    }
  };
  const deleteDestination = async () => {
    try {
      const res = await fetchController(
        `/destination/${itemToBeDeleteId}`,
        "DELETE"
      );
      if (res.statusCode === 201 || res.statusCode === 200) {
        toast.success(res.message, {
          position: "top-right",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error occour while delete packages");
      console.log({ error });
    } finally {
    }
  };
  const deleteTestimonial = async () => {
    try {
      const res = await fetchController(
        `/testimonial/${itemToBeDeleteId}`,
        "DELETE"
      );
      if (
        [200, 201].includes(res.statusCode) ||
        [200, 201].includes(res.status)
      ) {
        toast.success(res.message, {
          position: "top-right",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error occour while delete packages");
      console.log({ error });
    } finally {
    }
  };
    const deleteGallery = async () => {
      try {
        const res = await fetchController(
          `/gallery/${itemToBeDeleteId}`,
          "DELETE"
        );
        if (
          [200, 201].includes(res.statusCode) ||
          [200, 201].includes(res.status)
        ) {
          toast.success(res.message, {
            position: "top-right",
          });
        } else {
          toast.error(res.message, {
            position: "top-right",
          });
        }
      } catch (error) {
        console.log("Error occour while delete packages");
        console.log({ error });
      } finally {
      }
    };

  // gallery ;

  return (
    <>
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
                        onClick={() => handleClickOnDelete(row.id)}
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
                      <AiOutlineDelete
                        style={{
                          color: "red",
                        }}
                        onClick={() => handleClickOnDelete(row.id)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            {table === "destination" &&
              tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.SN0}
                  </TableCell>
                  <TableCell>{row["City Name"]}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled
                          defaultChecked={row["is Include in Navbar"]}
                        />
                      }
                      label=""
                    />
                  </TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled
                          defaultChecked={row["is Top Visit Place"]}
                        />
                      }
                      label=""
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <img
                      src={row["City Image"]}
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
                        onClick={() => handleClickOnDelete(row.id)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            {table === "gallery" &&
              tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.SN0}
                  </TableCell>
                  <TableCell>{row["Title"]}</TableCell>
                  <TableCell>{row["Description"]}</TableCell>
                  <TableCell>
                    <img
                      src={row.Image}
                      alt="Image"
                      style={{ width: "80px", height: "50px" }}
                    />
                  </TableCell>
                  {/*  */}
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
                        onClick={() => handleClickOnDelete(row.id)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}

            {table === "testimonial" &&
              tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.SN0}
                  </TableCell>
                  <TableCell>{row["Customer name"]}</TableCell>
                  <TableCell>{row["Description"]}</TableCell>

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
                      {/* <AiTwotoneEdit
                        style={{
                          color: "green",
                        }}
                      /> */}
                      <AiOutlineDelete
                        style={{
                          color: "red",
                        }}
                        onClick={() => handleClickOnDelete(row.id)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            {/* gallery */}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmDelete
        isOpen={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        size={"md"}
        handleConfirmDelete={handleConfirmDelete}
        // fetchData={loadData}
      />
    </>
  );
}
