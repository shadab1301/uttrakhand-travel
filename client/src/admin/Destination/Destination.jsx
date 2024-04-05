import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddDestination from "../../Modal/AddDestination";
import MasterTable from "../../Table/MasterTable";
import { fetchController } from "../../utils/fetchController/fetchController";

const Destination = () => {
   const [open, setOpen] = useState(false);
   const [packagesData, setPachagesData] = useState([{}]);
   const [column, setColumn] = useState([
     "SN0",
     "cityName",
     "cityImage",
     "isIncludeInNavbar",
     "isTopVisitPlace",
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
       const res = await fetchController("/destination", "GET");

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
              Destination
            </Typography>

            <Button
              variant="contained"
              style={{ width: "auto" }}
              onClick={handleOpen}
              isOpen={open}
            >
              Add Destination
            </Button>
          </Stack>
          <AddDestination
            isOpen={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            size={"md"}
          />
        </>
        <MasterTable
          tableData={packagesData}
          column={column}
          table="destination"
        />
      </>
    </>
  );
};

export default Destination;
