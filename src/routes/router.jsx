import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader: ({params}) =>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<h1>news layout</h1>
    },
    {
        path:'auth',
        element:<h1>login</h1>
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
])