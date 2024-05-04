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
import CircularProgress from "@mui/material/CircularProgress";
import { RxCrossCircled } from "react-icons/rx";
import { AddFileController } from "../utils/fetchController/AddFileController";
import { toast, ToastContainer } from "react-toastify";

const AddTestimonial = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  loadData,
  data = null,
  id = null,
  isEditing = false,
}) => {
  console.log({data});
  const [formData, setFormData] = useState({
    customer_name: "",
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
      data.append("customer_name", formData.customer_name);
      data.append("description", formData.description);

      const res = await AddFileController("/testimonial", "POST", data);
      if (res.status === 201) {
        loadData();
        handleClose();
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
      console.log("Error occour in Add Testimonial Component");
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



  //  useEffect(() => {
  //    if (id) {
  //      const customer_name = data && data.id ? data.Title : "";
  //      const description = data && data.id ? data["Customer name"] : "";

  //      setFormData({
  //        ...formData,
  //        title,
  //        description,
  //      });
  //    }
  //  }, [id]);
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
                Add Testimonial
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
                id="customer_name"
                label="Customer name"
                name="customer_name"
                value={formData.customer_name}
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
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button> */}

              <Box>
                <Button
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={IsLoading}
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

export default AddTestimonial;
