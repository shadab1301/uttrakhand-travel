import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { TbAddressBook } from "react-icons/tb";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { CiMountain1 } from "react-icons/ci";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminLayout() {
   const theme = useTheme();
   const [open, setOpen] = React.useState(true);
  const navigate=useNavigate()
   const handleDrawerOpen = () => {
     setOpen(true);
   };

   const handleDrawerClose = () => {
     setOpen(!open);
   };
   const sideBarMenu = [
     { id: 0, name: "Dashboard", icon: <MdDashboard />, path: "dashboard" },
     { id: 1, name: "Packages", icon: <FiPackage />, path: "packages" },
     { id: 2, name: "Enquiry", icon: <FaRegMessage />, path: "enquiry" },
     { id: 3, name: "Destination", icon: <CiMountain1 />, path: "destination" },
     { id: 4, name: "Gallery", icon: <GrGallery />, path: "gallery" },
     { id: 5, name: "Address", icon: <TbAddressBook />, path: "address" },
     {
       id: 6,
       name: "Testimonial",
       icon: <FaRegNoteSticky />,
       path: "testimonial",
     },
   ];




  return (
    <Box sx={{ display: "flex", width: "98vw" }}>
      <Navbar handleDrawerClose={handleDrawerClose} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {sideBarMenu.map((menu, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(menu.path)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                   {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          background: "#ECEFF1",
          height: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ mt: 10, flexGrow: 1, p: 3, background: "white" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
