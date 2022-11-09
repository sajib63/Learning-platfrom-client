import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import TotalServices from "./TotalServices/TotalServices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/totalServices',
                loader:()=> fetch('http://localhost:5000/totalServices'),
                element:<TotalServices></TotalServices>
            },

        ]

    }

])