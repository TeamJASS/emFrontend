import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
// import Navbar from "../components/navbar";
import AdminNavbar from "../components/adminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
