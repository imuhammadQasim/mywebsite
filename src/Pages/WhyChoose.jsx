import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies to give your business a digital edge.",
    img: "./download.svg",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Crafting visually appealing and user-friendly designs that elevate your brand.",
    img: "./download.svg",
  },
  {
    id: 3,
    title: "Digitak Marketing",
    description:
      "Enhance your website's SEO performance and track analytics for better results.",
    img: "./download.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-white border-red-500 border bg-blue-900/20 px-4 py-1 my-5 rounded-full text-sm font-semibold tracking-wider">
          Our Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 ">
          Drive Your Business Forward with Top-Notch Digital Solutions
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Tailored services to help you grow your business, elevate your brand,
          and capture your audience’s attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group p-[2px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Gradient border layer on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-yellow-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 md:p-8 bg-[#111111] rounded-xl flex flex-col h-full border border-gray-800">
              <img
                src={service.img}
                style={{ filter: "invert(1)" }}
                alt={service.title}
                className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 flex-grow text-sm md:text-base">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-3 md:mt-4 inline-flex items-center text-red-500 hover:text-red-600 transition duration-300 text-sm md:text-base"
              >
                Order Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;