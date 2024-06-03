import React,{ useEffect, useState } from 'react';
import { Button, Stack, Typography } from "@mui/material";
import AddPackages from '../../Modal/AddPackages';
import MasterTable from '../../Table/MasterTable';
import axios from 'axios';
import { fetchController } from '../../utils/fetchController/fetchController';
import { toast } from 'react-toastify';


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
    { name: "Destination", value: "Destination" },
    { name: "isShowInHeader,", value: "is Show In Header" },
    { name: "isTopPackages,", value: "is Top Packages" },
    { name: "isRecommendPackages", value: "is Recommend Packages" },

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
    //  const res =await fetchController("/package", "GET");
    //  const destination = await fetchController("/destination","GET");
   const res = await Promise.all([
     fetchController("/package", "GET"),
     fetchController("/destination", "GET"),
   ]);

// console.log("res_AAA",res)
// return false

     const formattedData = res[0].data.map((val,index)=>{
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
        ["is Show In Header"]: val.isShowInHeader,
        ["is Top Packages"]: val.isTopPackages,
        ["is Recommend Packages"]: val.isRecommendPackages,
        ["Destination"]: res[1].data
          .filter((des, i) => val.destination.includes(des._id))
          .map((destination) => {
            return { value: destination.cityName, label: destination.cityName };
          }),
        ["DestinationString"]: res[1].data
          .filter((des, i) => val.destination.includes(des._id))
          .map((destination) => {
            return  destination.cityName
          }).join(","),
      };
     })
     console.log({ formattedData });
      setPachagesData(formattedData);
   } catch (error) {
    console.log("Error occour while fetching Packages");
    console.log(error)
   }
  }



  const handleClickOnCheckBox = async (e, id) => {
    const { name, checked } = e.target;
    console.log({ name, checked, id });
    const countCheckedRow = packagesData.filter(
      (val, i) => val[name] === true || val[name] === "true"
    );
    // console.log({ countCheckedRow });
    // console.log({
    //   condition:
    //     (!checked && countCheckedRow.length == 4) || countCheckedRow.length < 4,
    // });
    // return false
    if (
      (!checked && countCheckedRow.length == 4) ||
      countCheckedRow.length < 4
    ) {
      const filterData = packagesData.map((val, i) =>
        val.id === id ? { ...val, [name]: checked } : val
      );
      setPachagesData(filterData);

      const payload = { [name.split(" ").join("")]: checked };
      let res = await fetchController(`/package/${id}`, "PATCH", payload);
      console.log(res);
      console.log(res.statusCode);
      if (res.statusCode === 200) {
        loadData()
        toast.success(res.message, {
          position: "top-right",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
        });
      }
    } else {
      console.log("Maximum four check boxex are allowed to check at a time.");
      toast.error("Maximum four check boxex are allowed to check at a time.", {
        position: "top-right",
      });
    }
  };



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
        handleClickOnCheckBox={handleClickOnCheckBox}
      />
    </>
  );
}

export default Packages