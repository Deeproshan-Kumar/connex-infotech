import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="cta position-relative py-3 py-lg-5" aria-label="CTA">
      <Container>
        <Row
          className="align-items-center sm_rounded_7 rounded-24"
          style={{ backgroundColor: "#212529" }}
        >
          <Col lg={7} md={7} sm={7} xs={7} className="p-3 p-md-4 ps-lg-5">
            <h2 className="sm_text_15 sm_line_height_17 display-4 text-capitalize fw-semibold text-white mb-2 mb-lg-4">
              Launch with Confidence Build with US.
            </h2>
            <p className="sm_text_7 sm_line_height_8 text-white mb-2 mb-lg-4 pb-xl-3">
              Whether it’s your first product or your next big upgrade, we’re
              here to bring your ideas to life on time, on budget, and with
              results you can count on.
            </p>
            <Button className="btn-white border-0">
              <Link to="/" className="sm_text_5 text-base fw-semibold text-capitalize">
                Talk to an expert
                <FaArrowRight size={15} className="sm_size_5 ms-1 ms-lg-2" />
              </Link>
            </Button>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5} className="pe-0">
            <img
              src="/cta/CTA_img.png"
              className="img-fluid h-100 w-100 object-fit-cover"
              alt="CTA"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
