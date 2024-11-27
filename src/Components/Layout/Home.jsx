import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>CareerPro | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className="h-[72px]">
        <Navbar />
      </section>
      <Outlet />

      <section>
        <Footer />
      </section>
    </div>
  );
}
