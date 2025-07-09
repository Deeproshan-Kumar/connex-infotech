import { Col, Container, Row } from "react-bootstrap";
import roadmapData from "../../utils/roadmap";
import RoadmapCard from "../../components/ui/RoadmapCard";

const InternshipProgram = () => {
  return (
    <section id="internship-program-roadmap" aria-label="Internship Program Roadmap">
      <Container className="py-3 py-lg-5">
        <Row>
          <Col xl={8} className="mx-auto">
            <h2 className="h2 fw-semibold text-center mb-2 mb-lg-4">Internship Program Roadmap</h2>
          </Col>
        </Row>

        {/* Render Cards by Level */}
        {roadmapData.map((levelData, index) => (
          <div key={index} className="level-container mb-lg-5">
            <div className="level-header mb-4 text-center">
              <h4 className="fw-semibold sm_text_18 d-flex align-items-center justify-content-center">
               <img src={levelData.icon} alt="calendar" className="me-2 fit-calendar-img" />
                {levelData.level}
              </h4>
              <p className="fw-medium">{levelData.goal}</p>
            </div>

            <Row className="services justify-content-center">
              {levelData.sections.map((section, sectionIndex) => (
                <Col key={sectionIndex} lg={4} md={6} sm={6} xs={6} className="service mb-lg-0 mb-4">
                  <RoadmapCard
                    title={section.title}
                    week={section.week}
                    items={section.items}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default InternshipProgram;
