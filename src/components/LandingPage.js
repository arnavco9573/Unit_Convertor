import React from "react";
import img from "../assets/img.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleUnitConversionClick = () => {
    navigate("/unit-conversion");
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
            Welcome to My App
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Our unit converter allows you to easily convert between different
            units of measurement. Whether it's temperature, length, or any other
            unit, we've got you covered.
          </p>
          <p className="text-lg md:text-xl">
            Start converting now and make your calculations a breeze!
          </p>
        </div>

        <div className="text-center">
          <img
            src={img}
            alt="Unit Converter CTA"
            className="mx-auto w-64 h-auto"
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4 text-lg md:text-xl"
            onClick={handleUnitConversionClick}
          >
            Start Converting
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
