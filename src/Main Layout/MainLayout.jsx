import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;