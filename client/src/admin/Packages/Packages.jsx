import React,{ useEffect, useState } from 'react';
import { Button, Stack, Typography } from "@mui/material";
import AddPackages from '../../Modal/AddPackages';
import MasterTable from '../../Table/MasterTable';
import axios from 'axios';
import { fetchController } from '../../utils/fetchController/fetchController';


const Packages = () => {
    const [open, setOpen] = useState(false);
    const [packagesData,setPachagesData]=useState([{}])
    // const [column,setColumn]=useState(["SN0", "Title","Includes", "Description", "No of Days", "Image"])


  const [column, setColumn] = useState([
    { name: "sno", value: "SN0" },
    { name: "title", value: "Title" },
    { name: "subTitle", value: "Sub Title" },
    { name: "includes", value: "Includes" },
    { name: "description", value: "Description" },
    { name: "noOfDays", value: "No of Days" },
    { name: "image", value: "Image" },
    { name: "BannerImage", value: "Banner Image" },
  ]);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loadData=async()=>{
   try {
     const res =await fetchController("/package", "GET");
     const formattedData = res.data.map((val,index)=>{
      return {
        id: val._id,
        ["SN0"]: index + 1,
        Title: val.title,
        ["Sub Title"]: val.subTitle,
        Description: val.description,
        ["No of Days"]: val.numbersOfDay,
        ["Image"]: val.pkgImage,
        ["Banner Image"]: val.BannerImage,
        ["Includes"]: val.include,
      };
     })
      setPachagesData(formattedData);
   } catch (error) {
    console.log("Error occour while fetching Packages");
    console.log(error)
   }
  }

  useEffect(()=>{loadData()},[])



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
            Packages
          </Typography>

          <Button
            variant="contained"
            style={{ width: "auto" }}
            onClick={handleOpen}
            isOpen={open}
          >
            Add Package
          </Button>
        </Stack>
        <AddPackages
          isOpen={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          size={"md"}
          fetchData={loadData}
        />
      </>
      <MasterTable
        loadData={loadData}
        tableData={packagesData}
        column={column}
        table="packages"
      />


     
    </>
  );
}

export default Packages