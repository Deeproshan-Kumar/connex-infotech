import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";


const ContactForm = () => {
  return (
    <section className="position-relative py-2 py-lg-5">
      <Container>
        <Row>
          <Col lg={10} md={10} sm={10} className="pt-5 pb-3 py-lg-5 mx-auto">
            <div>
              <h3 className="display-6 text-black text-center fw-bold mb-3">
                Your Future Starts Here Intern with <span className="gradient-text">Connex Infotech!</span>
              </h3>
              <p className="text-center mb-0">
               Explore real projects, upgrade your skills, and grow with the guidance of our tech pros. Apply now and make your mark!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className="order-2 order-md-2 order-lg-1 order-xl-1 img-ui">
            <img src="/internship/contact-img.png" className="img-fluid " />
            <img src="/internship/ellipse.png" className="img-fluid"/>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="order-1 order-md-1 order-lg-2 order-xl-2" >
            <div className="form-container bg-white rounded-16 p-4 p-lg-5">
              <form className="contact-form p-2 p-lg-0">
                <div className="form-field position-relative d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                  <img src="/contact/user_icon.svg" className="icon" />
                </div>

                <div className="form-field position-relative d-flex align-items-center">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <img src="/contact/mail_icon.svg" className="icon" />
                </div>
                <label className="sm_text_10 mb-3">I am interested in</label>
                <div className="form-field d-flex align-items-center position-relative">
                  <Form.Select>
                    <option value="Mobile App Development" selected>
                      Mobile App Development
                    </option>
                    <option value="Web Design">Web Design</option>
                    <option value="Blockchain">Blokchain</option>
                    <option value="Branding">Branding</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Strategy & Consulation">
                      Strategy & Consultaion
                    </option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </div>

                <Button
                  className="btn-primary fw-semibold border-0 text-white"
                  type="submit"
                >
                  Let's Talk
                  <FaArrowRight className="ms-2" />
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
