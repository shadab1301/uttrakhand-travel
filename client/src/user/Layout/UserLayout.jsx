import { Link, Navigate, Outlet } from "react-router-dom";

export const UserLayout = () => {

  return (
    <>
      <h1>User layout</h1>
      <Outlet />
    </>
  );
};
