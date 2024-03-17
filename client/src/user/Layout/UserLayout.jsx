import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import Header from "../Pages/Layout/Header";
import Footer from "../Pages/Layout/Footer";
import { Banner } from "./Banner";
export const UserLayout = () => {
  return (
    <>
      <Header />

      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};
