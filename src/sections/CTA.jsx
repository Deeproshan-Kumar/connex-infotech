import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="cta position-relative py-3 py-lg-5" aria-label="CTA">
      <Container className="rounded-24" style={{ backgroundColor: "#212529" }}>
        <Row className="align-items-stretch ps-lg-5">
          <Col lg={7} md={7} sm={12} className="p-lg-0 p-4">
            <h2 className="display-4 text-capitalize fw-semibold text-white mb-4">
              Launch with Confidence Build with US.
            </h2>
            <p className="text-white mb-4 pb-lg-3">
              Whether it’s your first product or your next big upgrade, we’re
              here to bring your ideas to life on time, on budget, and with
              results you can count on.
            </p>
            <Button className="btn-white border-0">
              <Link to="/" className="text-base fw-semibold text-capitalize">
                Talk to an expert
                <FaArrowRight size={15} className="ms-2" />
              </Link>
            </Button>
          </Col>
          <Col lg={5} md={5} sm={12} className="pe-0">
            <img src="/cta/CTA_img.png" className="img-fluid h-100 w-100 object-fit-cover" alt="CTA" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
