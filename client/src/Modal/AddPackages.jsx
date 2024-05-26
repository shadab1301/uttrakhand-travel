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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "react-select";
import { fetchController } from "../utils/fetchController/fetchController";


const AddPackages = ({
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
    subTitle: z.string().min(3),
    numbersOfDay: z.string().min(1),
    description: z.string().min(10),
    include: z.string().min(10),
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
      subTitle: "",
      numbersOfDay: null,
      description: "",
      include: "",
    },
    resolver: zodResolver(userSchema),
  });
  const [destinationCover, setDestinationCover] = React.useState([]);
  const [destinationData, setDestinationData] = useState([]);

  const [image, setImage] = useState(null);
  const [BannerImage, setBannerImage] = useState(null);
  const [fileError, setFileError] = useState(null);

  const onSubmit = async (data) => {
    if (!isEditing && (!image || !BannerImage)) {
      !image &&
        setFileError({
          ...fileError,
          ["pkgImage"]: "Packages Images is required.",
        });

      !BannerImage &&
        setFileError({
          ...fileError,
          ["BannerImage"]: "Banner Images is required.",
        });
      return false;
    }
    if (fileError?.pkgImage || fileError?.BannerImage) {
      return false;
    }
    try {
      const PayloadData = new FormData();
      image && PayloadData.append("pkgImage", image);
      BannerImage && PayloadData.append("BannerImage", BannerImage);
      PayloadData.append("title", data.title);
      PayloadData.append("subTitle", data.subTitle);
      PayloadData.append("numbersOfDay", data.numbersOfDay);
      PayloadData.append("description", data.description);
      //  formData.isRecommendPackages &&
      //    PayloadData.append("isRecommendPackages", formData.isRecommendPackages);
      //  formData.isTopPackages &&
      //    PayloadData.append("isTopPackages", formData.isTopPackages);
      //  formData.isShowInHeader &&
      //    PayloadData.append("isShowInHeader", formData.isShowInHeader);
      PayloadData.append("include", data.include);
      PayloadData.append("destinationCover", JSON.stringify(destinationCover));

      let res;
      if (!isEditing) {
        res = await AddFileController("/package", "POST", PayloadData);
      } else {
        res = await AddFileController(`/package/${id}`, "PATCH", PayloadData);
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
        //  setFormData({
        //    title: "",
        //    subTitle: "",
        //    numbersOfDay: "",
        //    description: "",
        //    isRecommendPackages: "0",
        //    isTopPackages: "0",
        //    isShowInHeader: "0",
        //    include: "test",
        //  });

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

    if (e.target.name === "pkgImage") {
      setImage(e.target.files[0]);
    } else {
      setBannerImage(e.target.files[0]);
    }

    setFileError(null);
    console.log({ fileError });
  };
  useEffect(() => {
    if (id) {
      const title1 = data && data.id ? data.Title : "";
      const numbersOfDay1 = data && data.id ? data["No of Days"] : null;
      const description1 = data && data.id ? data["Description"] : "";
      const include1 = data && data.id ? data["Includes"] : "";
      const subTitle1 = data && data.id ? data["Sub Title"] : "";

      const defaultVal = {
        title: title1,
        subTitle: subTitle1,
        numbersOfDay: numbersOfDay1,
        description: description1,
        include: include1,
      };
      reset(defaultVal);
    }
  }, [id]);

  // const handleChangeOnMultipleSelect = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setDestinationCover(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const loadDestinationData = async () => {
    try {
      const res = await fetchController("/destination", "GET");

     const options=   res.data.map((val,index)=>{
          return { value: val.cityName, label: val.cityName };
        })

      setDestinationData(options);
    } catch (error) {
      console.log("Error occour while fetching Destination");
      console.log(error);
    }
  };
  useState(()=>{
    loadDestinationData()
  },[])
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
          overflow: "auto",
          maxHeight: "110vh", // Set dynamic max height
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
              {isEditing ? " Edit Packages" : " Add Packages"}
            </Typography>
            <Typography sx={{ cursor: "pointer" }}>
              <RxCrossCircled size={32} onClick={handleClose} />
            </Typography>
          </Stack>
          {/* <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            > */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              // required={true}
              fullWidth
              id="title"
              label="Title"
              // value={formData.title}
              // onChange={handleChange}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <div className="text-danger">{errors.title.message}</div>
            )}
            <TextField
              margin="normal"
              // required
              fullWidth
              id="subTitle"
              label="Sub Title"
              // value={formData.subTitle}
              // onChange={handleChange}

              {...register("subTitle", { required: true })}
            />
            {errors.subTitle && (
              <div className="text-danger">{errors.subTitle.message}</div>
            )}
            <TextField
              margin="normal"
              // required={true}
              fullWidth
              id="numbersOfDay"
              label="No Of Day"
              type="text"
              // value={formData.numbersOfDay}
              // onChange={handleChange}
              {...register("numbersOfDay", { required: true })}
            />
            {errors.numbersOfDay && (
              <div className="text-danger">{errors.numbersOfDay.message}</div>
            )}

            {/* <FormControl sx={{ my: 1, maxWidth: "100%",height:"300px" }}>
                <InputLabel id="demo-multiple-name-label">
                  Destination Cover
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={destinationCover}
                  onChange={handleChangeOnMultipleSelect}
                  input={<OutlinedInput label="Destination Cover" />}
                  MenuProps={MenuProps}
                  required
                >
                  {console.log({ destinationData })}
                  {destinationData.map(({ cityName }) => (
                    <MenuItem
                      key={cityName}
                      value={cityName}
                      // style={getStyles(name, destinationCover, theme)}
                    >
                      {cityName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
            <div
              className="destination-cover-container"
              style={{
                marginTop: "10px",
              }}
            >
              <Select
                // defaultValue={[destinationData[2], destinationData[3]]}
                placeholder={"Destination Cover"}
                isMulti
                name="colors"
                options={destinationData}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setDestinationCover(e)}
              />
            </div>
            <TextField
              margin="normal"
              // required={true}
              fullWidth
              id="include"
              label="Includes"
              type="text"
              // value={formData.include}
              // onChange={handleChange}
              {...register("include", { required: true })}
            />
            {errors.include && (
              <div className="text-danger">{errors.include.message}</div>
            )}
            <div className="textarea-container" style={{ marginTop: "20px" }}>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "50px",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  border: "1px solid #D3D3D3",
                }} // Set minHeight to ensure it's not too small initially
                id="description"
                label="Description"
                placeholder="Description"
                onInput={(e) => {
                  e.target.style.height = "auto"; // Reset height to auto to allow it to grow
                  e.target.style.height = `${e.target.scrollHeight}px`; // Set height to match content
                }}
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <div className="text-danger">{errors.description.message}</div>
              )}
            </div>
            <Stack direction="row" spacing={2}>
              <FormControl>
                <TextField
                  accept="image/*"
                  margin="normal"
                  // required={data ? false : true}
                  fullWidth
                  id="image"
                  label="Packages Image"
                  name="pkgImage"
                  type="file"
                  // value={formData.image}
                  onChange={handleOnFileChange}
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
            {fileError?.pkgImage && (
              <div className="text-danger">{fileError.pkgImage}</div>
            )}
            <Stack direction="row" spacing={2}>
              <FormControl>
                <TextField
                  accept="image/*"
                  margin="normal"
                  // required={data ? false : true}
                  fullWidth
                  id="BannerImage"
                  label="Banner Image"
                  name="BannerImage"
                  type="file"
                  onChange={handleOnFileChange}
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
            {fileError?.BannerImage && (
              <div className="text-danger">{fileError.BannerImage}</div>
            )}
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={
                  false ? <CircularProgress size={20} color="inherit" /> : ""
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
  );
};

export default AddPackages;
