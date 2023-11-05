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
            },
            {
                path:'/edit/:id',
                element:<EditMyJobs></EditMyJobs>,
                loader: ({params}) => fetch(`http://localhost:3000/edit/${params.id}`)
            },
            {
                path:'/mybids',
                element:<MyBids></MyBids>,
            },
            {
                path:'/bidsrequest',
                element:<BidsReq></BidsReq>
            }
        ]
    }
])

export default Layout;