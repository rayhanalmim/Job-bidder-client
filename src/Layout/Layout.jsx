import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/HomePage/Home";

const Layout = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default Layout;