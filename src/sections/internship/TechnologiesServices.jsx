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
    <section className="position-relative ">
      <Container>
        <Row className="mb-lg-5">
          <Col lg={12} md={12} sm={12}>
            <div>
              <div>
                <h1 className="display-4 sm_text_22 text-center fw-semibold mb-1 mb-lg-3">
                  Technologies Covered in Our Internship
                </h1>
                <p className="sm_text_8 sm_line_height_10 text-center mb-lg-4">
                We provide internships in a wide range of high-demand technologies, including:
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