import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/HomePage/Home";
import JobDetails from "../Component/JobDetails.jsx/JobDetails";
import SingIn from "../Component/Authentication/SingIn";
import SingUp from "../Component/Authentication/SingUp";
import AddJobs from "../Component/AddJobs/AddJobs";
import MyJobs from "../Component/JobDetails.jsx/Jobs/MyJobs";

const Layout = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/jobs/:id',
                element:<JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'/singIn',
                element:<SingIn></SingIn>
            },
            {
                path:'/singUp',
                element:<SingUp></SingUp>
            },
            {
                path:'/addjobs',
                element:<AddJobs></AddJobs>
            },
            {
                path:'/myjobs',
                element:<MyJobs></MyJobs>
            }
        ]
    }
])

export default Layout;