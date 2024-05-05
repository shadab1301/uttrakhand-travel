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
import CircularProgress from "@mui/material/CircularProgress";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AddFileController } from "../utils/fetchController/AddFileController";
import { toast, ToastContainer } from "react-toastify";

const AddPackages = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  fetchData,
  data = null,
  id = null,
  isEditing=false
}) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    numbersOfDay: "",
    description: "",
    isRecommendPackages: false,
    isTopPackages: false,
    isShowInHeader: false,
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
      const PayloadData = new FormData();
     image && PayloadData.append("pkgImage", image);
     BannerImage && PayloadData.append("BannerImage", BannerImage);
      PayloadData.append("title", formData.title);
      PayloadData.append("subTitle", formData.subTitle);
       PayloadData.append("numbersOfDay", formData.numbersOfDay);
       PayloadData.append("description", formData.description);
    //  formData.isRecommendPackages &&
    //    PayloadData.append("isRecommendPackages", formData.isRecommendPackages);
    //  formData.isTopPackages &&
    //    PayloadData.append("isTopPackages", formData.isTopPackages);
    //  formData.isShowInHeader &&
    //    PayloadData.append("isShowInHeader", formData.isShowInHeader);
     formData.include && PayloadData.append("include", formData.include);

     let res;
     if (!isEditing) {
       res = await AddFileController("/package", "POST", PayloadData);
     } else {
       res = await AddFileController(
         `/package/${data.id}`,
         "PATCH",
         PayloadData
       );
     }
      
      if (res.statusCode === 200) {
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

  useEffect(() => {
    if (id) {
      const title = data && data.id ? data.Title : "";
      const numbersOfDay = data && data.id ? data["No of Days"] : "";
      const description = data && data.id ? data["Description"] : "";
      const include = data && data.id ? data["Includes"] : "";
      const subTitle = data && data.id ? data["Sub Title"] : "";
      setFormData({
        ...formData,
        title,
        description,
        numbersOfDay,
        include,
        subTitle,
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
                Add Packages
              </Typography>
              <Typography sx={{ cursor: "pointer" }}>
                <RxCrossCircled size={32} onClick={handleClose} />
              </Typography>
            </Stack>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required={true}
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
                label="Sub Title"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required={true}
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
                required={true}
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
                required={true}
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

              <Stack direction="row" spacing={2}>
                <FormControl>
                  <TextField
                    accept="image/*"
                    margin="normal"
                    required={data ? false : true}
                    fullWidth
                    id="image"
                    label="pkgImage"
                    name="pkgImage"
                    type="file"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </FormControl>
                {data && (
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ margin: "30px 0px 20px 0px" }}
                  >
                    <img
                      src={data["Image"]}
                      style={{
                        marginTop: "10px",
                        height: "50px",
                        width: "100px",
                        display: "block",
                      }}
                      alt="img"
                      srcset=""
                    />
                  </Stack>
                )}
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <TextField
                    accept="image/*"
                    margin="normal"
                    required={data ? false : true}
                    fullWidth
                    id="BannerImage"
                    label="BannerImage"
                    name="BannerImage"
                    type="file"
                    value={formData.BannerImage}
                    onChange={handleChange}
                  />
                </FormControl>
                {data && (
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ margin: "30px 0px 20px 0px" }}
                  >
                    <img
                      src={data["Banner Image"]}
                      style={{
                        marginTop: "10px",
                        height: "50px",
                        width: "100px",
                        display: "block",
                      }}
                      alt="img"
                      srcset=""
                    />
                  </Stack>
                )}
              </Stack>

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
