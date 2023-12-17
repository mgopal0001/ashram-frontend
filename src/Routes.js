import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
export const routes = [
    {
        path: "/",
        component:<Home/>
    },
    {
        path: "/about",
        component:<About/>
    },
    {
        path:"/contact",
        component:<Contact/>
    }
]