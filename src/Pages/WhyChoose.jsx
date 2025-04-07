import React from "react";

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Boost your online presence through targeted campaigns and strategic branding.",
    img: "icon-1.png",
  },
  {
    id: 2,
    title: "SEO Analytics",
    description:
      "Get in-depth SEO analysis to improve visibility and drive more traffic.",
    img: "icon-2.png",
  },
  {
    id: 3,
    title: "Social Marketing",
    description:
      "Engage your audience and grow your brand on all major social platforms.",
    img: "icon-3.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-red-500 bg-blue-900/20 px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
          Our Features
        </span>
        <h2 className="text-4xl font-bold mt-4">
          Grow Your Business with Digital Solutions
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We provide a range of digital services to help businesses expand
          their online presence and reach new customers effectively.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group p-[2px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Gradient border layer on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>

            {/* Card Content */}
            <div className="relative z-10 p-8 bg-[#111111] rounded-xl flex flex-col h-full border border-gray-800">
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-red-500 hover:text-red-600 transition duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
