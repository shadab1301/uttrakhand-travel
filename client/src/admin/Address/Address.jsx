import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddAddress from "../../Modal/AddAddress";
import MasterTable from "../../Table/MasterTable";
import { fetchController } from "../../utils/fetchController/fetchController";

const Address = () => {
  const [open, setOpen] = useState(false);
  const [packagesData, setPachagesData] = useState([{}]);

const [column, setColumn] = useState([
  { name: "sno", value: "SN0" },
  { name: "Primary_number", value: "Primary number" },
  { name: "address", value: "Address" },
  { name: "Email", value: "Email" },
  // { name: "Website url", value: "Website url" },
  { name: "Map", value: "Map" },
  // "Status",
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

      console.log({address:res.data});
      const formattedData = res.data.map((val, index) => {
        return {
          id: val.id,
          ["SN0"]: index + 1,
          ["Email"]: val.email,
          // ["Website url"]: val.description,
          ["Primary number"]: val.primary_number,
          ["Address"]: val.address,
          ["Map"]: val.map_location,
        };
      });
      console.log({ formattedData });
      setPachagesData(formattedData);
    } catch (error) {
      console.log("Error occour while fetching Address");
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
      <MasterTable
        tableData={packagesData}
        column={column}
        loadData={loadData}
        table="address"
      />
    </>
  );
};

export default Address;
