import { createBrowserRouter } from "react-router";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Featured from "../Component/Featured";
import Home from "./Home";
import Recepie from "../Component/Recepie";
import Footer from "../Component/Footer";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar></Navbar> <Footer></Footer></>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Blog",
                loader: () => fetch("/blog.json"),
                hydrateFallbackElement: <div>Loading...</div>,
                element: <Recepie></Recepie>
            }
        ]
    }


])
export default Router