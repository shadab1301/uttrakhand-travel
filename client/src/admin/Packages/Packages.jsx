import React,{ useState } from 'react';
import { Button } from '@mui/material';
import AddPackages from '../../Modal/AddPackages';
import PackagesTable from "../../Table/PackagesTable"


const Packages = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log({handleOpen});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const packagesTableAddButton = (
    <Button variant="contained" style={{ width: "auto" }} onclick={()=>handleOpen()}>
      Add Package
    </Button>
  );
  return (
    <>
      <PackagesTable
        name={"Packages"}
        packagesTableAddButton={packagesTableAddButton}
      />
      <AddPackages
        isOpen={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
}

export default Packages