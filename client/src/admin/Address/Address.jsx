import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddAddress from "../../Modal/AddAddress";
import MasterTable from "../../Table/MasterTable";

const Address = () => {
  const [open, setOpen] = useState(false);
  const [packagesData, setPachagesData] = useState([{}]);
  const [column, setColumn] = useState([
    "SN0",
    "Primary number",
    "Alternate Number",
    "Email",
    "Website url",
    "Map"
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
      const res = await fetchController("/address", "GET");

      console.log(res.data);
      const formattedData = res.data.map((val, index) => {
        return {
          id: val._id,
          ["SN0"]: index + 1,
          Title: val.title,
          Description: val.description,
          ["No of Days"]: val.numbersOfDay,
          ["Image"]: val.pkgImage,
        };
      });
      setPachagesData(formattedData);
    } catch (error) {
      console.log("Error occour while fetching Packages");
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
          Address
        </Typography>
      </Stack>
      {/* <AddAddress
        isOpen={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        size={"md"}
      /> */}
      <MasterTable tableData={packagesData} column={column} table="address" />
    </>
  );
};

export default Address;
