import { Col, Container, Row } from "react-bootstrap";
import { IconBox } from "../components/ui";

const OurProcess = () => {
  return (
    <section id="our-process" aria-label="Our Process">
      <Container className="py-3 py-lg-5">
        <Row>
          <Col xl={8} className="mx-auto mb-3 mb-lg-5">
            <h2 className="h2 fw-semibold text-center mb-2 mb-lg-4">The Connex Way</h2>
            <p className="p text-center">
              We keep things simple, clear, and collaborative. Here's how we
              turn your ideas
              <span className="d-inline-block d-lg-block">into real, working software.</span>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-lg-4">
          <Col xl={3} lg={6} sm={6} xs={6} className="mb-xl-0 mb-4">
            <article className="h-100 w-100 p-2">
              <IconBox
                icon={"/process/discuss.png"}
                title="Discuss"
                description="We listen, ask questions, and align with your vision."
              />
            </article>
          </Col>
          <Col xl={3} lg={6} sm={6} xs={6} className="mb-xl-0 mb-4">
            <article className="h-100 w-100 p-2">
              <IconBox
                icon={"/process/design.png"}
                title="Design"
                description="We plan the look, feel, and flow with your goals in mind."
              />
            </article>
          </Col>
         <Col xl={3} lg={6} sm={6} xs={6} className="mb-xl-0 mb-4">
            <article className="h-100 w-100 p-2">
              <IconBox
                icon={"/process/build.png"}
                title="Build"
                description="We develop clean, scalable code with ongoing collaboration."
              />
            </article>
          </Col>
          <Col xl={3} lg={6} sm={6} xs={6} className="mb-xl-0 mb-4">
            <article className="h-100 w-100 p-2">
              <IconBox
                icon={"/process/deliver.png"}
                title="Deliver"
                description="We test, refine, and launch  ensuring everything works perfectly."
              />
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurProcess;
