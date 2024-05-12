import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddDestination from "../../Modal/AddDestination";
import MasterTable from "../../Table/MasterTable";
import { fetchController } from "../../utils/fetchController/fetchController";
import { toast, ToastContainer } from "react-toastify";
const Destination = () => {
  const [open, setOpen] = useState(false);
  const [packagesData, setPachagesData] = useState([{}]);
  //  const [column, setColumn] = useState([
  //    "SN0",
  //    "City Name",
  //    "City Image",
  //    "is Include in Navbar",
  //    "is Top Visit Place",
  //  ]);

  const [column, setColumn] = useState([
    { name: "sno", value: "SN0" },
    { name: "cityName", value: "City Name" },
    { name: "CityImage", value: "City Image" },
    { name: "isIncludeInNavbar", value: "is Include In Navbar" },
    { name: "isTopVisitPlace", value: "is Top Visit Place" },
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
      const res = await fetchController("/destination", "GET");
      const formattedData = res.data.map((val, index) => {
        return {
          id: val._id,
          ["SN0"]: index + 1,
          ["City Name"]: val.cityName,
          ["City Image"]: val.cityImage,
          ["is Include In Navbar"]: val.isIncludeInNavbar,
          ["is Top Visit Place"]: val.isTopVisitPlace,
        };
      });
      setPachagesData(formattedData);
    } catch (error) {
      console.log("Error occour while fetching Packages");
      console.log(error);
    }
  };

  const handleClickOnCheckBox = async (e, id) => {
    const { name, checked } = e.target;
    console.log({ name, checked, id });
    const countCheckedRow = packagesData.filter((val, i) => val[name] === true);
    // console.log({
    //   condition:
    //     (!checked && countCheckedRow.length == 4) || countCheckedRow.length < 4,
    // });
    if (
      (!checked && countCheckedRow.length == 4) ||
      countCheckedRow.length < 4
    ) {
      const filterData = packagesData.map((val, i) =>
        val.id === id ? { ...val, [name]: checked } : val
      );
      setPachagesData(filterData);

      const payload = { [name.split(" ").join("")]: checked };
      let res = await fetchController(`/destination/${id}`, "PATCH", payload);
      console.log(res);
      console.log(res.statusCode);
      if (res.statusCode === 200) {
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
            fetchData={loadData}
            isEditing={false}
          />
        </>
        <MasterTable
          tableData={packagesData}
          column={column}
          table="destination"
          loadData={loadData}
          handleClickOnCheckBox={handleClickOnCheckBox}
        />
      </>
    </>
  );
};

export default Destination;
