import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllSerivce/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
                path:'/allService',
                element:<AllServices/>
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