import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
function Package() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  return (
    <div data-aos="fade-up-left">
      <Helmet>
        <title>Career | Package</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-[72px]">
        <Navbar />
      </div>
      <div className="min-h-screen mt-5 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800">
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-8 px-4 text-center">
          <h1 data-aos="fide-left" className="text-4xl font-bold">
            Our Career Counseling Packages
          </h1>
          <p className="mt-2 text-lg">
            Explore our variety of services designed to guide you to your career
            success.
          </p>
        </header>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Choose a Package
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                <div className="bg-blue-500 text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">
                    Career Counseling Session
                  </h3>
                  <p className="text-sm mt-2">
                    Personalized one-on-one advice for your career development.
                  </p>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-lg font-bold">Price: $150</p>
                  <p className="text-sm text-gray-600">Duration: 60 minutes</p>
                  <p className="mt-4">
                    Schedule a session with one of our expert counselors to get
                    tailored advice on your career path. Whether you're
                    exploring new opportunities or navigating a career
                    transition, we've got you covered.
                  </p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                <div className="bg-teal-500 text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">Resume Review</h3>
                  <p className="text-sm mt-2">
                    Get expert feedback to enhance your resume and stand out.
                  </p>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-lg font-bold">Price: $75</p>
                  <p className="text-sm text-gray-600">Duration: 30 minutes</p>
                  <p className="mt-4">
                    Our counselors will provide detailed feedback on your resume
                    to help you highlight your strengths and improve your
                    chances of landing an interview.
                  </p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                <div className="bg-indigo-500 text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">
                    Job Interview Preparation
                  </h3>
                  <p className="text-sm mt-2">
                    Prepare for your next job interview with mock interviews.
                  </p>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-lg font-bold">Price: $100</p>
                  <p className="text-sm text-gray-600">Duration: 45 minutes</p>
                  <p className="mt-4">
                    Boost your confidence with mock interviews and get
                    personalized feedback to improve your performance.
                  </p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                <div className="bg-red-500 text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">
                    LinkedIn Profile Optimization
                  </h3>
                  <p className="text-sm mt-2">
                    Enhance your LinkedIn profile to attract more opportunities.
                  </p>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-lg font-bold">Price: $80</p>
                  <p className="text-sm text-gray-600">Duration: 30 minutes</p>
                  <p className="mt-4">
                    Our experts will optimize your LinkedIn profile to make sure
                    you get noticed by recruiters and hiring managers.
                  </p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                <div className="bg-green-500 text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">
                    Career Path Exploration
                  </h3>
                  <p className="text-sm mt-2">
                    Explore different career paths based on your skills and
                    interests.
                  </p>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-lg font-bold">Price: $120</p>
                  <p className="text-sm text-gray-600">Duration: 60 minutes</p>
                  <p className="mt-4">
                    Our counselors will help you explore career options that
                    align with your values, skills, and interests, guiding you
                    toward a fulfilling professional future.
                  </p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Package;
