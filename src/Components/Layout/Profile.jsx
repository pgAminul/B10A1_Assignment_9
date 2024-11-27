import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfileCard from "../Pages/ProfileCard";

export default function Porfile() {
  return (
    <div>
      <div className="h-[72px]">
        <Navbar />
      </div>
      <ProfileCard />
      <Footer />
    </div>
  );
}
