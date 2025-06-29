import { Card } from "react-bootstrap";

const HeroSectionCard = ({ img, name, bgColor }) => {
  return (
    <Card
      className="hero-section-card"
    >
      <Card.Body className="position-relative overflow-hidden p-0">
        <div className="d-flex justify-content-center align-items-center p-3">
            <Card.Img variant="center" src={img} className="h-100 w-100 object-fit-contain" />
        </div>
        <Card.Text
          className="position-absolute start-0 bottom-0 w-100 text-base fw-medium d-flex align-items-center justify-content-center"
          style={{ background: bgColor }}
        >
          {name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HeroSectionCard;