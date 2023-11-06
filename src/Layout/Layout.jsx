import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/HomePage/Home";
import JobDetails from "../Component/JobDetails.jsx/JobDetails";
import SingIn from "../Component/Authentication/SingIn";
import SingUp from "../Component/Authentication/SingUp";
import AddJobs from "../Component/AddJobs/AddJobs";
import MyJobs from "../Component/JobDetails.jsx/Jobs/MyJobs";
import EditMyJobs from "../Component/JobDetails.jsx/Jobs/EditMyJobs";
import MyBids from "../Component/JobBids/MyBids";
import BidsReq from "../Component/JobBids/BidsReq";
import ErrorPage from "../Component/HomePage/ErrorPage";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";

const Layout = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/jobs/:id',
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://jobbidderhub-server.vercel.app/jobs/${params.id}`)
            },
            {
                path:'/SingIn',
                element:<SingIn></SingIn>
            },
            {
                path:'/SingUp',
                element:<SingUp></SingUp>
            },
            {
                path:'/Addjobs',
                element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path:'/Myjobs',
                element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path:'/edit/:id',
                element:<EditMyJobs></EditMyJobs>,
                loader: ({params}) => fetch(`https://jobbidderhub-server.vercel.app/edit/${params.id}`)
            },
            {
                path:'/Mybids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },
            {
                path:'/Bidsrequest',
                element:<PrivateRoute><BidsReq></BidsReq></PrivateRoute>
            }
        ]
    }
])

export default Layout;