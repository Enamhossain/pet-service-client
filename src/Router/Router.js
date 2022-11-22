import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Service from "../Pages/Service/Service";
import Singup from "../Pages/Singup/Singup";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Service></Service>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singUp',
                element:<Singup></Singup>
            }
        ]
    },
])

export default router;