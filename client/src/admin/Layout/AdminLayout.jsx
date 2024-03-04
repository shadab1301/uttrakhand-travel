import { Link, Navigate, Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";

export const AdminLayout = () => {
  // const { user } = useAuth();
//   let user = true;
//   if (user) {
//     return <Navigate to="/dashboard" />;
//   }
  return (
    <>
     <AdminNavbar/>
      <Outlet />
      
    </>
  );
};
