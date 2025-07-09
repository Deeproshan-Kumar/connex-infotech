import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="position-relative pb-0 pt-5 pb-lg-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className="display-3 fw-semibold text-center mb-3 mb-lg-4 pb-lg-1">
               <span className="gradient-text">Connex Infotech </span> <br/> Your Gateway to the IT Industry
            </h1>
            <div className="img-gradient-borders internship position-relative my-5 text-center">
              <img
                src="/internship/hero.png"
                alt="About"
                className="img-fluid w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;