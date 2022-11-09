import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddServices from "./AddServices";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import Login from "./Login";
import MyReview from "./MyReview";
import Register from "./Register";
import ReviewEdit from "./ReviewEdit";
import ServiceDetails from "./ServiceDetails";
import TotalServices from "./TotalServices/TotalServices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },

            {
                path:'/myReview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/editReview/:id',
                element:<ReviewEdit></ReviewEdit>,
                loader:({params})=>fetch(`http://localhost:5000/review/${params.id}`)
            },

            {
                path:'/addService',
                element:<AddServices></AddServices>
            }

        ]

    }

])