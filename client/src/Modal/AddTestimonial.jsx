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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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


 const userSchema = z.object({
   customer_name: z.string().min(3),
   description: z.string().min(10),
 });
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      customer_name: "",
      description: "",
    },
    resolver: zodResolver(userSchema),
  });



  // const [formData, setFormData] = useState({
  //   customer_name: "",
  //   description: "",
  // });
  const [image, setImage] = useState(null);
    const [fileError, setFileError] = useState(null);

    const onSubmit = async (data) => {
      if (!isEditing && !image) {
        !image &&
          setFileError({
            ...fileError,
            ["image"]: "Image is required.",
          });

        return false;
      }
      if (fileError?.image) {
        return false;
      }
      try {
        const payloadData = new FormData();



        image && payloadData.append("image", image);

        payloadData.append("customer_name", data.customer_name);
        payloadData.append("description", data.description);





        const res = await AddFileController(
          "/testimonial",
          "POST",
          payloadData
        );

        if (res.status === 201) {
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
          reset({
            title: "",
            description: "",
          });
        }
        console.log({ res });
      } catch (error) {
        console.log("Error occour in Add testimonial Component");
        console.log(error);
        setError("root", {
          message: error.message,
        });
        toast.success("Something went wrong ...", {
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
      }
    };  

  const handleOnFileChange = (e) => {
    setFileError(null);
    const size = e.target.files[0].size;
    const name = e.target.files[0].name;
    if (!["png", "jpg", "jpeg"].includes(name.split(".").pop().toLowerCase())) {
      setFileError({
        ...fileError,
        [e.target.name]: "Only png, jpg or jpeg are allowed",
      });
      return false;
    }

    if (size >= 5 * 1024 * 1024) {
      setFileError({
        ...fileError,
        [e.target.name]: "Maximum 5mb size are allowed to upload",
      });
      return false;
    }

    setImage(e.target.files[0]);
    setFileError(null);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "image") {
  //     setImage(e.target.files[0]);
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const data = new FormData();
  //     data.append("image", image);
  //     data.append("customer_name", formData.customer_name);
  //     data.append("description", formData.description);

  //     const res = await AddFileController("/testimonial", "POST", data);
  //     if (res.status === 201) {
  //       loadData();
  //       handleClose();
  //       toast.success(res.message, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });

  //       setFormData({
  //         title: "",
  //         subTitle: "",
  //         numbersOfDay: "",
  //         description: "",
  //         isRecommendPackages: "0",
  //         isTopPackages: "0",
  //         isShowInHeader: "0",
  //         include: "test",
  //       });
  //     }
  //     console.log({ res });
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log("Error occour in Add Testimonial Component");
  //     console.log(error);
  //     toast.success(res.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };



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

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <TextField
                margin="normal"
                fullWidth
                id="customer_name"
                label="Customer name"
                {...register("customer_name", { required: true })}
              />
              {errors.customer_name && (
                <span
                  className="text-danger"
                  style={{ padding: "0px 0px 10px 0px" }}
                >
                  {errors.customer_name.message}
                </span>
              )}
              <TextField
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span
                  className="text-danger"
                  style={{ padding: "0px 0px 10px 0px" }}
                >
                  {errors.description.message}
                </span>
              )}
              <TextField
                margin="normal"
                fullWidth
                id="image"
                label=""
                name="image"
                type="file"
                onChange={handleOnFileChange}
              />
              {fileError?.image && (
                <div className="text-danger">{fileError.image}</div>
              )}
              <Box>
                <Button
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      ""
                    )
                  }
                >
                  Submit
                </Button>
              </Box>
              {errors.root && (
                <div className="text-danger" style={{ color: "red" }}>
                  {errors.root.message}
                </div>
              )}
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTestimonial;
