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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const userSchema = z.object({
    address: z.string().min(3),
    map_iframe: z.string().min(3),
    website_url: z.string().min(10),
    email: z.string().email(),
    alternateNumber: z.string().min(10).max(10),
    primaryNumber: z.string().min(10).max(10),
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
      address: "",
      map_iframe: "",
      website_url: "",
      email: "",
      alternateNumber: null,
      primaryNumber: null,
    },
    resolver: zodResolver(userSchema),
  });
  // const [formData, setFormData] = useState({
  //   address: "",
  //   map_iframe: "",
  //   website_url: "",
  //   email: "",
  //   alternateNumber: "",
  //   primaryNumber: "",
  // });

  const onSubmit = async (data) => {
    try {
      const payloadData = {
        address: data.address,
        map_location: data.map_iframe,
        WebUrl: data.website_url,
        email: data.email,
        alternate_number: Number(data.alternateNumber),
        primary_number: Number(data.primaryNumber),
      };

      let res;
      if (!isEditing) {
        res = await fetchController("/address", "POST", payloadData);
      } else {
        res = await fetchController(`/address/${id}`, "PUT", payloadData);
      }

      if (res.statusCode === 200 || res.status === 200) {
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
          address: "",
          map_iframe: "",
          website_url: "",
          email: "",
          alternateNumber: null,
          primaryNumber: null,
        });
      }
      console.log({ res });
    } catch (error) {
      console.log("Error occour in AddPackages Component");
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const payloadData = {
  //       address: formData.address,
  //       map_location: formData.map_iframe,
  //       WebUrl: formData.website_url,
  //       email: formData.email,
  //       alternate_number: Number(formData.alternateNumber),
  //       primary_number: Number(formData.primaryNumber),
  //     };
  //     // ;
  //     let res;
  //     if (!isEditing) {
  //       res = await fetchController("/address", "POST", payloadData);
  //     } else {
  //       res = await fetchController(`/address/${data.id}`, "PUT", payloadData);
  //     }
  //     console.log(res);
  //     console.log(res.status);
  //     if (res.status === 200) {
  //       fetchData();
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
  //         address: "",
  //         map_iframe: "",
  //         website_url: "",
  //         email: "",
  //         alternateNumber: "",
  //         primaryNumber: "",
  //       });
  //     }
  //   } catch (error) {
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
  //     // setIsLoading(false);
  //   }
  // };
  useEffect(() => {
    if (id) {
      console.log("Inside Useeefect");
      const address = data && data.id ? data.Address : "";
      const primaryNumber = data && data.id ? data["Primary number"] : null;
      const email = data && data.id ? data["Email"] : "";
      const map_iframe = data && data.id ? data["Map"] : "";
      const alternateNumber = data && data.id ? data["Alternate number"] : null;
      const website_url = data && data.id ? data["Website url"] : null;
    

       const defaultVal = {
         address,
         primaryNumber,
         email,
         map_iframe,
         alternateNumber,
         website_url,
       };
       reset(defaultVal);
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="normal"
                // required
                fullWidth
                id="address"
                label="Address"
                // name="address"
                // value={formData.address}
                // onChange={handleChange}
                {...register("address", { required: true })}
              />
              {errors.address && (
                <div className="text-danger">{errors.address.message}</div>
              )}
              <Stack
                direction="row"
                width={"100%"}
                spacing={1}
                justifyContent={"space-between"}
              >
                <Stack
                  direction="column"
                  // width={"100%"}
                  spacing={1}
                  justifyContent={"space-between"}
                >
                  <TextField
                    margin="normal"
                    // required
                    fullWidth
                    id="primaryNumber"
                    label="Primary Number"
                    name="primaryNumber"
                    type="number"
                    // value={formData.primaryNumber}
                    // onChange={handleChange}
                    {...register("primaryNumber", { required: true })}
                  />
                  {errors.primaryNumber && (
                    <div className="text-danger">
                      {errors.primaryNumber.message}
                    </div>
                  )}
                </Stack>
                <Stack
                  direction="column"
                  // width={"100%"}
                  spacing={1}
                  justifyContent={"space-between"}
                >
                  <TextField
                    margin="normal"
                    fullWidth
                    id="alternateNumber"
                    label="Alternate Number"
                    type="number"
                    {...register("alternateNumber", { required: true })}
                  />
                  {errors.alternateNumber && (
                    <div className="text-danger">
                      {errors.alternateNumber.message}
                    </div>
                  )}
                </Stack>
              </Stack>

              <TextField
                margin="normal"
                // required
                fullWidth
                id="email"
                label="Email"
                // name="email"
                type="email"
                // value={formData.email}
                // onChange={handleChange}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
              <TextField
                margin="normal"
                // required
                fullWidth
                id="website_url"
                label="Website Url"
                // name="website_url"
                type="text"
                // value={formData.website_url}
                // onChange={handleChange}
                {...register("website_url", { required: true })}
              />
              {errors.website_url && (
                <div className="text-danger">{errors.website_url.message}</div>
              )}
              <TextField
                margin="normal"
                // required
                fullWidth
                id="map"
                label="Map (Iframe)"
                // name="map_iframe"
                type="text"
                // value={formData.map_iframe}
                // onChange={handleChange}
                {...register("map_iframe", { required: true })}
              />
              {errors.map_iframe && (
                <div className="text-danger">{errors.map_iframe.message}</div>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
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

export default AddAddress;
