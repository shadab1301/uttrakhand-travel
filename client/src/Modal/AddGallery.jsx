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
import { toast, ToastContainer } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";
import { AddFileController } from "../utils/fetchController/AddFileController";

const AddGallery = ({ handleOpen, handleClose, isOpen, size, loadData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
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
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("image", image);
      data.append("title", formData.title);
      data.append("description", formData.description);

      const res = await AddFileController("/gallery", "POST", data);
      if (res.statusCode === 200) {
        loadData();
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
          cityName: "",
          isIncludeInNavbar: "0",
          isTopVisitPlace: "0",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error occour in AddDestination Component");
      console.log(error);
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
      setIsLoading(false);
    }
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
                Add Gallery
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
                id="description"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="image"
                label=""
                name="image"
                type="file"
                value={formData.image}
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

export default AddGallery;
