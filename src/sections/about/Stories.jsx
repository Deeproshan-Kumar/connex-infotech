import { Col, Container, Row } from "react-bootstrap";

const Stories = () => {
  return (
    <section className="position-relative mb-5" aria-label="Our Stories">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className="display-3 fw-semibold text-center mb-4 mb-lg-5 pb-lg-5">
              Our Stories, So Far
            </h1>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="stories-container d-flex justify-content-center justify-content-lg-between flex-wrap">
              <article className="story position-relative mb-4 mb-lg-0">
                <div className="mb-4 pb-lg-2">
                  <img src="/about/briefcase.svg" className="sm_size_30" height={62} width={62} />
                </div>
                <h2 className="display-5 sm_text_24 fw-semibold">2+</h2>
                <p className="sm_text_8 sm_line_height_12 text-sm line_height_24 fw-medium text-uppercase" style={{color: '#393D41'}}>Years of Industry Experience</p>
              </article>
              <article className="story position-relative mb-4 mb-lg-0">
                <div className="mb-4 pb-lg-2">
                  <img src="/about/rocket.svg" className="sm_size_30" height={62} width={62} />
                </div>
                <h2 className="display-5 sm_text_24 fw-semibold">20+</h2>
                <p className="sm_text_8 sm_line_height_12 text-sm line_height_24 fw-medium text-uppercase" style={{color: '#393D41'}}>Projects Delivered Across Mobile & Web</p>
              </article>
              <article className="story position-relative mb-4 mb-lg-0">
                <div className="mb-4 pb-lg-2">
                  <img src="/about/peoples.svg" className="sm_size_30" height={62} width={62} />
                </div>
                <h2 className="display-5 sm_text_24 fw-semibold">10,000+</h2>
                <p className="sm_text_8 sm_line_height_12 text-sm line_height_24 fw-medium text-uppercase" style={{color: '#393D41'}}>End Users Impacted</p>
              </article>
              <article className="story position-relative mb-4 mb-lg-0">
                <div className="mb-4 pb-lg-2">
                  <img src="/about/globe.svg" className="sm_size_30" height={62} width={62} />
                </div>
                <h2 className="display-5 sm_text_24 fw-semibold">8+</h2>
                <p className="sm_text_8 sm_line_height_12 text-sm line_height_24 fw-medium text-uppercase" style={{color: '#393D41'}}>Countries Served (US, brazil, Canada, Australia, UK etc.)</p>
              </article>
              <article className="story position-relative mb-4 mb-lg-0">
                <div className="mb-4 pb-lg-2">
                  <img src="/about/five_star.svg" className="sm_size_30" height={62} width={62} />
                </div>
                <h2 className="display-5 sm_text_24 fw-semibold">5-Star</h2>
                <p className="sm_text_8 sm_line_height_12 text-sm line_height_24 fw-medium text-uppercase" style={{color: '#393D41'}}>Client Ratings on Google , Upwork & Direct Engagements</p>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stories;
