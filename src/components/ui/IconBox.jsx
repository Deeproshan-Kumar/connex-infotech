import { Card } from "react-bootstrap";

const IconBox = ({icon, title, description}) => {
  return (
    <Card className="icon-box h-100 position-relative bg-white rounded-12 border-0 p-0 p-lg-3">
      <Card.Body>
        <img src={icon} alt={title} height={80} width={80} className="sm_h_48 sm_w_48 mb-3 mb-lg-4"/>
        <h3 className="sm_text_14 fw-semibold mb-2">{title}</h3>
        <p className="sm_text_10 sm_line_height_14 text-base mb-0">{description}</p>
      </Card.Body>
    </Card>
  );
};

export default IconBox;