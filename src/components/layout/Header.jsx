import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Header() {
  const location = useLocation();
  const oRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const angle = window.scrollY;
      if (oRef.current) {
        oRef.current.style.transform = `rotate(${angle}deg)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header position-sticky top-0 py-1"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="p-0 m-0">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img src="/logo-img.svg" alt="Connex Infotech" />
              <img
                ref={oRef}
                src="/icon-o.svg"
                alt="Rotating O"
                className="logo-rotate"
              />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setMobileMenuOpen(true)}
          />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="d-none"
          />
          <Navbar.Collapse
            className="pb-4 pb-lg-0 d-none d-lg-flex"
            id="responsive-navbar-nav"
          >
            <Nav className="ms-auto me-0 me-xl-5 me-lg-0">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/internship", label: "Internship" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <Nav.Link
                  as={Link}
                  to={to}
                  key={to}
                  className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                    location.pathname === to ? "active" : ""
                  }`}
                  style={{ color: "#212529" }}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="d-none d-xl-block">
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-box">
            <button
              className="mobile-nav-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img src="cross.png" className="img-fluid" />
            </button>
            <Nav className="flex-column text-center gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/internship", label: "Internship" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <Nav.Link
                  as={Link}
                  to={to}
                  key={to}
                  className={`mobile-nav-link ${
                    location.pathname === to ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
