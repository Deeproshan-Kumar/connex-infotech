import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../components/ui/ServiceCard";
import services from "../utils/services";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" aria-label="What We Do">
      <Container className="py-3 py-lg-5">
        <Row>
          <Col xl={8} className="mx-auto">
            <h2 className="h2 fw-semibold text-center mb-4">What We Do</h2>
            <p className="p text-center">
              we turn ambitious ideas into high-performance software solutions —
              tailored, scalable, and built for real business impact. Backed by
              talent that has shaped projects for leading global brands, we
              specialize in custom development, cloud solutions, system
              integration, and IT consulting. Your Vision, Our Code
              Limitless Possibilities.
            </p>
          </Col>
        </Row>
        <Row className="services justify-content-center">
          {services?.map((service) => {
            return (
              <Col lg={4} md={6} sm={12} key={service?.id} className="service mb-lg-0 mb-4">
                <ServiceCard
                  serviceName={service?.service_name}
                  serviceDesc={service?.service_info}
                  serviceTypes={service?.service_types}
                  cta={service?.cta}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
