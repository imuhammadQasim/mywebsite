import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Courtney Henry",
    role: "Nursing Assistant",
    review:
      "Consectetur adipiscing elit. Integer nunc vPorta pretium metus aliquam eget maecenas porta nunc viverraPorta pretium metus aliquam eget maecenas porta nunc viverraPorta pretium metus aliquam eget maecenas porta nunc viverraiverra laoreet est. Porta pretium metus aliquam eget maecenas porta nunc viverra.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Esther Howard",
    role: "Nursing Assistant",
    review:
      "Consectetur adipiscing elit. Integer nPorta Porta pretium metus aliquam eget maecenas porta nunc viverrapretium metus aliquam eget maecenas porta nunc viverraPorta pretium metus aliquam eget maecenas porta nunc viverraunc viverra laoreet est. Porta pretium metus aliquam eget maecenas porta nunc viverra.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 md:px-20 py-16">
      <div className="text-center">
        <span className="text-lg font-medium text-gray-500">TESTIMONIALS</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">What Our Awesome Customers Say</h2>
        <p className="text-gray-500 mt-4 italic max-w-xl mx-auto">
          The long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      
      <div className="mt-12 flex items-center gap-6 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative shadow-sm border-gray-100 border-2 bg-gray-50 px-15 py-6 rounded-xl flex flex-col w-full md:w-1/2"
          >
            <FaQuoteRight className="text-blue-500 text-3xl absolute top-4 right-6" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-gray-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">{testimonial.review}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-500 border-blue-500">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;