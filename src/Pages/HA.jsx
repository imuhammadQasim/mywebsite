import React from "react";
import { FaCheckCircle } from "react-icons/fa";     

const HA = () => {
  return (
    <div className="container mx-auto px-6 md:px-30 py-10 md:py-10 flex flex-col-reverse md:flex-row md:justify-between gap-10">
      <div className="right-hero w-full flex justify-center items-center md:w-[50%] bg-[url(/shape-img.png)] bg-center bg-no-repeat bg-contain">
        <img src="/person.png" alt="hero-sec-image" className="sm:w-[60%] md:w-[50%]" />
      </div>
      <div className="left-hero md:w-[50%] md:py-5">
        <div className="inline-block text-blue-500 bg-blue-100 border border-blue-200 text-sm px-2 md:px-6 py-1 rounded-sm">
          <span>🚀 :</span>
          <span className="subtitle font-[Inter]"> OUR EXPERT TEAM</span>
        </div>
        <div className="heading-con mt-5">
          <h2 className="text-4xl md:text-5xl font-bold text-black font-['Space_Grotesk']">
            Let’s make something awesome together
          </h2>
          <p className="mt-5 text-gray-800 font-[Inter]">
            Every pleasure is to be welcomed, and every pain avoided. Certain
            circumstances and owing to the claims welcomed and every pain
            avoided in specific situations.
          </p>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" size={16} />
              <span>Expert professionals with years of experience</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" size={16} />
              <span>Innovative and customized solutions for your needs</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" size={16} />
              <span>Dedicated support and client satisfaction</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" size={16} />
              <span>Cutting-edge technology for top-notch results</span>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="mt-6">
            <button className="bg-blue-500 border-1 transition-all duration-500 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 py-3 px-5 rounded-sm btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HA;
