import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SuccessStories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  const testimonials = [
    {
      name: "Sarah Johnson",
      image:
        "https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "The career counseling sessions helped me identify my strengths and pursue my dream job. Highly recommended!",
      designation: "Marketing Specialist",
    },
    {
      name: "Michael Brown",
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "I was lost in my career path, but the guidance I received here changed everything. I’m now confident in my journey.",
      designation: "Software Engineer",
    },
    {
      name: "Emily Davis",
      image:
        "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      feedback:
        "The tailored advice was exceptional! I landed my ideal role thanks to the clarity provided by the sessions.",
      designation: "UI/UX Designer",
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="zoom-in-up"
          className="text-4xl font-bold text-center text-blue-800 mb-6"
        >
          Our Success Stories
        </h2>
        <p
          data-aos="zoom-in"
          className="text-lg text-center text-gray-600 mb-12"
        >
          Hear from individuals who transformed their careers with our guidance.
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
