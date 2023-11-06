import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/SharedComponent/Navbar";
import Footer from "../Component/SharedComponent/Footer";
import { useEffect } from "react";

const Root = () => {

    const loc = useLocation();

    useEffect(()=>{
        if(loc.pathname == '/'){
            document.title = `Job-Home`
        }
        else{
            document.title = `Job ${loc.pathname.replace("/", '-')}`
        }
        if(loc.state){
            document.title = `Job ${loc.state}`
        }
    },[loc.pathname])

    return (
        <div className="relative">
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