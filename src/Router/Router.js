import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllSerivce/AllServices";
import Blog from "../Pages/Blog/Blog";
import GetService from "../Pages/GetService/GetService";
import MyReview from "../Pages/GetService/ReviewSection/myReview/MyReview";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";



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
                element:<PrivateRoutes><AllServices></AllServices></PrivateRoutes>
                
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
                loader:({params}) => fetch(`https://percat-service-server.vercel.app/services/${params.id}`)
            
            },
            {
                path:'/myReview',
                element: <MyReview/> ,
                loader:({params})=>fetch(`https://percat-service-server.vercel.app/reviews/${params.id}`)               
            },

        ]
    },
])

export default router;