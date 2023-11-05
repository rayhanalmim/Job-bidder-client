import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut, looding } = useContext(AuthContext);

    if (looding) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
    }

    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/singin">Login</NavLink></li>
        <li><NavLink to="/add">Add jobs</NavLink></li>
        <li><NavLink to="/myjob">My Posted Jobs</NavLink></li>
        <li><NavLink to="/mybids">My Bids</NavLink></li>
        <li><NavLink to="/bidsreq">Bids Requests</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error('log Out successfully', {
                    position: "top-left",
                    theme: "dark",
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
                toast.error(errorMessage, {
                    position: "top-left",
                    theme: "dark",
                });
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogOut} className='btn w-28 btn-outline btn-sm '>Logout</Link> : <Link to='/login' className='btn w-28 btn-outline btn-sm'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;