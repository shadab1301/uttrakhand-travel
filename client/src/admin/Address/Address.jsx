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
    // debugger
    try {
      const res = await fetchController("/package", "GET");

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
      
      <AddAddress
        isOpen={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        size={"md"}
      />
      <MasterTable tableData={packagesData} column={column} table="address" />
    </>
  );
};

export default Address;
