import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Container,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { AddFileController } from "../utils/fetchController/AddFileController";
import { fetchController } from "../utils/fetchController/fetchController";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const AddDestination = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  fetchData,
  id = null,
  data = null,
  isEditing = false,
}) => {
  // const [formData, setFormData] = useState({
  //   cityName: "",
  //   isIncludeInNavbar: "0",
  //   isTopVisitPlace: "0",
  // });



const userSchema = z.object({
  cityName: z.string().min(3),
});
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors,isSubmitting },
  } = useForm({
    defaultValues: {
      cityName: "",
    },
    resolver: zodResolver(userSchema),
  });
  const [cityImage, setCityImage] = useState(null);
  const [fileError, setFileError] = useState(null);


const onSubmit = async (data) => {
  if (!isEditing && !cityImage ) {
    !cityImage &&
      setFileError({
        ...fileError,
        ["pkgImage"]: "City Image is required.",
      });

    return false;
  }
  if (fileError?.cityImage ) {
    return false;
  }
  try {
    const PayloadData = new FormData();
    cityImage && PayloadData.append("cityImage", cityImage);
    PayloadData.append("cityName", data.cityName);

    let res;
    if (!isEditing) {
      res = await AddFileController("/destination", "POST", PayloadData);
    } else {
      res = await AddFileController(`/destination/${id}`, "PATCH", PayloadData);
    }
          
    if (
      [200, 201].includes(res.statusCode) ||
      [200, 201].includes(res.status)
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
        subTitle: "",
        numbersOfDay: "",
        description: "",
        include: "",
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


    setCityImage(e.target.files[0]);


  setFileError(null);
};
useEffect(() => {
  if (id) {
  const prevCityName = data && data.id ? data["City Name"] : "";
    const defaultVal = {
      cityName: prevCityName,
    };
    reset(defaultVal);
  }
}, [id]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "cityImage") {
  //     setCityImage(e.target.files[0]);
  //   } else if (name === "isTopVisitPlace" || name === "isIncludeInNavbar") {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: e.target.checked,
  //     }));
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
  //     const payloadData = new FormData();
  //     cityImage && payloadData.append("cityImage", cityImage);
  //     payloadData.append("cityName", formData.cityName);
  //     payloadData.append("isIncludeInNavbar", false);
  //     payloadData.append("isTopVisitPlace", false);

  //     let res;
  //     if (!isEditing) {
  //       res = await AddFileController("/destination", "POST", payloadData);
  //     } else {
  //       console.log({ id: data });
  //       res = await AddFileController(
  //         `/destination/${data.id}`,
  //         "PATCH",
  //         payloadData
  //       );
  //     }
  //     // console.log({ statusCode: res.statusCode });
  //     if (
  //       [200, 201].includes(res.statusCode) ||
  //       [200, 201].includes(res.status)
  //     ) {
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

  // useEffect(() => {
  //   const prevCityName = data && data.id ? data["City Name"] : "";
  //   if (id) {
  //     setFormData({ ...formData, ["cityName"]: prevCityName });
  //   }
  // }, [id]);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size={"md"}
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
                {isEditing ? "Edit Destination" : "Add Destination"}
              </Typography>
              <Typography sx={{ cursor: "pointer" }}>
                <RxCrossCircled size={32} onClick={handleClose} />
              </Typography>
            </Stack>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <TextField
                margin="normal"
                fullWidth
                id="cityName"
                label="City Name"
                // name="cityName"
                // value={formData.cityName}
                // onChange={handleChange}
                {...register("cityName", { required: true })}
              />
              {errors.cityName && (
                <span
                  className="text-danger"
                  style={{ padding: "0px 0px 10px 0px" }}
                >
                  {errors.cityName.message}
                </span>
              )}
              <Stack direction="row" spacing={2} mt={3}>
                <TextField
                  accept="image/*"
                  margin="normal"
                  // required={!isEditing ? true : false}
                  fullWidth
                  id="cityImage"
                  label="City Image"
                  name="cityImage"
                  type="file"
                  onChange={handleOnFileChange}
                />
                {data && (
                  <Box sx={{ margin: "20px 0px" }}>
                    <img
                      src={data["City Image"]}
                      style={{ height: "50px", width: "100px" }}
                      alt="img"
                      srcset=""
                    />
                  </Box>
                )}
              </Stack>
              {fileError?.cityImage && (
                <div className="text-danger">{fileError.cityImage}</div>
              )}

              <Box style={{ marginTop: "20px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  // onClick={handleSubmit}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      ""
                    )
                  }
                >
                  {isEditing ? "Update" : "Submit"}
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

export default AddDestination;
