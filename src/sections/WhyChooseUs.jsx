import { Container, Row, Col } from "react-bootstrap";
import IconList from "../components/ui/IconList";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" aria-label="Why Choose Us">
      <Container className="py-3 py-lg-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <img
              src={"/why-choose-us.png"}
              height={625}
              width={580}
              alt="Why Choose Us"
              className="h-auto w-100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h2 className="h2 fw-semibold mb-3">
              Why Choose <br />
              Connex Infotech
            </h2>
            <p className="p max_w_430">
              We don’t just build software — we build partnerships. Here's why
              businesses choose to work with us.
            </p>
            <ul className="list-unstyled ps-0">
              <IconList
                icon={"/users.png"}
                title="Proven Industry Expertise"
                description="The talent behind Connex Infotech has helped shape impactful software projects while working with leading names across industries  including giants like Tata and Adani."
              />
              <IconList
                icon={"/solutions.png"}
                title="Custom, Scalable Solutions"
                description="We build software that fits your business  not off-the-shelf, but tailored, scalable and designed to deliver lasting value."
              />
              <IconList
                icon={"/agile.png"}
                title="Agile & Efficient Delivery"
                description="Our streamlined development process ensures fast, reliable execution — bringing your vision to life quickly without compromising on quality."
              />
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
