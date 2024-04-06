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
import axios from "axios";

const AddPackages = ({ handleOpen, handleClose, isOpen, size }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    numbersOfDay: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pkgImage") {
      setImage(e.target.files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("pkgImage", image);
    data.append("title", formData.title);
    data.append("subTitle", formData.subTitle);
    data.append("numbersOfDay", formData.numbersOfDay);
    data.append("description", formData.description);

    console.log({ data });
    const url = "http://localhost:5000/api/v1/package";

    axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // const res = await axios.post(url, JSON.stringify(data));

    // console.log({res});
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
                Add Packages
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
                id="title"
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="subTitle"
                label="subTitle Title"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="numbersOfDay"
                label="No Of Day"
                name="numbersOfDay"
                type="text"
                value={formData.numbersOfDay}
                onChange={handleChange}
              />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="includes"
                label="Includes"
                name="includes"
                type="text"
                value={formData.includes}
                onChange={handleChange}
              /> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
              />

              {/* pkgImage */}
              {/* <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="pkgImage"
                onChange={handleChange}
              /> */}
              <TextField
                accept="image/*"
                margin="normal"
                required
                fullWidth
                id="image"
                label=""
                name="pkgImage"
                type="file"
                value={formData.image}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={handleSubmit}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPackages;
