import { Row, Col } from "react-bootstrap";

const IconList = ({ icon, title, description }) => {
  return (
    <li className="mt-4">
      <Row>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className="icon bg-white d-flex justify-content-center align-items-center" style={{height: '80px', width: '80px', borderRadius: '100%', boxShadow: '0px 4px 20px 0px #0A2A301F'}}>
            <img src={icon} alt={title} />
          </div>
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <h4 className="fw-semibold line_height_23 ps-3 ps-xl-0">{title}</h4>
          <p className="text-base line_height_23 ps-3 ps-xl-0 mb-0">{description}</p>
        </Col>
      </Row>
    </li>
  );
};

export default IconList;