import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="position-relative pb-0 pt-5 pb-lg-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className="display-3 fw-semibold text-center mb-3 mb-lg-4 pb-lg-1 text-capitalize">
              The Power of
              <span className="gradient-text"> Our Team</span>
            </h1>
            <p className="text-center mx-auto" style={{ maxWidth: "992px" }}>
              The talent behind Connex Infotech has contributed to impactful
              software projects while working with leading names across
              industries. We’re excited to showcase the work that reflects our
              team’s passion for innovation and quality.
            </p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
