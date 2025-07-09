import { Col, Container, Row } from "react-bootstrap";

const WhyApply = () => {
  return (
    <section className="position-relative">
      <div className="">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={7}>
              <h2 className="h2 text-center gradient-text text-lg-start fw-semibold mb-3">
                Who Should Apply?
              </h2>

              {/* First text paragraph */}
              <div className="text-normal">
                <ul className="list-unstyled mt-lg-4 mb-0">
                  <li className="sm_text_7 fw-medium mt-1 mt-lg-3 d-flex">
                    <img
                      src="/services/check.svg"
                      className="sm_size_8 img-fluid me-1 me-lg-3"
                    />
                    <p>Freshers looking to get <span className="fw-bold">real-world experience</span></p>
                  </li>
                  <li className="sm_text_7 fw-medium mt-1 mt-lg-3 d-flex">
                    <img
                      src="/services/check.svg"
                      className="sm_size_8 img-fluid me-1 me-lg-3"
                    />
                    <p>Recent graduates from <span className="fw-bold">B.Tech, BCA, MCA,</span> or related fields</p>
                  </li>
                  <li className="sm_text_7 fw-medium mt-1 mt-lg-3 d-flex">
                    <img
                      src="/services/check.svg"
                      className="sm_size_8 img-fluid me-1 me-lg-3"
                    />
                    <p>Self-learners who want to break into the <span className="fw-bold">IT industry</span></p>
                  </li>
                  <li className="sm_text_7 fw-medium mt-1 mt-lg-3 d-flex">
                    <img
                      src="/services/check.svg"
                      className="sm_size_8 img-fluid me-1 me-lg-3"
                    />
                    <p>Anyone looking for <span className="fw-bold">industry-level</span> exposure</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={5} className="d-lg-block text-center img-ui">
              <img
                src="/internship/apply.png"
                alt="apply image"
                className="img-fluid"
              />
              <img src="./internship/ellipse.png" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default WhyApply;
