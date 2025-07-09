import { Col, Container, Row } from "react-bootstrap";

const CareerThankyou = () => {
  return (
    <section className="position-relative">
      <div className="">
        <Container>
          <Row className="pt-lg-5 mt-lg-2">
            <Col xs={12} lg={7}>
              <h2 className="h2 text-start text-lg-start fw-semibold mb-3 gradient-text">
                Let’s Build Your IT Career, Together
              </h2>
              <div className="text-normal">
                <p className="">
                 At Connex Infotech, we’re passionate about empowering the next generation of developers. Whether you’re a fresher or someone switching careers, our internship is your launchpad into the tech world.
                </p>
                <p>
                  Let’s turn your potential into performance.
                </p>
              </div>
            </Col>

            <Col xs={12} lg={5} className="position-relative img-ui">
              <div> <img src="/internship/team.png" className="img-fluid"  alt="" /></div>
            </Col>
          </Row>
        </Container>
      </div>
    
      <div className="position-relative">
        <Container>
          <Row className="pt-lg-5 mt-lg-2 ">
            <Col xs={12} lg={5} className="position-relative order-2 order-md-2 order-lg-1 img-ui">
            <div > <img src="/internship/working.png" alt="" className="img-fluid"  /></div>
            </Col>
            <Col xs={12} lg={7} className="order-1 order-md-1 order-lg-2">
              <h2 className="h2 text-center text-lg-center fw-semibold mb-3 gradient-text">
                Thank You
              </h2>
              <div className="text-normal text-center">
                <p className="">
                 We appreciate your time and interest in Connex Infotech. Whether you're a fresher eager to dive into real-world projects, a career switcher looking for guidance, or a collaborator exploring opportunities — thank you for considering us We believe in growing together, and we’re excited to be part of your journey into the world of tech.
                </p>
                <p>Let’s build something amazing together.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CareerThankyou;
