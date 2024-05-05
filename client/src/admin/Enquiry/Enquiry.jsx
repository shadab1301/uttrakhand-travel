import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import MasterTable from "../../Table/MasterTable";
import axios from "axios";
import { fetchController } from "../../utils/fetchController/fetchController";

const Enquiry = () => {
  const [open, setOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState([{}]);

const [column, setColumn] = useState([
  { name: "sno", value: "SN0" },
  { name: "Name", value: "Name" },
  { name: "Mobile_no", value: "Mobile no" },
  { name: "Email", value: "Email" },
  { name: "Type", value: "Type" },
  { name: "Message", value: "Message" },
  // "Status",
]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loadData = async () => {
    try {
      const res = await fetchController("/enquery", "GET");

      console.log(res.data);
      const formattedData = res.data.map((val, index) => {
        return {
          id: val.id,
          ["SN0"]: index + 1,
          ["Name"]: val.feminine + " " + val.first_name + " " + val.last_name,
          ["Mobile no"]: val.mobile_number,
          ["Email"]: val.email,
          ["Type"]: val.enquery_type,
          ["Message"]: val.message,
          // ["Status"]: val.status,
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
      <MasterTable
        loadData={loadData}
        tableData={enquiryData}
        column={column}
        table="enquiry"
      />
    </>
  );
};

export default Enquiry;
