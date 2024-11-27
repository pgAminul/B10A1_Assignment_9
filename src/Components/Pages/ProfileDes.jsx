import React, { useContext } from "react";
import { ContextProvider } from "../Provider/Provider";
import { NavLink } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
export default function UserProfile() {
  const { user } = useContext(ContextProvider);
  return (
    <div className="overflow-hidden">
      <div className="h-[72px]">
        <Navbar />
      </div>
      <div className="overflow-hidden bg-gray-100 p-4 mt-4">
        <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-lg rounded-lg p-6">
          <div className="md:flex justify-between overflow-hidden">
            <div className="flex flex-col md:flex-row items-start">
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {user?.displayName}
                </h1>
                <p className="text-gray-600">{user?.email}</p>
                <div className="md:flex gap-4">
                  <p className="text-gray-600">Photo URL:</p>
                  <a
                    className="text-blue-600 underline"
                    href={user.photoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.photoURL}
                  </a>
                </div>
                <p>Bangladesh</p>
              </div>
            </div>
            <div>
              <NavLink
                to={"/profile"}
                className="mt-4 px-4 py-2 btn bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit Profile
              </NavLink>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
            <p className="mt-2 text-gray-600">
              Hello My Name is{" "}
              <strong className="text-red-500">{user.displayName}</strong> you
              can contact with me by email <strong> {user?.email}</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
