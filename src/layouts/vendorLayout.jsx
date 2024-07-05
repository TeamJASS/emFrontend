import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
// import Navbar from "../components/navbar";

const VendorLayout = () => {
  return (
    <>
      <h1>Vendor Navbar</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default VendorLayout;
