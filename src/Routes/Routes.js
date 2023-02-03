import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Navbar from "../Component/Navbar/Navbar";
import Main from "../Layout/Main";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            
        ]
    }
])