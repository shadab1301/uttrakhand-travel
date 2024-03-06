import { Link, Navigate, Outlet } from "react-router-dom";
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout//Footer';
export const UserLayout = () => {

  return (
    <>
        <Header />
      <Outlet />
      <Footer />
    </>
  );
};
