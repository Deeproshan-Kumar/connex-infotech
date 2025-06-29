import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";

const Testimonial = ({ logo, company_name, quote, rating, user }) => {
  const { name, designation, avatar } = user;
  return (
    <div className="testimonial bg-white">
      <Row>
        <Col lg={5} md={5} sm={3} xs={3}>
          <img src={logo} className="w-sm-100" />
        </Col>
        <Col lg={7} md={7} sm={9} xs={9}>
          <h6
            className="text-md fw-semibold text-end sm_text_8 sm_line_height_10 mb-0"
            style={{ color: "#212529" }}
          >
            - {company_name}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} className="py-3 py-lg-5">
          <p className="text-md fw-medium line_height_32 sm_text_7 sm_line_height_11 mb-0">
            {quote}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} className="mb-lg-0">
          <div>
            <p className="sm_text_6 text-base fw-medium mb-0">
              Rating
            </p>
            <div className="d-flex align-items-center">
              {Array.from({ length: rating }, (_, i) => (
                <FaStar key={i} color="#ffc107" className="sm_size_6" />
              ))}
              <span
                className="sm_text_6 text-base fw-semibold ps-1 ps-lg-2"
                style={{ color: "#212529" }}
              >
                {rating}.0
              </span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <Row className="align-items-center flex-nowrap">
            <Col lg={10} md={10} sm={9} xs={9}>
              <div>
                <h6 className="sm_text_7 sm_line_height_normal text-md fw-semibold text-start text-lg-end mb-0">
                  {name}
                </h6>
                <p className="sm_text_6 text-base fw-normal text-start text-lg-end mb-0">
                  {designation}
                </p>
              </div>
            </Col>
            <Col lg={2} md={2} sm={3} xs={3} className="text-end ps-0">
              <img
                src={avatar}
                height={56}
                width={56}
                alt="Profile"
                className="sm_size_20"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;
