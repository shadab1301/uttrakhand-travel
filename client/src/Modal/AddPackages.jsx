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
import CircularProgress from "@mui/material/CircularProgress";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AddFileController } from "../utils/fetchController/AddFileController";
import { toast, ToastContainer } from "react-toastify";

const AddPackages = ({ handleOpen, handleClose, isOpen, size, fetchData }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    numbersOfDay: "",
    description: "",
    isRecommendPackages: "0",
    isTopPackages: "0",
    isShowInHeader: "0",
    include: "",
  });
  const [image, setImage] = useState(null);
  const [BannerImage, setBannerImage] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pkgImage") {
      setImage(e.target.files[0]);
    } else if (name === "BannerImage") {
      setBannerImage(e.target.files[0]);
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
      data.append("pkgImage", image);
      data.append("BannerImage", BannerImage);
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("numbersOfDay", formData.numbersOfDay);
      data.append("description", formData.description);
      data.append("isRecommendPackages", formData.isRecommendPackages);
      data.append("isTopPackages", formData.isTopPackages);
      data.append("isShowInHeader", formData.isShowInHeader);
      data.append("include", formData.include);

      const res = await AddFileController("/package", "POST", data);
      if (res.statusCode === 200) {
        fetchData()
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
          title: "",
          subTitle: "",
          numbersOfDay: "",
          description: "",
          isRecommendPackages: "0",
          isTopPackages: "0",
          isShowInHeader: "0",
          include: "test",
        });
      }
      console.log({ res });
    } catch (error) {
      setIsLoading(false);
      console.log("Error occour in AddPackages Component");
      console.log(error);
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="include"
                label="Includes"
                name="include"
                type="text"
                value={formData.include}
                onChange={handleChange}
              />
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
              <FormControl>
                <TextField
                  accept="image/*"
                  margin="normal"
                  required
                  fullWidth
                  id="image"
                  label="pkgImage"
                  name="pkgImage"
                  type="file"
                  value={formData.image}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  accept="image/*"
                  margin="normal"
                  required
                  fullWidth
                  id="BannerImage"
                  label="BannerImage"
                  name="BannerImage"
                  type="file"
                  value={formData.BannerImage}
                  onChange={handleChange}
                />
              </FormControl>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={IsLoading}
                  onClick={handleSubmit}
                  startIcon={
                    IsLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      ""
                    )
                  }
                >
                  {IsLoading ? "Submit" : "Submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPackages;
