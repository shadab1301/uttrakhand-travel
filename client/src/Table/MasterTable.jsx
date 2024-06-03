import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, Stack, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ConfirmDelete from "../Modal/ConfirmDelete";
import { fetchController } from "../utils/fetchController/fetchController";
import { toast, ToastContainer } from "react-toastify";
import AddDestination from "../Modal/AddDestination";
import AddPackages from "../Modal/AddPackages";
import AddGallery from "../Modal/AddGallery";
import AddTestimonial from "../Modal/AddTestimonial";
import AddAddress from "../Modal/AddAddress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function MasterTable({
  column = [],
  tableData = [],
  table = "",
  loadData,
  handleClickOnCheckBox,
  handleClickOnDropDown,
}) {
  const [open, setOpen] = React.useState(false);
  const [isEditDestinationMOdalOpened, setIsEditDestinationMOdalOpened] =
    React.useState(false);
  const [isEditPackagesMOdalOpened, setIsEditPackagesMOdalOpened] =
    React.useState(false);
  const [isEditGalleryMOdalOpened, setIsEditGalleryMOdalOpened] =
    React.useState(false);
  const [isEditTestimonialMOdalOpened, setIsEditTestimonialMOdalOpened] =
    React.useState(false);
  const [isEditAddressMOdalOpened, setIsEditAddressMOdalOpened] =
    React.useState(false);

  const [itemToBeDeleteId, setItemToBeDeleteId] = React.useState(null);
  const [itemToBeEditeId, setItemToBeEditeId] = React.useState(null);
  // const [Estatus,setEstatus] = React.useState(0);

  //   const handleChange = (e) =>{
  // console.log(e);
  // setEstatus(e.target.value);
  //   }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setItemToBeDeleteId(null);
  };
  // To open Edit Destination Modal
  const handleOpenEditDestinationModal = () => {
    setIsEditDestinationMOdalOpened(true);
  };
  const handleCloseEditDestinationModal = () => {
    setIsEditDestinationMOdalOpened(false);
    setItemToBeEditeId(null);
  };
  //  To open Edit Packages Modal
  const handleOpenEditPackagesModal = () => {
    setIsEditPackagesMOdalOpened(true);
  };
  const handleCloseEditPackagesModal = () => {
    setIsEditPackagesMOdalOpened(false);
    setItemToBeEditeId(null);
  };
  //  To open Edit Gallery Modal
  const handleOpenEditGalleryModal = () => {
    setIsEditGalleryMOdalOpened(true);
  };
  const handleCloseEditGalleryModal = () => {
    setIsEditGalleryMOdalOpened(false);
    setItemToBeEditeId(null);
  };
  //  To open Edit Testimonial Modal
  const handleOpenEditTestimonialModal = () => {
    setIsEditTestimonialMOdalOpened(true);
  };
  const handleCloseEditTestimonialModal = () => {
    setIsEditTestimonialMOdalOpened(false);
    setItemToBeEditeId(null);
  };
  //  To open Edit Address Modal
  const handleOpenEditAddressModal = () => {
    setIsEditAddressMOdalOpened(true);
  };
  const handleCloseEditAddressModal = () => {
    setIsEditAddressMOdalOpened(false);
    setItemToBeEditeId(null);
  };

  // Column Data
  const columnsData = column.map((val, index) => {
    if (["Image", "City Image"].includes(val)) {
      return {
        field: val.name,
        headerName: val.value,
        renderCell: (params) => (
          <img
            src={params.value}
            alt="Image"
            style={{ width: "100%", height: "auto" }}
          />
        ),
      };
    } else {
      return { field: val.name, headerName: val.value };
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
  const handleClickOnEdit = (data) => {
    setItemToBeEditeId(data);

    if (table === "packages") {
      handleOpenEditPackagesModal();
    } else if (table === "enquiry") {
      //  deleteEnquiry();
    } else if (table === "destination") {
      handleOpenEditDestinationModal();
    } else if (table === "testimonial") {
      //  handleOpenEditDestinationModal();
      //  loadData();
    } else if (table === "gallery") {
      handleOpenEditGalleryModal();
    } else if (table === "address") {
      handleOpenEditAddressModal();
    }
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

  return (
    <>
      <TableContainer component={Paper} style={{maxWidth:"50vw !impotant",overflow:"scroll",border:"1px solid red"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnsData.map((col, id) => (
                <TableCell key={id}>{col.headerName}</TableCell>
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
                  <TableCell>{row["Sub Title"]}</TableCell>
                  <TableCell>{row.Includes}</TableCell>
                  <TableCell>{row.Description?.slice(0, 50)}...</TableCell>
                  <TableCell>{row["DestinationString"]}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={false}
                          name="is Show In Header"
                          checked={
                            row["is Show In Header"] === true ||
                            row["is Show In Header"] === "true"
                              ? true
                              : false
                          }
                          onChange={(e) => handleClickOnCheckBox(e, row.id)}
                        />
                      }
                      label=""
                    />
                  </TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={false}
                          name="is Top Packages"
                          checked={
                            row["is Top Packages"] === true ||
                            row["is Top Packages"] === "true"
                              ? true
                              : false
                          }
                          onChange={(e) => handleClickOnCheckBox(e, row.id)}
                        />
                      }
                      label=""
                    />
                  </TableCell>

                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={false}
                          name="is Recommend Packages"
                          checked={
                            row["is Recommend Packages"] === true ||
                            row["is Top Packages"] === "true"
                              ? true
                              : false
                          }
                          onChange={(e) => handleClickOnCheckBox(e, row.id)}
                        />
                      }
                      label=""
                    />
                  </TableCell>
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
                    {" "}
                    <img
                      src={row["Banner Image"]}
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
                        onClick={() => handleClickOnEdit(row)}
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
                    {row["Status"] !== "2" ? (
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">
                          Status
                        </InputLabel>
                        <Select
                          name="status"
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={row["Status"]}
                          label="Status"
                          onChange={(e) => handleClickOnDropDown(e, row.id)}
                        >
                          <MenuItem value="">
                            <em>Select Status</em>
                          </MenuItem>
                          <MenuItem value="0">pending</MenuItem>
                          <MenuItem value="1">progress</MenuItem>
                          <MenuItem value="2">completed</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <>
                        {" "}
                        <Button variant="contained" color="success">
                          completed
                        </Button>
                      </>
                    )}
                  </TableCell>
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
                    {" "}
                    <img
                      src={row["City Image"]}
                      alt="Image"
                      name="City Image"
                      style={{ width: "80px", height: "50px" }}
                    />
                  </TableCell>

                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={false}
                          name="is Include In Navbar"
                          checked={
                            row["is Include In Navbar"] === true ? true : false
                          }
                          onChange={(e) => handleClickOnCheckBox(e, row.id)}
                        />
                      }
                      label=""
                    />
                  </TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={false}
                          name="is Top Visit Place"
                          checked={
                            row["is Top Visit Place"] === true ? true : false
                          }
                          onChange={(e) => handleClickOnCheckBox(e, row.id)}
                        />
                      }
                      label=""
                    />
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <AiTwotoneEdit
                        style={{
                          color: "green",
                        }}
                        onClick={() => handleClickOnEdit(row)}
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
                        onClick={() => handleClickOnEdit(row)}
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
            {table === "address" &&
              tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.SN0}
                  </TableCell>
                  <TableCell>{row["Primary number"]}</TableCell>
                  <TableCell>{row["Alternate number"]}</TableCell>

                  <TableCell>{row.Address}</TableCell>
                  <TableCell>{row.Email}</TableCell>
                  <TableCell>{row["Website url"]}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        left: 0,
                        width: "100px",
                        height: "100px",
                        position: "relative",
                      }}
                    >
                      <iframe
                        src={row.Map}
                        style={{
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          border: 0,
                        }}
                        allowfullscreen
                      ></iframe>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <AiTwotoneEdit
                        style={{
                          color: "green",
                        }}
                        onClick={() => handleClickOnEdit(row)}
                      />
                      {/* <AiOutlineDelete
                        style={{
                          color: "red",
                        }}
                        onClick={() => handleClickOnDelete(row.id)}
                      /> */}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            {/*  */}
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
        fetchData={loadData}
      />
      <AddDestination
        handleOpen={handleOpenEditDestinationModal}
        handleClose={handleCloseEditDestinationModal}
        isOpen={isEditDestinationMOdalOpened}
        size={"md"}
        fetchData={loadData}
        id={itemToBeEditeId && itemToBeEditeId.id}
        isEditing={true}
        data={itemToBeEditeId}
      />
      <AddPackages
        isOpen={isEditPackagesMOdalOpened}
        handleOpen={handleOpenEditPackagesModal}
        handleClose={handleCloseEditPackagesModal}
        size={"md"}
        fetchData={loadData}
        isEditing={true}
        data={itemToBeEditeId}
        id={itemToBeEditeId && itemToBeEditeId.id}
      />
      <AddGallery
        isOpen={isEditGalleryMOdalOpened}
        handleOpen={handleOpenEditGalleryModal}
        handleClose={handleCloseEditGalleryModal}
        size={"md"}
        fetchData={loadData}
        isEditing={true}
        data={itemToBeEditeId}
        id={itemToBeEditeId && itemToBeEditeId.id}
      />
      <AddTestimonial
        isOpen={isEditTestimonialMOdalOpened}
        handleOpen={handleOpenEditTestimonialModal}
        handleClose={handleCloseEditTestimonialModal}
        size={"md"}
        fetchData={loadData}
        isEditing={true}
        data={itemToBeEditeId}
        id={itemToBeEditeId && itemToBeEditeId.id}
      />
      <AddAddress
        isOpen={isEditAddressMOdalOpened}
        handleOpen={handleOpenEditAddressModal}
        handleClose={handleCloseEditAddressModal}
        size={"md"}
        fetchData={loadData}
        isEditing={true}
        data={itemToBeEditeId}
        id={itemToBeEditeId && itemToBeEditeId.id}
      />
    </>
  );
}
