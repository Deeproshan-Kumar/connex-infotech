import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ serviceName, serviceDesc, serviceTypes, cta }) => {
  return (
    <Card className="service-card h-100 rounded-12 border-0 p-2 p-xl-4">
      <Card.Body className="pb-0">
        <h2 className="fw-semibold mb-3 pe-xl-4">{serviceName}</h2>
        <Card.Text className="text-base pe-xl-4">{serviceDesc}</Card.Text>
        <ul className="ps-0 mb-0">
          {serviceTypes?.map((serviceType, index) => {
            return (
              <li key={index} className="list-unstyled mb-4">
                <span className="me-3 me-xl-4">
                  <img src={serviceType?.icon} height={20}/>
                </span>
                <span
                  className="fw-medium"
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
          className="btn-primary  border-0"
          style={{ boxShadow: "0px 5px 10px 0px #21252929" }}
        >
          <Link to={cta?.link} className="text-white fw-semibold">
            {cta?.text}
            <FaArrowRight className="ms-2" />
          </Link>
        </button>
      </Card.Footer>
    </Card>
  );
};

export default ServiceCard;
