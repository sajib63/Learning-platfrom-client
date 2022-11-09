import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "./Blog";
import Home from "./Home/Home";
import Login from "./Login";
import Register from "./Register";
import ServiceDetails from "./ServiceDetails";
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

            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/totalServices/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }

        ]

    }

])