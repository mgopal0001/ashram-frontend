import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";
import NavBar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "video-react/dist/video-react.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route path={path} element={component} key={index} />;
        })}
      </Routes>
    </>
  );
}

export default App;
