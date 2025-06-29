import { Col, Container, Row } from "react-bootstrap";

const TechnologiesServices = () => {
  const techStacks = [
    {
      id: 1,
      name: "Mobile & Frontend Development",
      technologies: [
        {
          id: 1,
          icon: "/services/flutter_icon.svg",
          name: "Flutter",
        },
        {
          id: 2,
          icon: "/services/react_native_icon.svg",
          name: "React Native",
        },
        {
          id: 3,
          icon: "/services/swift_icon.svg",
          name: "Kotlind",
        },
        {
          id: 4,
          icon: "/services/firebase_icon.svg",
          name: "Firebase",
        },
      ],
    },
    {
      id: 2,
      name: "Web & Backend Developement",
      technologies: [
        {
          id: 1,
          icon: "/services/react_icon.svg",
          name: "React",
        },
        {
          id: 2,
          icon: "/services/angular_icon.svg",
          name: "Angular",
        },
        {
          id: 3,
          icon: "/services/laravel_icon.svg",
          name: "Laravel",
        },
        {
          id: 1,
          icon: "/services/python_icon.svg",
          name: "Python",
        },
        {
          id: 1,
          icon: "/services/node_icon.svg",
          name: "Node js",
        },
      ],
    },
    {
      id: 3,
      name: "Databses & Clound",
      technologies: [
        {
          id: 1,
          icon: "/services/mysql_icon.svg",
          name: "MySQL",
        },
        {
          id: 2,
          icon: "/services/mongodb_icon.svg",
          name: "Mongo DB",
        },
        {
          id: 3,
          icon: "/services/aws_icon.svg",
          name: "AWS",
        },
        {
          id: 4,
          icon: "/services/azure_icon.svg",
          name: "Azure",
        },
      ],
    },
    {
      id: 4,
      name: "AI & Machine Learning",
      technologies: [
        {
          id: 1,
          icon: "/services/tensorflow_icon.svg",
          name: "TensorFlow",
        },
      ],
    },
  ];

  return (
    <section className="position-relative py-4 my-2 my-lg-0 py-lg-5">
      <Container>
        <Row className="mb-lg-5">
          <Col lg={12} md={12} sm={12}>
            <div className="shadow-box">
              <div className="text-center mb-3 mb-lg-4 pb-lg-3">
                <img
                  src="/services/technologies_services_icon.svg"
                  height={100}
                  width={100}
                  className="img-fluid sm_size_36"
                />
              </div>

              <div>
                <h1 className="display-3 sm_text_22 text-center fw-semibold mb-1 mb-lg-3">
                  Technologies & Services
                </h1>
                <p className="sm_text_8 sm_line_height_10 text-center mb-lg-4">
                  As a modern software development agency, we don’t just follow
                  trends — we implement globally trusted technologies to build
                  platforms that grow with your business. Whether you're
                  launching a startup or scaling an enterprise product, we
                  leverage the best tools and stacks to deliver scalable,
                  secure, and high-performance solutions.
                </p>
              </div>

              <p className="d-flex justify-content-center py-3 mn-0">
                <span className="separator-sm"></span>
              </p>

              <div className="mb-lg-5">
                <h3 className="display-6 sm_text_11 text-center fw-semibold mb-1 mb-lg-3">
                  Powered by{" "}
                  <span className="gradient-text fw-bold">
                    Globally Recognized Technologies
                  </span>
                </h3>
                <p
                  className="sm_text_7 sm_line_height_8 text-base text-center mx-auto px-5 px-lg-0"
                  style={{ maxWidth: "675px" }}
                >
                  We carefully choose the right tools for each project to ensure
                  long-term success, seamless performance, and faster
                  time-to-market.
                </p>
              </div>

              {techStacks &&
                techStacks?.map((techStack) => {
                  return (
                    <div key={techStack?.id}>
                      <h4 className="fw-semibold sm_text_10 text-center mb-3 mb-lg-4 pb-lg-1">
                        {techStack?.name}
                      </h4>
                      <ul className="list-unstyled d-flex justify-content-center gap-24 sm_gap_7 mb-lg-5">
                        {techStack?.technologies &&
                          techStack?.technologies.map((technology) => {
                            return (
                              <li
                                className="technology d-flex justify-content-center align-items-center rounded-16 sm_rounded_4"
                                key={technology?.id}
                              >
                                <div>
                                  <img
                                    src={technology?.icon}
                                    alt={technology?.name}
                                    className="img-fluid sm_size_23"
                                  />
                                  <p className="sm_text_7 text-center mb-0">
                                    {technology?.name}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechnologiesServices;