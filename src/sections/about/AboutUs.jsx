import { Button, Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="position-relative py-lg-5" aria-label="About Us">
      <Container>
        <Row className="pt-lg-4">
          <Col lg={6} md={6} sm={6} xs={6}>
            <div>
              <h4 className="sm_text_8 gradient-text text-uppercase fw-semibold">About Us</h4>
              <h1 className="display-3 sm_text_19 fw-semibold mb-1 mb-lg-3">
                The Beginning of
                <br />
                <span className="gradient-text">Connex Infotech.</span>
              </h1>
              <p className="sm_text_7 sm_line_height_10 mb-3 pb-lg-1">
                It all began with two tech enthusiasts and a shared dream: to
                create digital solutions that truly work—while having some fun
                along the way! As we grew, two more talented individuals offered
                their unwavering support, helping turn our vision into reality.
                Cheers to that! From a small team to a thriving company, we’ve
                been crafting websites, apps, and software that help businesses
                succeed, all while keeping things fresh, fun, and
                forward-thinking!
              </p>
              <Button className="btn-primary fw-semibold border-0 text-white">Let's Work Together</Button>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <img src="/about/about.png" alt="About" className="img-fluid h-auto w-100" height={528} width={565} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
