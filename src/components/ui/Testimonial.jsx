import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";

const Testimonial = ({ logo, company_name, quote, rating, user }) => {
  const { name, designation, avatar } = user;
  return (
    <div className="testimonial bg-white">
      <Row>
        <Col lg={5} md={5} sm={12}>
          <img src={logo} />
        </Col>
        <Col lg={7} md={7} sm={12}>
          <h6
            className="text-md fw-semibold text-start text-lg-end mb-0"
            style={{ color: "#212529" }}
          >
            - {company_name}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} className="py-5">
          <p className="text-md fw-medium line_height_32 mb-0">{quote}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} className="mb-3 mb-lg-0">
          <p className="text-base fw-medium mb-0">Rating</p>
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} color="#ffc107" />
          ))}
          <span
            className="text-base fw-semibold ps-2"
            style={{ color: "#212529" }}
          >
            {rating}.0
          </span>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Row className="align-items-center flex-nowrap">
            <Col lg={10} md={10} sm={10} xs={10}>
              <h6 className="text-md fw-semibold text-start text-lg-end mb-0">{name}</h6>
              <p className="text-base fw-normal text-start text-lg-end mb-0">{designation}</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <img src={avatar} height={56} width={56} alt="Profile" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;
