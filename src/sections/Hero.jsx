import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeroSectionCard } from "../components/ui";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="position-relative" id="hero" aria-label="Hero Section">
      <Container>
        <Row className="align-items-center py-5">
          <Col xl={7} lg={5} md={12} sm={12} className="mb-4 mb-lg-0">
            <h1 className="display-3 fw-bold font-inter text-center text-lg-start mb-3 mb-lg-4 pb-lg-2">
              Your Vision, Our Code <br />
              <span className="gradient-text">Limitless Possibilities.</span>
            </h1>
            <p className="text-center text-lg-start mb-3 mb-lg-4 pb-lg-2">
              We transform ambitious ideas into high-performance software
              solutions, tailored, scalable, and built to drive real
              business results.
            </p>
            <Button variant="outline-success d-block mx-auto mx-lg-0">
              <Link to="/" className="text-base text-capitalize fw-semibold">
                Request a free quote
                <FaArrowRight
                  size={15}
                  className="ms-2"
                  style={{ color: "#A4CE3B" }}
                />
              </Link>
            </Button>
          </Col>
          <Col xl={5} lg={7} md={12} sm={12} className="position-relative">
            <div className="position-relative cards-grid">
              <div className="card-wrapper position-absolute">
                <HeroSectionCard
                  img={"/BoomPop_logo.png"}
                  name={"BoomPop"}
                  bgColor="#5858F640"
                />
              </div>
              <div className="card-wrapper position-absolute">
                <HeroSectionCard
                  img={"/adanione_logo.png"}
                  name={"Adani One"}
                  bgColor="#FFDAFC"
                />
              </div>
              <div className="card-wrapper position-absolute">
                <HeroSectionCard
                  img={"/TATA_NEU_logo.png"}
                  name={"Tata Neu"}
                  bgColor="#FFDAE9"
                />
              </div>
              <div className="card-wrapper position-absolute">
                <HeroSectionCard
                  img={"/WeCura_logo.png"}
                  name={"WeCura"}
                  bgColor="#DDF3FF"
                />
              </div>
            </div>
            <div
              className="description-box position-absolute w-100 bg-white text-sm"
            >
              <div className="desc">
                <p className="sm_text_6 sm_line_height_10 text-xs fw-medium mb-0">
                  The talent behind Connex Infotech has helped shape impactful
                  software projects while working with leading names
                  across industries.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
