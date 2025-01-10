import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-bgPrime">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
