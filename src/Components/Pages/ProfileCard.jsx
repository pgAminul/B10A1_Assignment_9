import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../Provider/Provider";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ProfileCard() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  const { user, updateNewProfile } = useContext(ContextProvider);
  const Urlregex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  const naviage = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (name.trim() === "") {
      toast.error("please Write your name");
      return;
    }
    if (!Urlregex.test(photo)) {
      toast.error("invalid url photo");
      return;
    }
    updateNewProfile({ displayName: name, photoURL: photo });
    naviage("/profileEdit");
  };
  return (
    <div data-aos="zoom-in">
      <Helmet>
        <title>Career | Update</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="">
        <div className="flex justify-center items-center py-5 bg-gray-100">
          <div className="w-96 bg-white shadow-lg rounded-lg p-6 overflow-hidden">
            <div className="">
              <img
                src={user?.photoURL}
                alt="Profile Image"
                className="w-36 h-36 mx-auto rounded-full border-2 border-gray-300 shadow-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {user?.displayName}
              </h2>
              <div className="text-sm text-gray-600 flex items-center justify-between">
                <p>{user?.email}</p>
                <p>
                  {user?.emailVerified ? (
                    <span className="font-bold">Verified</span>
                  ) : (
                    <span className="text-red-700">Not Verified</span>
                  )}
                </p>
              </div>
              <p className="my-2">{user?.photoURL}</p>

              <NavLink
                to={"/profileEdit"}
                className="text-blue-500 text-sm underline"
              >
                View Profile
              </NavLink>
            </div>

            <form onSubmit={handleEdit} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo-url"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
