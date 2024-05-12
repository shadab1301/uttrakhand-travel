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
import { toast, ToastContainer } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";
import { AddFileController } from "../utils/fetchController/AddFileController";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddGallery = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  fetchData,
  data = null,
  id = null,
  isEditing = false,
}) => {
  const userSchema = z.object({
    title: z.string().min(3),
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
      title: "",
      description: "",
    },
    resolver: zodResolver(userSchema),
  });
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  // });
  const [image, setImage] = useState(null);
  const [fileError, setFileError] = useState(null);
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

      payloadData.append("title", data.title);
      payloadData.append("description", data.description);

      let res;
      if (!isEditing) {
        res = await AddFileController("/gallery", "POST", payloadData);
      } else {
        res = await AddFileController(`/gallery/${id}`, "PATCH", payloadData);
      }

      if (
        [200, 201].includes(res?.statusCode) ||
        [200, 201].includes(res?.status)
      ) {
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
        reset({
          title: "",
          description: "",
        });
      }
      console.log({ res });
    } catch (error) {
      console.log("Error occour in Add Gallery Component");
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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const payloadData = new FormData();
  //     image && payloadData.append("image", image);
  //     payloadData.append("title", formData.title);
  //     payloadData.append("description", formData.description);

  //     let res;
  //     if (!isEditing) {
  //       res = await AddFileController("/gallery", "POST", payloadData);
  //     } else {
  //       res = await AddFileController(
  //         `/gallery/${data.id}`,
  //         "PATCH",
  //         payloadData
  //       );
  //     }

  //     if (res.statusCode === 200) {
  //       loadData();
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
  //       handleClose();
  //       setFormData({
  //         cityName: "",
  //         isIncludeInNavbar: "0",
  //         isTopVisitPlace: "0",
  //       });
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log("Error occour in AddDestination Component");
  //     console.log(error);
  //     toast.error("Error occour in AddDestination Component", {
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

  useEffect(() => {
    if (id) {
      const prevtitle = data && data.id ? data.Title : "";
      const prevdesc = data && data.id ? data["Description"] : "";
      const defaultVal = {
        title: prevtitle,
        description: prevdesc,
      };
      reset(defaultVal);
    }
  }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     const title = data && data.id ? data.Title : "";
  //     const description = data && data.id ? data["Description"] : "";

  //     setFormData({
  //       ...formData,
  //       title,
  //       description,
  //     });
  //   }
  // }, [id]);
  // watch("title");
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
                {isEditing ? "Edit Gallery" : "Add Gallery"}
              </Typography>
              <Typography sx={{ cursor: "pointer" }}>
                <RxCrossCircled size={32} onClick={handleClose} />
              </Typography>
            </Stack>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <TextField
                margin="normal"
                // required
                fullWidth
                id="title"
                label="Title"
                // name="title"
                // value={formData.title}
                // onChange={handleChange}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span
                  className="text-danger"
                  style={{ padding: "0px 0px 10px 0px" }}
                >
                  {errors.title.message}
                </span>
              )}
              <TextField
                margin="normal"
                // required
                fullWidth
                id="description"
                label="Description"
                // name="description"
                // value={formData.description}
                // onChange={handleChange}
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

              <Stack
                direction="row"
                spacing={2}
                justifyContent={"space-between"}
                mt={2}
              >
                <TextField
                  margin="normal"
                  // required={!isEditing ? true : false}
                  fullWidth
                  id="image"
                  label=""
                  name="image"
                  type="file"
                  // value={formData.image}
                  onChange={handleOnFileChange}
                />
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
              {fileError?.image && (
                <div className="text-danger">{fileError.image}</div>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isEditing ? "Update" : "Submit"}
              </Button>

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

export default AddGallery;
