import React from 'react'

const Hero = () => {
    return (
        <>
        <div className="container mx-auto px-6 md:px-30 py-10 md:py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-10">
        <div className="left-hero md:w-[50%]">
            <div className="inline-block text-blue-500 bg-blue-100 border-1 border-blue-200 text-sm px-2 md:px-6 py-1 md:py-1 rounded-sm">
                <span>🚀 :</span> 
                <span className="subtitle font-[inter]">Expert Strategies With SeoMax</span>
            </div>
            <div className="heading-con mt-5">
                <h1 className="text-4xl md:text-7xl font-bold text-black font-['Space_Grotesk']">
                    Search Engines With Our Expert SEO Solutions
                </h1>
                <p className="mt-5 text-gray-800 font-[Inter]">
                    Our dedicated team of SEO professionals is committed to driving targeted traffic to your website, increasing visibility and conversions.
                </p>
                <div className="flex gap-4 md:gap-7 mt-5">
                    <button className="bg-blue-500 hover:border transition-all duration-500 hover:border-blue-500 hover:text-blue-500 hover:bg-transparent text-white py-3 px-5 rounded-sm btn-primary">
                        Discover Our Expertise
                    </button>
                    <button className="hover:bg-blue-500 border-1 transition-all duration-500 border-blue-500 hover:text-white bg-transparent text-blue-500 py-3 px-5 rounded-sm btn-outline">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    
        {/* Right Section */}
        <div className="right-hero w-full flex justify-center items-center md:w-[50%]">
            <img
                src="https://seomax-react.vercel.app/assets/img/hero/hero1-main-img.png"
                alt="hero-sec-image"
                className=" sm:w-[60%] md:w-[80%]"
            />
        </div>
    </div>
    {/* -------------------------------------- */}
    
    </>
    )
}

export default Hero
