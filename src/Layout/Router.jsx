import { createBrowserRouter } from "react-router";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Featured from "../Component/Featured";
import Home from "./Home";
import Recepie from "../Component/Recepie";
import Footer from "../Component/Footer";
import About from "../Component/About";
import Contact from "../Component/Contact";
import MegaMenu from "../Component/MegaMenu";

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
            },
            {
                path: "/About",
                loader: ()=> fetch("/offer.json"),
                hydrateFallbackElement: <div>Loading...</div>,
                element: <About></About>
            },
            {
                path: "/Contact",
                loader: ()=> fetch("contact.json"),
                hydrateFallbackElement: <div>Loading..</div>,
                element: <Contact></Contact>
            },
            {
                path: "/megamenu",
                loader: ()=> fetch("product.json"),
                hydrateFallbackElement: <div>Loading..</div>,
                element: <MegaMenu></MegaMenu>
            }
        ]
    }


])
export default Router