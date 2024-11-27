import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const handleErrorPage = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2 className="text-center font-bold text-red-700 text-5xl">
        OH NO 404! Please Go To Home
      </h2>
      <button
        onClick={handleErrorPage}
        className="btn mt-5 btn-error text-white"
      >
        Go To Home
      </button>
    </div>
  );
}
