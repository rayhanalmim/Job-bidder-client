import { Outlet } from "react-router-dom";
import Navbar from "../Component/SharedComponent/Navbar";
import Footer from "../Component/SharedComponent/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="mt-8">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;