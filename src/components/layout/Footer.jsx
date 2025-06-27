import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <Col lg={6} md={5} sm={12}>
            <img
              src="/logo.png"
              height={93}
              width={218}
              alt="Connex Infotech"
            />
            <p
              className="text-sm fw-medium max_w_327"
              style={{ color: "#212529" }}
            >
              Connex Infotech is a global tech partner specializing in custom
              mobile apps, web platforms, and AI-powered solutions. We help
              startups and enterprises unlock growth through smart, scalable
              digital products.
            </p>
          </Col>
          <Col lg={6} md={7} sm={12}>
            <Row>
              <Col lg={7} md={6} sm={12}>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about" className="text-sm fw-semibold">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="text-sm fw-semibold">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          to="/privacy-policy"
                          className="text-sm fw-semibold"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/terms-conditions"
                          className="text-sm fw-semibold"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} md={6} sm={12}>
                <p
                  className="text-sm fw-semibold"
                  style={{ color: "#334055", lineHeight: "20px" }}
                >
                  Join us by
                </p>
                <ul className="d-flex align-items-center list-unstyled">
                  <li
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                      marginRight: "7px",
                    }}
                  >
                    <Link to="/">
                      <FaFacebookF size={20} />
                    </Link>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                      marginRight: "7px",
                    }}
                  >
                    <Link to="/">
                      <FaLinkedinIn size={20} />
                    </Link>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                    }}
                  >
                    <Link to="/">
                      <AiFillInstagram size={20} />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr className="divider" />
      <Container className="py-3 py-lg-5">
        <Row lg={12} md={12} sm={12}>
          <p className="text-center text-sm mb-0" style={{ color: "#334055" }}>
            All rights are reserved. I Copyrights © 2024
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
