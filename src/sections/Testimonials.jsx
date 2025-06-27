import { Row, Container, Col, Carousel } from "react-bootstrap";
import { Testimonial } from "../components/ui";
import testimonials from "../utils/testimonials";

const Testimonials = () => {
  return (
    <section
      className="testimonials position-relative py-3 py-lg-5 mb-3"
      aria-label="What Our Clients Say"
    >
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h2 className="h2 fw-semibold text-capitalize text-center mb-4 pb-lg-3">
              What Our Clients Say
            </h2>
          </Col>
          <Col lg={11} md={12} sm={12} className="mx-auto">
            <Carousel>
              {testimonials?.map((testimonial) => {
                return (
                  <Carousel.Item key={testimonial?.id}>
                    <Testimonial
                      logo={testimonial?.logo}
                      company_name={testimonial?.company_name}
                      quote={testimonial?.quote}
                      rating={testimonial?.rating}
                      user={testimonial?.user}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;