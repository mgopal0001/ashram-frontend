import { Navbar, Nav } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import "./style.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar-con">
        <Navbar bg="transparent" variant="dark" expand="lg">
          <Navbar.Brand href="/login">
            <FaSignInAlt />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/videos">Videos</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
