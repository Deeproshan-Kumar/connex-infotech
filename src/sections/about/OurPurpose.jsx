import { Col, Container, Row } from "react-bootstrap";

const OurPurpose = () => {
  return (
    <section className="position-relative">
      <div className="mt-5 pt-5" style={{ background: "#212529" }}>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="pt-lg-5">
              <h1 className="display-5 sm_text_19 text-white fw-semibold text-center mb-0 mb-lg-4 pb-lg-1">
                Our Purpose & Direction
              </h1>
              <p className="sm_text_8 text-white text-center">
                Simplifying Business through Innovation and Expertise
              </p>
            </Col>
          </Row>
          <Row className="pt-lg-5 mt-lg-2">
            <Col lg={7} md={7} sm={7} xs={7}>
              <div>
                <img
                  src="/about/inverted_comma.svg"
                  className="img-fluid comma comma-1"
                />
              </div>
              <div className="quote">
                <p className="sm_line_height_9 mb-3 mb-lg-4 pb-lg-3">
                  <em className="sm_text_7 sm_line_height_9 text-white">
                    At Connex Infotech, our purpose is to deliver smart,
                    efficient digital solutions that enhance business
                    performance. We specialize in websites, mobile apps, and
                    custom software to simplify complex processes.
                  </em>
                </p>
                <p className="sm_line_height_9 mb-0">
                  <em className="sm_text_7 sm_line_height_9 text-white">
                    Our direction is to lead digital transformation with
                    innovative solutions that exceed client expectations,
                    driving business success through
                    collaboration and creativity.
                  </em>
                </p>
              </div>
              <div className="text-end">
                <img
                  src="/about/inverted_comma_2.svg"
                  className="img-fluid comma comma-2"
                />
              </div>
            </Col>
            <Col lg={5} md={5} sm={5} xs={5}>
              <img
                src="/about/purpose_direction_img.png"
                alt="Purpose & Direction"
                className="sm_h_175 sm_w_100 object-fit-contain mb-n-60"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default OurPurpose;
