import React, { useState } from "react";
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

const AddAddress = ({ handleOpen, handleClose, isOpen, size }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

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
                Add Address
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
                id="firstName"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAddress;
