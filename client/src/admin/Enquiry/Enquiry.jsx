import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import MasterTable from "../../Table/MasterTable";
import axios from "axios";
import { fetchController } from "../../utils/fetchController/fetchController";

const Enquiry = () => {
  const [open, setOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState([{}]);
  const [column, setColumn] = useState([
    "SN0",
    "Name",
    "Mobile no",
    "Email",
    "Type",
    "Message",
    "Status",
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
      setEnquiryData(formattedData);
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
            Enquiry
          </Typography>
        </Stack>
      </>
      <MasterTable tableData={enquiryData} column={column} table="enquiry" />
    </>
  );
};

export default Enquiry;
