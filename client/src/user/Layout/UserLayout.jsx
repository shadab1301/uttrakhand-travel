import { Link, Navigate, Outlet } from "react-router-dom";
import Header from '../Pages/Layout/Header';
import Footer from '../Pages/Layout/Footer';
export const UserLayout = () => {

  return (
    <>
        <Header />
      <Outlet />
      <Footer />
    </>
  );
};
