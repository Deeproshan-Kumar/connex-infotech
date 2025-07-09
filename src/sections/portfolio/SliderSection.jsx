import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const slides = [
  { img: "/portfolio/slider-1.png", alt: "Tata Studi" },
  { img: "/portfolio/slider-2.png", alt: "Adani One" },
  { img: "/portfolio/slider-3.png", alt: "BoomPop" },
  { img: "/portfolio/slider-4.png", alt: "WeCura" },
  { img: "/portfolio/slider-5.png", alt: "Tata Nue" },
  { img: "/portfolio/slider-6.png", alt: "Frampik" },
  { img: "/portfolio/slider-7.png", alt: "Tata Class Edge" },
];

const SliderSection = () => {
  return (
    <section className="slider-section pb-5 bg-fff position-relative">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className="px-0">
            <Swiper
              modules={[Autoplay]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              initialSlide={Math.floor(slides.length / 2)}
              slidesPerView={5}
              spaceBetween={25}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper portfolioSwiper"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="img-fluid carousel-image w-100"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SliderSection;
