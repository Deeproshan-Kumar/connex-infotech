import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";

const categories = ["All", "Website & Mobile App", "Website", "Mobile App"];

function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* Filter Buttons */}
      <div className="text-center py-5">
        <ButtonGroup>
          {categories.map((cat) => (
            <Button
              className={`filter-btn ${
                activeFilter === cat ? "active-btn" : "inactive-btn"
              }`}
              key={cat}
              onClick={() => setActiveFilter(cat)}
            >
              <span>{cat}</span>
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {/* All */}
      {activeFilter === "All" && (
        <div className="project-showcase">
          <div className="background-1 position-relative bg-white">
            <div className="gradient-bg-graphics">
              <div className="design gradient-1a"></div>
              <div className="design gradient-2a"></div>
            </div>
            <Container fluid className="bg-text">
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 py-5">
                    <Image
                      src="portfolio/boom.png"
                      alt="BoomPop"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6} sm={6} className="py-5">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/boom.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold ">BoomPop</h2>
                      <p className="">
                        Built the backend system for this leading platform in
                        corporate event planning and remote team experiences.
                        Our work involved secure API development, microservice
                        architecture, and scalable server-side infrastructure
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-2 position-relative">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col
                    md={6}
                    sm={6}
                    className="text-center px-0 order-2 order-lg-2"
                  >
                    <Image src="portfolio/adani.png" alt="Adani One" fluid />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/adani.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold">Adani One</h2>
                      <p>
                        Adani One is a lifestyle and travel app that streamlines
                        the travel experience by providing features like flight
                        bookings, airport services, real-time updates, loyalty
                        programs, and exclusive offers, all in one seamless
                        platform.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-3 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-neu.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Neu</h2>
                      <p>
                        Tata Neu is a comprehensive lifestyle app offering
                        seamless shopping, travel, and payment experiences,
                        integrating various services from the Tata Group into
                        one platform for enhanced user engagement.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-neu-app.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-4 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/we-cura.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/we-cura.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">WeCura</h2>
                      <p>
                        WeCura and WeCura-Pro are healthcare management apps
                        that enable patient communication, appointment
                        scheduling, and medical record tracking. The apps aim to
                        simplify healthcare services for both patients and
                        medical professionals.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-5 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-studi.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-studi.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-6">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center">
                  <Col md={6} sm={6}></Col>
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-early.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Early edge</h2>
                      <p>
                        Tata EarlyEdge Home is an E-learning application for
                        Nursery, Junior KG, and Senior KG students, aimed at
                        fostering better learning habits. The app connects
                        various state boards and offers books, videos,
                        worksheets, audio, notes, ebooks, and images for an
                        interactive learning experience.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-7">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center position-relative ">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-4">
                        <img
                          src="portfolio/clients/tata-edge.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold mb-3">CE Polite</h2>
                      <p>
                        An interactive whiteboard app for teachers, CE Polite
                        allows educators to manage all syllabus-related content
                        assigned to them. It enables the creation of notes using
                        multiple shapes and freehand drawing, which are saved in
                        relation to the content being taught. This app enhances
                        the teaching experience by offering video, quiz, and
                        other content-related resources.
                      </p>
                    </div>
                  </Col>

                  {/* Right - Image Section */}
                  <Col md={6} sm={6} className="px-0">
                    <div className="text-end ce-image">
                      <div className="position-relative">
                        <div className="border-Custom">
                          <Image
                            src="portfolio/ce-polite.png"
                            alt="CE Polite"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-8">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/farmpik.png"
                      alt="farmpik"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-1">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/farmpik.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
      )}

      {/* Website */}
      {activeFilter === "Website" && (
        <div className="project-showcase">
          <div className="background-1 position-relative bg-white">
            <div className="gradient-bg-graphics">
              <div className="design gradient-1a"></div>
              <div className="design gradient-2a"></div>
            </div>
            <Container fluid className="bg-text">
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 py-5">
                    <Image
                      src="portfolio/boom.png"
                      alt="BoomPop"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6} sm={6} className="py-5">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/boom.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold ">BoomPop</h2>
                      <p className="">
                        Built the backend system for this leading platform in
                        corporate event planning and remote team experiences.
                        Our work involved secure API development, microservice
                        architecture, and scalable server-side infrastructure
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-7">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center position-relative ">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-4">
                        <img
                          src="portfolio/clients/tata-edge.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold mb-3">CE Polite</h2>
                      <p>
                        An interactive whiteboard app for teachers, CE Polite
                        allows educators to manage all syllabus-related content
                        assigned to them. It enables the creation of notes using
                        multiple shapes and freehand drawing, which are saved in
                        relation to the content being taught. This app enhances
                        the teaching experience by offering video, quiz, and
                        other content-related resources.
                      </p>
                    </div>
                  </Col>

                  {/* Right - Image Section */}
                  <Col md={6} sm={6} className="px-0">
                    <div className="text-end ce-image">
                      <div className="position-relative">
                        <div className="border-Custom">
                          <Image
                            src="portfolio/ce-polite.png"
                            alt="CE Polite"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
      )}

      {/* Website & Mobile App */}
      {activeFilter === "Website & Mobile App" && (
        <div className="project-showcase">
          <div className="background-1 position-relative bg-white">
            <div className="gradient-bg-graphics">
              <div className="design gradient-1a"></div>
              <div className="design gradient-2a"></div>
            </div>
            <Container fluid className="bg-text">
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 py-5">
                    <Image
                      src="portfolio/boom.png"
                      alt="BoomPop"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6} sm={6} className="py-5">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/boom.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold ">BoomPop</h2>
                      <p className="">
                        Built the backend system for this leading platform in
                        corporate event planning and remote team experiences.
                        Our work involved secure API development, microservice
                        architecture, and scalable server-side infrastructure
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-2 position-relative">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col
                    md={6}
                    sm={6}
                    className="px-0 text-center order-2 order-lg-2"
                  >
                    <Image src="portfolio/adani.png" alt="Adani One" fluid />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/adani.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold">Adani One</h2>
                      <p>
                        Adani One is a lifestyle and travel app that streamlines
                        the travel experience by providing features like flight
                        bookings, airport services, real-time updates, loyalty
                        programs, and exclusive offers, all in one seamless
                        platform.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-3 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-neu.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Neu</h2>
                      <p>
                        Tata Neu is a comprehensive lifestyle app offering
                        seamless shopping, travel, and payment experiences,
                        integrating various services from the Tata Group into
                        one platform for enhanced user engagement.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-neu-app.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-4 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/we-cura.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/we-cura.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">WeCura</h2>
                      <p>
                        WeCura and WeCura-Pro are healthcare management apps
                        that enable patient communication, appointment
                        scheduling, and medical record tracking. The apps aim to
                        simplify healthcare services for both patients and
                        medical professionals.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-5 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-studi.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-studi.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-6">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center">
                  <Col md={6} sm={6}></Col>
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-early.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Early edge</h2>
                      <p>
                        Tata EarlyEdge Home is an E-learning application for
                        Nursery, Junior KG, and Senior KG students, aimed at
                        fostering better learning habits. The app connects
                        various state boards and offers books, videos,
                        worksheets, audio, notes, ebooks, and images for an
                        interactive learning experience.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-7">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center position-relative ">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-4">
                        <img
                          src="portfolio/clients/tata-edge.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold mb-3">CE Polite</h2>
                      <p>
                        An interactive whiteboard app for teachers, CE Polite
                        allows educators to manage all syllabus-related content
                        assigned to them. It enables the creation of notes using
                        multiple shapes and freehand drawing, which are saved in
                        relation to the content being taught. This app enhances
                        the teaching experience by offering video, quiz, and
                        other content-related resources.
                      </p>
                    </div>
                  </Col>

                  {/* Right - Image Section */}
                  <Col md={6} sm={6} className="px-0">
                    <div className="text-end ce-image">
                      <div className="position-relative">
                        <div className="border-Custom">
                          <Image
                            src="portfolio/ce-polite.png"
                            alt="CE Polite"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-8">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/farmpik.png"
                      alt="farmpik"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-1">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/farmpik.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
      )}

      {/* Mobile App */}
      {activeFilter === "Mobile App" && (
        <div className="project-showcase">
          <div className="background-2 position-relative">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col
                    md={6}
                    sm={6}
                    className="px-0 text-center order-2 order-lg-2"
                  >
                    <Image src="portfolio/adani.png" alt="Adani One" fluid />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/adani.svg"
                          alt="client-logo"
                          className="img-fluid"
                        />
                      </div>
                      <h2 className="fw-bold">Adani One</h2>
                      <p>
                        Adani One is a lifestyle and travel app that streamlines
                        the travel experience by providing features like flight
                        bookings, airport services, real-time updates, loyalty
                        programs, and exclusive offers, all in one seamless
                        platform.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-3 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-neu.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Neu</h2>
                      <p>
                        Tata Neu is a comprehensive lifestyle app offering
                        seamless shopping, travel, and payment experiences,
                        integrating various services from the Tata Group into
                        one platform for enhanced user engagement.
                      </p>
                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-neu-app.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-4 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/we-cura.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-2">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/we-cura.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">WeCura</h2>
                      <p>
                        WeCura and WeCura-Pro are healthcare management apps
                        that enable patient communication, appointment
                        scheduling, and medical record tracking. The apps aim to
                        simplify healthcare services for both patients and
                        medical professionals.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-5 pt-5">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-studi.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={6} className="px-0">
                    <Image
                      src="portfolio/tata-studi.png"
                      alt="Tata Neu"
                      className="img-fluid "
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-6">
            <Container className="px-0">
              <Container fluid>
                <Row className="align-items-center">
                  <Col md={6} sm={6}></Col>
                  <Col md={6} sm={6}>
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/tata-early.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Early edge</h2>
                      <p>
                        Tata EarlyEdge Home is an E-learning application for
                        Nursery, Junior KG, and Senior KG students, aimed at
                        fostering better learning habits. The app connects
                        various state boards and offers books, videos,
                        worksheets, audio, notes, ebooks, and images for an
                        interactive learning experience.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <div className="background-8">
            <Container fluid>
              <Container className="px-0">
                <Row className="align-items-center">
                  <Col md={6} sm={6} className="px-0 order-2 order-lg-2">
                    <Image
                      src="portfolio/farmpik.png"
                      alt="farmpik"
                      className="img-fluid "
                    />
                  </Col>
                  <Col md={6} sm={6} className="order-1 order-lg-1">
                    <div className="ce-text">
                      <div className="logo-image mb-5">
                        <img
                          src="portfolio/clients/farmpik.svg"
                          alt="client-logo"
                          className="img-fluid rounded-12"
                        />
                      </div>
                      <h2 className="fw-bold">Tata Studi</h2>
                      <p>
                        Tata Studi is an E-learning application for Nursery to
                        12th grade students, designed to connect all state
                        boards. The app focuses on developing better learning
                        habits in students and includes features like Big Idea
                        videos, Revision videos, Practice tests, Notes, Studi
                        Plans, Digital tests, Oral tests, and Assignments.
                      </p>

                      <div className="mt-4">
                        <p className="fw-medium">Also Available On:</p>
                        <Image
                          src="portfolio/appstore.png"
                          alt="App Store"
                          width={100}
                        />
                        <Image
                          src="portfolio/google_play.png"
                          alt="Google Play"
                          width={140}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
      )}

      <div className="spacer"></div>
    </>
  );
}

export default ProjectShowcase;
