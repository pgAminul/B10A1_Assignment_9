import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { ContextProvider } from "../Provider/Provider";
import "../../App.css";
import Loader from "../Pages/Loader";

export default function Navbar() {
  const { user, logOut, loading } = useContext(ContextProvider);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="fixed top-0 z-50 w-[100%]">
      <div className="relative h-full w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-bold text-2xl font-unifraktur">CareerPro</div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div
            className={`flex-col md:flex md:flex-row items-center gap-x-5 absolute md:relative bg-white md:bg-transparent top-full left-0 w-full md:w-auto md:top-auto z-20 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex navbarLink flex-col md:flex-row ">
              <NavLink
                to={"/"}
                className="block py-2 md:py-0 px-4 hover:bg-gray-100 md:hover:bg-transparent"
              >
                Home
              </NavLink>
              <NavLink
                to={"/packages"}
                className="block py-2 md:py-0 px-4 hover:bg-gray-100 md:hover:bg-transparent"
              >
                Packages
              </NavLink>
              {user && (
                <NavLink
                  to={"/profile"}
                  className="block py-2 md:py-0 px-4 hover:bg-gray-100 md:hover:bg-transparent"
                >
                  Profile
                </NavLink>
              )}
            </div>

            <div className="flex items-center gap-x-3 mt-4 md:mt-0">
              <div className=" p-4 md:p-0 mx-auto md:mx-0">
                {user ? (
                  <div className="navNameHeader">
                    <img
                      src={user.photoURL}
                      className="w-10 h-10  rounded-full object-cover"
                      alt="User"
                    />
                    <div className="navName ">
                      <p>{user?.displayName}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className=" navbarLink px-4  text-black text-center mt-3 md:mt-0 md:inline-block">
              {user ? (
                <NavLink
                  className=" btn mb-3 md:mb-0"
                  to={"/login"}
                  onClick={logOut}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink className="btn mb-3 md:mb-0" to={"/login"}>
                  Login <IoPersonCircleSharp className="text-2xl" />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
