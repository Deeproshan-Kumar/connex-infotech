import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ serviceName, serviceDesc, serviceTypes, cta }) => {
  return (
    <Card className="service-card h-100 rounded-12 border-0 p-0 p-xl-4">
      <Card.Body className="pb-0">
        <h2 className="sm_text_13 sm_line_height_16 fw-semibold mb-1 mb-lg-3 pe-xl-4">{serviceName}</h2>
        <Card.Text className="sm_text_7 sm_line_height_10 text-base mb-2 mb-lg-3 pe-xl-4">{serviceDesc}</Card.Text>
        <ul className="ps-0 mb-0">
          {serviceTypes?.map((serviceType, index) => {
            return (
              <li key={index} className="list-unstyled mb-1 mb-lg-4">
                <span className="me-2 me-lg-3 me-xl-4">
                  <img src={serviceType?.icon} className="sm_h_10 sm_w_10" height={20}/>
                </span>
                <span
                  className="fw-medium sm_text_8"
                  style={{ fontSize: "20px", color: "#334055" }}
                >
                  {serviceType?.name}
                </span>
              </li>
            );
          })}
        </ul>
      </Card.Body>
      <Card.Footer className="text-center border-0 bg-transparent">
        <button
          className="btn-primary  border-0 mb-2 mb-lg-0"
          style={{ boxShadow: "0px 5px 10px 0px #21252929" }}
        >
          <Link to={cta?.link} className="text-white fw-semibold">
            {cta?.text}
            <FaArrowRight className="ms-1 ms-lg-2" />
          </Link>
        </button>
      </Card.Footer>
    </Card>
  );
};

export default ServiceCard;
