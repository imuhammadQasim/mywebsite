import React, { useState } from "react";

const Gradient = () => {
    const [gradientStyle, setGradientStyle] = useState({
        background: "transparent",
        opacity: 0,
    });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Calculate percentage positions inside the container
        const xPos = ((clientX - left) / width) * 100;
        const yPos = ((clientY - top) / height) * 100;

        // Apply the gradient dynamically
        setGradientStyle({
            background: `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(30,58,138,0.6) 10%, rgba(0,0,0,0.5) 50%)`,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setGradientStyle({ background: "transparent", opacity: 0 });
    };

    return (
        <div>
            <div className="relative h-[400px] w-full bg-black overflow-hidden "
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                <div className="absolute inset-0 transition-opacity duration-300" style={gradientStyle} />
                <div className="relative z-10 p-10 text-white text-center">
                    <h1 className="text-3xl font-bold">Move your mouse here!</h1>
                    <p className="text-gray-300">Watch the magic gradient follow your cursor.</p>
                </div>
            </div>
        </div>
    );
};

export default Gradient;
