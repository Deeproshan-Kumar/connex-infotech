import { Card } from "react-bootstrap";

const IconBox = ({icon, title, description}) => {
  return (
    <Card className="icon-box h-100 position-relative bg-white rounded-12 border-0 p-2 p-lg-3">
      <Card.Body>
        <img src={icon} alt={title} height={80} width={80} className="mb-4"/>
        <h3 className="fw-semibold mb-2">{title}</h3>
        <p className="text-base mb-0">{description}</p>
      </Card.Body>
    </Card>
  );
};

export default IconBox;