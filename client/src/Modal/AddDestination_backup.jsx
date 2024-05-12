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
  console.log("_______data______");
  console.log({ data });
  console.log({ AAAA: data && data["City Name"] });
  // console.log({ data: data["City Name"] });
  const [formData, setFormData] = useState({
    cityName: data ? data["City Name"] : "",
    isIncludeInNavbar: "0",
    isTopVisitPlace: "0",
  });
  const [itemTobeEdited, setItemTobeEdited] = useState(id);
  const [IsLoading, setIsLoading] = useState(false);
  const [cityImage, setCityImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cityImage") {
      setCityImage(e.target.files[0]);
    } else if (name === "isTopVisitPlace" || name === "isIncludeInNavbar") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.checked,
      }));
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
      data.append("cityImage", cityImage);
      data.append("cityName", formData.cityName);
      data.append("isIncludeInNavbar", formData.isIncludeInNavbar);
      data.append("isTopVisitPlace", formData.isTopVisitPlace);

      const res = await AddFileController("/destination", "POST", data);
      if (res.statusCode === 201) {
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

  const fetchDataFromId = async () => {
    // const res = await fetchController(`/destination/${id}`, "GET");
    // console.log({ res });
  };
  useEffect(() => {
    //  debugger;
    console.log("_______id______1111");
    console.log({ itemTobeEdited });
    if (data && data.id) {
      console.log({ insideUseffect: "insideUseffect" });
      fetchDataFromId();
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
                {isEditing ? "Edit Destination" : "Add Destination"}
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
                id="cityName"
                label="cityName"
                name="cityName"
                value={formData.cityName}
                onChange={handleChange}
              />
              <TextField
                accept="image/*"
                margin="normal"
                required
                fullWidth
                id="cityImage"
                label="City Image"
                name="cityImage"
                type="file"
                value={formData.cityImage}
                onChange={handleChange}
              />

              {/* <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    onChange={handleChange}
                    name="isIncludeInNavbar"
                  />
                }
                label="Is include in navbar"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    onChange={handleChange}
                    name="isTopVisitPlace"
                  />
                }
                label="Is top visit place"
              /> */}

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

              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={IsLoading}
                  // onClick={handleSubmit}
                  startIcon={
                    IsLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      ""
                    )
                  }
                >
                  {IsLoading ? (isEditing ? "Update" : "Submit") : "Submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddDestination;
