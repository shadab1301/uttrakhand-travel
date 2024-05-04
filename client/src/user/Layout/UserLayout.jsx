import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import Header from "../Pages/Layout/Header";
import Footer from "../Pages/Layout/Footer";
import { Banner } from "./Banner";
import { PackagesProvider } from "../../Reducer/PackagesProvider";
import { DestinationProvider } from "../../Reducer/DestinationProvider";
export const UserLayout = () => {
  return (
    <>
      <DestinationProvider>
        <PackagesProvider>
          <Header />
          <Banner />
          <Outlet />
          <Footer />
        </PackagesProvider>
      </DestinationProvider>
    </>
  );
};
