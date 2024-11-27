import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CareerCard() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      const url = "data.json";
      const res = await fetch(url);
      const data = await res.json();
      setCard(data);
    };
    fetchCard();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  return (
    <div>
      <h2
        className="text-4xl font-bold py-3 text-center my-5"
        data-aos="fade-left"
      >
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {card.map((singleCard) => {
          const {
            image,
            rating,
            counselor,
            duration,
            pricing,
            briefDescription,
            category,
            serviceName,
            id,
          } = singleCard;
          return (
            <div
              data-aos="fade-up"
              key={singleCard.id}
              className="card bg-base-100 w-96 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-48" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p className="text-gray-500">counselor: {counselor}</p>
                <p className="text-gray-500">Category: {category}</p>
                <p className="font-bold"> Price: $ {pricing}</p>
                <div className="card-actions">
                  <NavLink to={`/details/${id}`} className="btn btn-primary">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
