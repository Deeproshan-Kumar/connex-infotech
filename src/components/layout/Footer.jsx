import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <Col lg={6} md={6} sm={4} xs={4}>
            <img
              src="/logo.svg"
              height={93}
              width={218}
              alt="Connex Infotech"
              className="footer-logo"
            />
            <p
              className="text-sm sm_text_5 sm_line_height_6 fw-medium max_w_327"
              style={{ color: "#212529" }}
            >
              Connex Infotech is a global tech partner specializing in custom
              mobile apps, web platforms, and AI-powered solutions. We help
              startups and enterprises unlock growth through smart, scalable
              digital products.
            </p>
          </Col>
          <Col lg={6} md={6} sm={8} xs={8}>
            <Row>
              <Col lg={7} md={6} sm={7} xs={7}>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <ul className="list-unstyled">
                      <li className="sm_line_height_normal mb-0 mb-lg-2">
                        <Link to="/about" className="sm_text_7 sm_line_height_6 text-sm fw-semibold">
                          About Us
                        </Link>
                      </li>
                      <li className="sm_line_height_normal mb-0 mb-lg-2">
                        <Link to="/contact" className="sm_text_7 sm_line_height_6 text-sm fw-semibold">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <ul className="list-unstyled">
                      <li className="sm_line_height_normal mb-0 mb-lg-2">
                        <Link
                          to="/privacy-policy"
                          className="sm_text_7 sm_line_height_6 text-sm fw-semibold"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="sm_line_height_normal mb-0 mb-lg-2">
                        <Link
                          to="/terms-conditions"
                          className="sm_text_7 sm_line_height_6 text-sm fw-semibold"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} md={6} sm={5} xs={5}>
                <p
                  className="sm_text_7 text-center text-lg-start text-sm fw-semibold mb-0 mb-lg-4"
                  style={{ color: "#334055", lineHeight: "20px" }}
                >
                  Join us by
                </p>
                <ul className="d-flex align-items-center justify-content-center justify-content-lg-start list-unstyled mb-0 mb-lg-2">
                  <li
                    className="sm_size_14 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                      marginRight: "7px",
                    }}
                  >
                    <Link to="/">
                      <FaFacebookF size={20} className="sm_size_6"/>
                    </Link>
                  </li>
                  <li
                    className="sm_size_14 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                      marginRight: "7px",
                    }}
                  >
                    <Link to="/">
                      <FaLinkedinIn size={20} className="sm_size_6"/>
                    </Link>
                  </li>
                  <li
                    className="sm_size_14 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#EDEEEE",
                    }}
                  >
                    <Link to="/">
                      <AiFillInstagram size={20} className="sm_size_6"/>
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
          <p className="sm_text_7 sm_line_height_6 text-center text-sm mb-0" style={{ color: "#334055" }}>
            All rights are reserved. I Copyrights © 2024
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
