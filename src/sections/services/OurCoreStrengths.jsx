import { Container, Row, Col } from "react-bootstrap";

const OurCoreStrengths = () => {
  const strengths = [
    {
      id: 1,
      img: "/services/mobile_app_development.svg",
      title: "Mobile App Development",
      description:
        "We build high-performance iOS and Android apps tailored to your business goals. From MVPs to enterprise-grade solutions — built in Flutter, React Native, or native code.",
      services: [
        {
          id: 1,
          name: "Cross-Platform & Native Apps",
        },
        {
          id: 2,
          name: "App Store Deployment & Ongoing Support",
        },
        {
          id: 3,
          name: "Integrated APIs & Backend Systems",
        },
      ],
    },
    {
      id: 2,
      img: "/services/web_app_development.svg",
      title: "Web App Development",
      description:
        "We craft scalable web platforms that streamline your operations and enhance user engagement — built with React, Next.js, Node.js, and Laravel.",
      services: [
        {
          id: 1,
          name: "SaaS Platforms, Admin Panels, CRMs",
        },
        {
          id: 2,
          name: "Custom APIs & Real-Time Features",
        },
        {
          id: 3,
          name: "Secure & Scalable Architecture",
        },
      ],
    },
    {
      id: 3,
      img: "/services/web_development.svg",
      title: "Website Development",
      description:
        "Modern, responsive websites that communicate your brand and convert your visitors — built with Webflow, WordPress, or custom stacks.",
      services: [
        {
          id: 1,
          name: "Business & Portfolio Websites",
        },
        {
          id: 2,
          name: "eCommerce Stores with Shopify / WooCommerce",
        },
        {
          id: 3,
          name: "SEO-Optimized & Performance-Tuned",
        },
      ],
    },
    {
      id: 4,
      img: "/services/ai.svg",
      title: "AI-Powered Solutions",
      description:
        "We implement intelligent systems that help you automate tasks, extract insights, and drive smarter decisions.",
      services: [
        {
          id: 1,
          name: "Chatbots, Predictive Analytics & NLP",
        },
        {
          id: 2,
          name: "Custom AI Model Integration",
        },
        {
          id: 3,
          name: "AI Consulting for Scalable Use Cases",
        },
      ],
    },
    {
      id: 5,
      img: "/services/uxui.svg",
      title: "UI/UX Design",
      description:
        "Designs that don’t just look good, but feel intuitive. We craft user-centric experiences and strong brand identities.",
      services: [
        {
          id: 1,
          name: "Mobile & Web Design",
        },
        {
          id: 2,
          name: "Prototype & Wireframe",
        },
        {
          id: 3,
          name: "Visual Design",
        },
      ],
    },
    {
      id: 5,
      img: "/services/target.svg",
      title: "Strategy & Product Consulting",
      description:
        "We guide businesses and offer services like roadmap definition, market analysis, and execution strategies to reduce time-to-market and ensure product success.",
      services: [
        {
          id: 1,
          name: "End-to-End Product Support",
        },
        {
          id: 2,
          name: "Product Roadmap Guidance",
        },
        {
          id: 3,
          name: "Reduced Time-to-Market",
        },
      ],
    },
  ];

  return (
    <section
      className="position-relative gradient-bg pt-4 pt-lg-5 pb-2 pb-lg-4"
      aria-label="Our Core Strengths"
    >
      <Container>
        <Row className="mb-4 mb-lg-5">
          <Col lg={10} md={12} sm={12} className="mx-auto">
            <h1 className="display-3 text-center text-white fw-semibold mb-3">
              Our Core Strengths
            </h1>
            <p className="text-white text-center mb-0">
              We combine strategy, design, and engineering to create digital
              experiences that deliver real business value. Our
              multidisciplinary team collaborates to provide innovative
              solutions that help you achieve your business goals. Explore our
              services below to see how we can support your success.
            </p>
          </Col>
        </Row>
        <Row>
          {strengths &&
            strengths.map((strength) => {
              return (
                <Col lg={6} md={6} sm={6} xs={6} key={strength?.id} className="mb-3 mb-lg-4">
                  <article className="h-100 bg-white rounded-12 p-3 p-lg-5" style={{boxShadow: '0px 4px 28px 0px #0000000F'}}>
                    <div className="mb-2 mb-lg-4">
                      <img src={strength?.img} className="img-fluid sm_size_25" height={80} width={80} />
                    </div>
                    <h4 className="sm_text_10 fw-semibold mb-1 mb-lg-3 pb-lg-1">{strength?.title}</h4>
                    <p className="sm_text_6 sm_line_height_9">{strength?.description}</p>
                    <ul className="list-unstyled mt-lg-4 mb-0">
                      {strength?.services &&
                        strength?.services.map((service) => {
                          return (
                            <li key={service?.id} className="sm_text_7 fw-medium mt-1 mt-lg-3">
                              <img src="/services/check.svg" className="sm_size_8 img-fluid me-1 me-lg-3"/>
                              {service?.name}
                            </li>
                          );
                        })}
                    </ul>
                  </article>
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default OurCoreStrengths;