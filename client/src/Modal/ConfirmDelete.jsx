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

const ConfirmDelete = ({
  handleOpen,
  handleClose,
  isOpen,
  size,
  handleConfirmDelete,
  fetchData,
}) => {
  const [loading, IsLoading] = useState(false);

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
            p: 1,
            width: size === "sm" ? 380 : size === "md" ? 380 : 380,
            maxWidth: "100%",
            border: "none",
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
                Are you sure, you want to Delete?
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="end"
              style={{ width: "100%", marginTop: "20px" }}
              gap={2}
            >
              <Button variant="contained" color="primary" onClick={handleClose}>
                No
              </Button>
              <Button
                variant="contained"
                color="primary"
                //   disabled={IsLoading}
                  onClick={handleConfirmDelete}
              >
                Yes
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmDelete;
