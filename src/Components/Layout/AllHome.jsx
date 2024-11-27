import React from "react";
import Header from "./Header";
import CareerCard from "../Pages/CareerCard";
import ExtraFristPage from "../Pages/ExtraFristPage";
import ExtraSecondPage from "../Pages/ExtraSecondPage";
export default function AllHome() {
  return (
    <div>
      <Header />
      <div className="bg-base-200">
        <div className="flex justify-center pt-5 ">
          <CareerCard />
        </div>

        <div>
          <ExtraFristPage />
        </div>
        <div>
          <ExtraSecondPage />
        </div>
      </div>
    </div>
  );
}
