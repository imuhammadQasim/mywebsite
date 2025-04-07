import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute md:right-20 right-12 top-[-90px] -translate-y-1/2 hover:bg-blue-500 text-blue-500 hover:text-white p-3 rounded-full cursor-pointer z-10 border-blue-500 border-1 bg-transparent transition-all duration-500"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute md:right-0 right-0 top-[-90px] -translate-y-1/2 hover:bg-blue-500 text-blue-500 hover:text-white p-3 rounded-full cursor-pointer z-10 border-blue-500 border-1 bg-transparent transition-all duration-500"
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </div>
  );
};

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container  md:px-30 mx-auto p-6 py-20">
      <div className=" mb-10 px-4">
        <span className="text-blue-500 uppercase bg-blue-100 px-4 py-1 rounded-sm text-sm font-semibold">
          Our Service
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Our Passion Which we Provide
        </h2>
        <p className="text-gray-600 mt-2">
          Pellentesque ut vehicula sapien dictumst. Maecenas ante.
        </p>
      </div>
      <Slider {...settings}>
        <div className="p-4">
          <div className="border-gray-200 border-2 shadow-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold text-blue-500">Web Development</h3>
            <p className="text-sm text-gray-700">
              We build high-performance websites tailored to your business needs. From simple landing pages to complex web applications, our team ensures responsive design, fast loading speeds, and user-friendly experiences. We specialize in modern frameworks like React, Vue, and Next.js, offering customized solutions that enhance user engagement and boost your online presence.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border-gray-200 border-2 shadow-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold text-blue-500">Graphic Design</h3>
            <p className="text-sm text-gray-700">
              Our creative team delivers stunning visuals that elevate your brand identity. Whether you need professional logo design, branding kits, social media graphics, or marketing materials, we craft designs that capture attention and convey your brand message effectively. We focus on aesthetics, consistency, and audience engagement to help you stand out in a crowded market.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border-gray-200 border-2 shadow-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold text-blue-500">SEO Optimization</h3>
            <p className="text-sm text-gray-700">
              Want to rank higher on Google? Our SEO experts use advanced strategies to improve your website’s search visibility. We optimize website speed, meta tags, and content while implementing keyword research and backlink strategies. Our approach focuses on on-page and off-page SEO techniques, ensuring long-term growth and organic traffic for your business.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border-gray-200 border-2 shadow-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold text-blue-500">Digital Marketing</h3>
            <p className="text-sm text-gray-700">
              Our digital marketing services help businesses generate leads and sales through targeted campaigns. We specialize in social media marketing, paid ads, email marketing, and conversion optimization. Using data-driven strategies, we create personalized campaigns that reach your ideal customers and drive measurable results, 
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border-gray-200 border-2 shadow-md p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold text-blue-500">Mobile App Development</h3>
            <p className="text-sm text-gray-700">
              We develop high-quality mobile applications for iOS and Android. Whether you need a business app, eCommerce platform, or custom enterprise solution, we use the latest technologies like Flutter and React Native to build scalable, high-performance apps that deliver exceptional user experiences.that deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl py-2 font-semibold">E-Commerce Solutions</h3>
            <p className="text-sm">
              Our eCommerce development services include Shopify, WooCommerce, and custom solutions. We design and develop secure, user-friendly online stores with smooth payment integration, inventory management, and seamless checkout processes, ensuring a flawless shopping experience for your customers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem?
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
