import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Video from "./components/pages/video/Video";
export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/video/:videoId",
    component: <Video />,
  },
  {
    path: "/login",
    component: <Login />,
  },
];
