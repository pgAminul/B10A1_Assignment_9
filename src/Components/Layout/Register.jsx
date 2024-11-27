import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ContextProvider } from "../Provider/Provider";
import { Helmet } from "react-helmet";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase";
import backgroundLogin from "../../assets/google.png";
import google from "../../assets/google.png";

export default function Register() {
  const Passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const Urlregex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { signUp, setUser, profileUpdate } = useContext(ContextProvider);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  const fromSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (name.trim() === "") {
      toast.error("please Write your name");
      return;
    }

    if (!Urlregex.test(photo)) {
      toast.error("invalid url photo");
      return;
    }

    if (!regexEmail.test(email)) {
      toast.error("Invalid Email");
      return;
    }

    if (!Passregex.test(password)) {
      toast.error(
        "Invalid password! It must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters long."
      );
      return;
    }

    signUp(email, password)
      .then((res) => {
        setUser(res);
        profileUpdate({ displayName: name, photoURL: photo });
        setUser({ displayName: name, photoURL: photo });
        navigate("/");
        toast.success(" Successfully Registered");
      })
      .catch((e) => toast.error("Gmail Already Existed "));
  };

  const [show, setShow] = useState(false);
  const passwrodShow = () => {
    setShow(!show);
  };
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error during sign-in:", error);
      });
  };
  const googleHandle = () => {
    handleGoogleSignIn();
  };
  return (
    <div>
      <Helmet>
        <title>Career | Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-[72px]">
        <Navbar />
      </div>
      <div className="backgroundLogin py-5">
        <div className="card text-white py-4 max-w-md shadow-2xl mx-auto  h-full w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
          <form
            data-aos="fide-right"
            onSubmit={fromSubmit}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-xl bg-orange-100 text-black border-none outline-none"
                name="name"
              />
              <p className="text-red-600"></p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo (URL)</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="p-3 rounded-xl bg-orange-100 text-black border-none outline-none"
                name="photo"
              />
              <p className="text-red-600"></p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-xl bg-orange-100 text-black border-none outline-none"
                name="email"
              />
              <p className="text-red-600"></p>
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
                className=" cursor-pointer text-red-700 absolute mr-4 text-2xl right-0 top-12"
              >
                {show ? <IoEye /> : <IoEyeOffSharp />}
              </p>
              <p className="text-red-600"></p>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
          <button onClick={googleHandle} className="btn mb-4 w-[85%] mx-auto">
            <img src={google} className="w-6" alt="" />
            Login With Google
          </button>
          <p className="text-center mb-5">
            Already have an account?{" "}
            <NavLink to="/login" className="text-red-600">
              Login Now
            </NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
