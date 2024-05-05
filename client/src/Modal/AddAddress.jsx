import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";
import { fetchController } from "../utils/fetchController/fetchController";

const AddAddress = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  fetchData,
  data = null,
  id = null,
  isEditing = false,
}) => {
  console.log({id});
    console.log({ data });
  const [formData, setFormData] = useState({
    address: "",
    map_iframe: "",
    website_url: "",
    email: "",
    alternateNumber: "",
    primaryNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payloadData = {
        address: formData.address,
        map_location: formData.map_iframe,
        WebUrl: formData.website_url,
        email: formData.email,
        alternate_number: Number(formData.alternateNumber),
        primary_number: Number(formData.primaryNumber),
      };
// ;
      let res;
      if (!isEditing) {
        res = await fetchController("/address", "POST", payloadData);
      } else {
        res = await fetchController(
          `/address/${data.id}`,
          "PUT",
          payloadData
        );
      }
      console.log(res);
console.log(res.status);
      if (res.status === 200) {
        fetchData();
        toast.success(res.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
        setFormData({
          address: "",
          map_iframe: "",
          website_url: "",
          email: "",
          alternateNumber: "",
          primaryNumber: "",
        });
      }
    } catch (error) {
      toast.error("Error occour in AddDestination Component", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      console.log("Inside Useeefect");
      const address = data && data.id ? data.Address : "";
      const primaryNumber = data && data.id ? data["Primary number"] : "";
      const email = data && data.id ? data["Email"] : "";
      const map_iframe = data && data.id ? data["Map"] : "";
      setFormData({
        ...formData,
        address,
        primaryNumber,
        email,
        map_iframe,
      });
    }
  }, [id]);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: size === "sm" ? 400 : size === "md" ? 600 : 800,
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              width={"100%"}
              spacing={1}
              justifyContent={"space-between"}
            >
              <Typography variant="h5" gutterBottom>
                Edit Address
              </Typography>
              <Typography sx={{ cursor: "pointer" }}>
                <RxCrossCircled size={32} onClick={handleClose} />
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <Stack
                direction="row"
                width={"100%"}
                spacing={1}
                justifyContent={"space-between"}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="primaryNumber"
                  label="Primary Number"
                  name="primaryNumber"
                  type="number"
                  value={formData.primaryNumber}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="alternateNumber"
                  label="Alternate Number"
                  name="alternateNumber"
                  type="number"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                />
              </Stack>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="website_url"
                label="Website Url"
                name="website_url"
                type="text"
                value={formData.website_url}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="map"
                label="Map (Iframe)"
                name="map_iframe"
                type="text"
                value={formData.map_iframe}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAddress;
