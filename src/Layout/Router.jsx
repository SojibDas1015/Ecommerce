import { createBrowserRouter } from "react-router";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Featured from "../Component/Featured";
import Home from "./Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }

])
export default Router