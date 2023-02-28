import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar
      class="nav"
      bg="#00ff0000"
      expand="lg"
      className="fixed z-50 w-screen"
    >
      <a></a>
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          OMOROBOT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              Robot
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              About
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              Team
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              Board
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Link
            </Nav.Link>
          </Nav>
          <button className="w-16 h-8 text-white bg-blue-600 border-none rounded-md hover:bg-blue-800">
            <Link to="/login">Login</Link>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BasicExample;
