import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import MasterTable from "../../Table/MasterTable";
import AddTestimonial from './../../Modal/AddTestimonial';
import { fetchController } from "../../utils/fetchController/fetchController";

const Testimonial = () => {
  const [open, setOpen] = useState(false);
  const [packagesData, setPackagesData] = useState([{}]);

    const [column, setColumn] = useState([
      { name: "sno", value: "SN0" },
      { name: "Customer name", value: "Customer name" },
      { name: "Description", value: "Description" },
      { name: "Image", value: "Image" },
    ]);
  const handleOpen = () => {
    console.log({ handleOpen });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loadData = async () => {
    try {
      const res = await fetchController("/testimonial", "GET");

      console.log(res.data);
      const formattedData = res.data.map((val, index) => {
        return {
          id: val.id,
          ["SN0"]: index + 1,
          ["Customer name"]: val.customer_name,
          Description: val.description,
          ["Image"]: val.image,
        };
      });
      setPackagesData(formattedData);
    } catch (error) {
      console.log("Error occour while fetching Testimonial");
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        p={2}
      >
        <Typography
          //   sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Testimonial
        </Typography>

        <Button
          variant="contained"
          style={{ width: "auto" }}
          onClick={handleOpen}
          isOpen={open}
        >
          Add Testimonial
        </Button>
      </Stack>

      <MasterTable
        tableData={packagesData}
        column={column}
        table="testimonial"
        loadData={loadData}
      />
      <AddTestimonial
        isOpen={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        size={"md"}
        fetchData={loadData}
      />
    </>
  );
};

export default Testimonial;
