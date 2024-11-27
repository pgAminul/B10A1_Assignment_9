import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../Provider/Provider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import Navabr from "./Navbar";
import Footer from "./Footer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import google from "../../assets/google.png";
export default function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);

  const inputRef = useRef();
  const { logIn, setForget } = useContext(ContextProvider);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state?.from || "/";

  const fromSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get("password");
    const email = form.get("email");

    logIn(email, password)
      .then((res) => {
        toast("Successfully Login");
        navigate(from);
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const forgetPassword = () => {
    const currentValue = inputRef.current?.value.trim();
    setForget(currentValue);
    navigate("/forgetPassword");
  };

  const passwrodShow = () => {
    setShow(!show);
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(from);
      })
      .catch((error) => {
        toast.error("Error during sign-in:", error);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Career | Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-[72px]">
        <Navabr />
      </div>
      <div className="backgroundLogin py-8">
        <div
          data-aos="fade-right"
          className="card text-white py-4 max-w-md shadow-2xl mx-auto  h-full w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100"
        >
          <form onSubmit={fromSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className=" p-3 rounded-xl bg-orange-100 text-black border-none outline-none "
                name="email"
                ref={inputRef}
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                className="p-3 rounded-xl bg-orange-100 text-black border-none outline-none"
                name="password"
              />
              <p
                onClick={passwrodShow}
                className="cursor-pointer text-red-600 absolute mr-4 text-2xl right-0 top-12"
              >
                {show ? <IoEye /> : <IoEyeOffSharp />}
              </p>
              <label className="mt-2">
                <NavLink
                  onClick={forgetPassword}
                  className="text-sm text-white"
                >
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn mb-4 w-[85%] mx-auto"
          >
            <img src={google} alt="" className="w-6" />
            Login With Google
          </button>
          <p className="text-center mb-5">
            Don't have an account?{" "}
            <NavLink to={"/register"} className="text-red-600">
              Register Now
            </NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
