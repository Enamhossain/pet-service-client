import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllSerivce/AllServices";
import Blog from "../Pages/Blog/Blog";
import GetService from "../Pages/GetService/GetService";
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
                path:'/service',
                element:<AllServices></AllServices>
            },
            {
             path:'/addservice',
             element:<AddService></AddService>
            },
            {
             path:'/blog',
             element:<Blog></Blog>
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
                element:<GetService/>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            
            }

        ]
    },
])

export default router;