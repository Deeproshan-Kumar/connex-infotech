import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header position-sticky top-0 bg-white py-1"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0 m-0">
          <img
            src="/logo.svg"
            alt="Connex Infotech"
            className="img-fluid h-auto w-100"
            height={93}
            width={218}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="pb-4 pb-lg-0" id="responsive-navbar-nav">
          <Nav className="ms-auto me-0 me-xl-5 me-lg-0">
            <Nav.Link
              as={Link}
              to="/"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/internship"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              Internship
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-base fw-medium me-xl-4 me-lg-3"
              style={{ color: "#212529" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="d-lg-none d-xl-block">
            <Button
              variant="success"
              className="btn-primary text-base fw-semibold border-0 text-white"
            >
              Get A Free Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
