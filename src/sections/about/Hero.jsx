import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="position-relative pb-0 pt-5 pb-lg-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className="display-3 fw-semibold text-center mb-3 mb-lg-4 pb-lg-1">
              Turning Ideas Into Reality. <br />
              <span className="gradient-text">Your Friendly Tech Partner.</span>
            </h1>
            <p className="text-center mx-auto" style={{ maxWidth: "992px" }}>
              we’re a team of IT professionals dedicated to creating websites,
              apps, and custom software that simplify your business and delight
              your customers. Let’s work together to achieve success in
              the digital world!
            </p>
            <div className="img-gradient-borders position-relative my-5 text-center">
              <span className="gradient-border g-border-1"></span>
              <span className="gradient-border g-border-2"></span>
              <img
                src="/about/about_us_img.png"
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