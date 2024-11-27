import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "../Pages/slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const Highlights = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
    });

    fetch("frist.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-blue-800 mb-6"
          data-aos="zoom-in"
        >
          Why Choose Our Career Counseling?
        </h2>
        <p
          data-aos="fade-right"
          className="text-lg text-center text-gray-600 mb-12"
        >
          Unlock your potential with personalized guidance tailored to your
          aspirations. We help you navigate your career path with clarity and
          confidence.
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 }, // ছোট screen এর জন্য সঠিক configuration
          }}
          className="custom-swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={`p-6 bg-blue-500 text-white h-[200px] rounded-lg shadow-md text-center transform transition-transform ${
                  index === 1 ? "scale-105" : ""
                }`}
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
