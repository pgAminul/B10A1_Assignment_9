import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import frist from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import tree from "../../assets/3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);

  const slides = [
    {
      img: frist,
      text: "Unlock your path to success with personalized career guidance.",
    },
    {
      img: second,
      text: "Navigate the complexities of career planning with confidence.",
    },
    {
      img: tree,
      text: "Take the first step toward a fulfilling career.",
    },
  ];

  return (
    <div data-aos="fade-right" className="my-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onMouseEnter={(swiper) => swiper.autoplay.stop()} // Pause on hover
        onMouseLeave={(swiper) => swiper.autoplay.start()} // Resume autoplay
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center px-4 justify-center bg-black bg-opacity-50">
                <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mx-4 text-white text-center px-6">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
