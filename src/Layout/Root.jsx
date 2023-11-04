import { Outlet } from "react-router-dom";
import Navbar from "../Component/SharedComponent/Navbar";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;