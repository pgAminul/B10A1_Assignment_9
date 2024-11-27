import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaComment, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
    });
  }, []);

  const data = useLoaderData();
  const { id } = useParams();
  const selectedService = data.find((d) => d.id === parseInt(id));
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCommentSubmit = () => {
    if (comment) {
      setCommentsList((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const {
    image,
    rating,
    counselor,
    duration,
    pricing,
    briefDescription,
    category,
    serviceName,
  } = selectedService;

  return (
    <div>
      <Helmet>
        <title>Career | Details</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-[72px]">
        <Navbar />
      </div>
      <div
        data-aos="fade-right"
        className="max-w-4xl mx-auto my-8 bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg p-6"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={image}
              alt={serviceName}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3 text-blue-600">
              {serviceName}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Pricing:</strong> ${pricing}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Counselor:</strong> {counselor}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> {duration}
            </p>
            <p className="flex items-center text-gray-700 mb-2">
              <strong>Rating:</strong>{" "}
              <span className="flex items-center ml-2 text-yellow-500">
                {Array.from({ length: Math.floor(rating) }, (_, i) => (
                  <FaStar key={i} />
                ))}
                {rating % 1 !== 0 && <FaStarHalfAlt />}
              </span>
              <span className="ml-2 text-gray-600">({rating} / 5)</span>
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Description:</strong> {briefDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center mx-auto gap-2 mb-4 mt-5">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment"
            className="flex-grow p-2 border rounded-lg shadow-sm"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Comment
          </button>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">All Comments:</h4>
          {commentsList.length === 0 ? (
            <p className="text-gray-500">No Have Any Comment</p>
          ) : (
            <div className="space-y-2">
              {commentsList.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg flex items-center gap-2"
                >
                  <FaComment className="text-blue-500" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="my-5 text-center">
          <button onClick={handleBack} className="btn btn-error text-white">
            Back To Page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
