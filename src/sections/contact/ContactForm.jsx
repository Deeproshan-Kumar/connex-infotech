import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="position-relative py-2 py-lg-5">
      <Container>
        <Row>
          <Col lg={10} md={10} sm={10} className="pt-5 pb-3 py-lg-5 mx-auto">
            <div>
              <h1 className="display-3 text-black text-center fw-semibold mb-3">
                Let’s Build Something Amazing Together
              </h1>
              <p className="text-center mb-0">
                Ready to turn your idea into reality? Reach out and we’ll get
                back to you within 24 hours.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="display-6 text-black text-capitalize text-center text-lg-start fw-semibold mb-4">
              Have a <span className="gradient-text fw-bold">project?</span>
              <br /> We would{" "}
              <span className="gradient-text fw-bold">love</span> to{" "}
              <span className="gradient-text fw-bold">help</span>.
            </h3>
            <p>Prefer Direct Contact? Reach Out Instantly.</p>
            <ul className="list-unstyled sm_max_w_275 mx-auto mx-lg-0">
              <li className="contact-icon-list bg-white rounded-16 mt-4">
                <a href="mailto:contact@connexinfotech.com">
                  <div className="d-flex align-items-center p-3 p-lg-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        src="/contact/mail_icon.svg"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="ps-2 px-0 px-lg-3">
                      <p className="sm_text_10 text-base mb-0">Mail Us</p>
                      <p className="sm_text_10 sm_line_height_12 text-base text-black fw-medium mb-0">
                        contact@connexinfotech.com
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="contact-icon-list bg-white rounded-16 mt-4">
                <a href="tel:+91 93896 28434">
                  <div className="d-flex align-items-center p-3 p-lg-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        src="/contact/phone_icon.svg"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="ps-2 px-0 px-lg-3">
                      <p className="sm_text_10 text-base mb-0">For Sales Enquiry</p>
                      <p className="sm_text_10 sm_line_height_12 text-base text-black fw-medium mb-0">
                        +91 93896 28434
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="contact-icon-list bg-white rounded-16 mt-4">
                <a href="tel:+91 93896 28434">
                  <div className="d-flex align-items-center p-3 p-lg-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        src="/contact/hiring_icon.svg"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="ps-2 px-0 px-lg-3">
                      <p className="sm_text_10 text-base mb-0">For Hiring Enquiry</p>
                      <p className="sm_text_10 sm_line_height_12 text-base text-black fw-medium mb-0">
                        +91 93896 28434
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <li className="contact-icon-list bg-white rounded-16 mt-3 mt-lg-4">
                      <a href="#">
                        <div className="d-flex align-items-center p-3 p-lg-4">
                          <div className="icon d-flex justify-content-center align-items-center">
                            <img
                              src="/contact/whatsapp_icon.svg"
                              height={20}
                              width={20}
                            />
                          </div>
                          <div className="ps-2 px-0 px-lg-3">
                            <p className="sm_text_10 sm_line_height_12 text-base fw-semibold text-black mb-0">
                              What's App
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <li className="contact-icon-list bg-white rounded-16 mt-3 mt-lg-4">
                      <a href="#">
                        <div className="d-flex align-items-center p-3 p-lg-4">
                          <div className="icon d-flex justify-content-center align-items-center">
                            <img
                              src="/contact/linkedin_icon.svg"
                              height={20}
                              width={20}
                            />
                          </div>
                          <div className="ps-2 px-0 px-lg-3">
                            <p className="sm_text_10 sm_line_height_12 text-base fw-semibold text-black mb-0">
                              LinkedIn
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <li className="contact-icon-list bg-white rounded-16 mt-3 mt-lg-4">
                      <a href="#">
                        <div className="d-flex align-items-center p-3 p-lg-4">
                          <div className="icon d-flex justify-content-center align-items-center">
                            <img
                              src="/contact/upwork_icon.svg"
                              height={20}
                              width={20}
                            />
                          </div>
                          <div className="ps-2 px-0 px-lg-3">
                            <p className="sm_text_10 sm_line_height_12 text-base fw-semibold text-black mb-0">
                              Upwork
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <li className="contact-icon-list bg-white rounded-16 mt-3 mt-lg-4">
                      <a href="#">
                        <div className="d-flex align-items-center p-3 p-lg-4">
                          <div className="icon d-flex justify-content-center align-items-center">
                            <img
                              src="/contact/instagram_icon.svg"
                              height={20}
                              width={20}
                            />
                          </div>
                          <div className="ps-2 px-0 px-lg-3">
                            <p className="sm_text_10 sm_line_height_12 text-base fw-semibold text-black mb-0">
                              Instagram
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
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

                <div className="form-field mobile d-flex align-items-center position-relative">
                  <select name="country-codes">
                    <option value="+91" selected>
                      +91
                    </option>
                  </select>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile number"
                  />
                  <img src="/contact/mobile_icon.svg" className="icon" />
                </div>

                <div className="form-field">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Briefly describe your idea, goals, or technical needs ...."
                  ></textarea>
                </div>

                <label className="sm_text_10 mb-3">I am interested in</label>
                <div className="radios mb-3 mb-lg-4">
                  <input type="radio" name="r" id="mobile_app" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="mobile_app">Mobile App</label>
                  <input type="radio" name="r" id="web_design" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="web_design">Web Design</label>
                  <input type="radio" name="r" id="blockchain" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="blockchain">Block Chain</label>
                  <input type="radio" name="r" id="branding" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="branding">Branding</label>
                  <input type="radio" name="r" id="uiux" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="uiux">UI/UX</label>
                  <input type="radio" name="r" id="strategy_consultation" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="strategy_consultation">
                    Strategy & Consultation
                  </label>
                  <input type="radio" name="r" id="other" />
                  <label className="sm_text_10 text-base fw-medium" htmlFor="other">Other</label>
                </div>

                <p className="sm_text_9 text-sm fw-medium mb-4 pb-3">
                  <img
                    src="contact/insurance_icon.svg"
                    height={21}
                    width={21}
                    className="sm_size_12 me-1 me-lg-2"
                  />
                  Your idea is 100% confidential and protected by NDA.
                </p>
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
