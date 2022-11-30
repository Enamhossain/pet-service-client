import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllSerivce/AllServices";
// import AllServices from "../Pages/AllSerivce/AllServices";
import GetService from "../Pages/GetService/GetService";
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
                path:'/service',
                element:<AllServices></AllServices>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singUp',
                element:<Singup></Singup>
            },
            {
                path:'/getservice/:id',
                element:<GetService/>
            }

        ]
    },
])

export default router;