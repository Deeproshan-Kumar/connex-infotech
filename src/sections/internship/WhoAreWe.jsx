import { Col, Container, Row } from "react-bootstrap";

const WhoAreWe = () => {
  return (
    <section className="position-relative">
      <div className="">
        <Container>
          <Row className="pt-lg-5 mt-lg-2">
            {/* Text block - full width on all devices */}
            <Col xs={12} lg={7}>
              <h2 className="h2 text-start gradient-text text-lg-start fw-semibold mb-3">
                Who Are We?
              </h2>

              {/* First text paragraph */}
              <div className="text-normal">
                <p className="">
                  We are a team of IT professionals with years of experience in
                  the tech industry. Based in Mohali, we founded Connex Infotech
                  to bridge the gap between academic learning and real-world
                  industry experience.
                </p>
                <p className="">
                  After running our own successful IT company and working on
                  high-profile projects, we noticed a recurring challenge —
                  freshers struggle to gain practical exposure. Many leave
                  institutes and academies without the skills needed to thrive
                  in a real work environment.
                </p>
              </div>
              <div className="text-center my-4 d-block d-lg-none image-fit">
                <img
                  src="/internship/intern.png"
                  alt="Intern"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              {/* Remaining paragraph */}
              <div className="text-normal">
                <p>
                  To solve this, we created a hands-on internship program that
                  gives aspiring developers real project experience, mentorship
                  from professionals, and a clear path to enter the IT industry.
                </p>
              </div>
            </Col>

            <Col xs={12} lg={5} className="d-none d-lg-block text-center">
              <img
                src="/internship/intern.png"
                alt="Intern"
                className="img-fluid fit-img-area"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default WhoAreWe;
