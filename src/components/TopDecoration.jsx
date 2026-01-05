// By Gpt____________________________!!!!!!!!!!
import React from 'react';
import decorImage from "../assets/vector banner1.png"

const TopDecoration = () => {
    return (
        <div className="relative bg-[#f6fbfc] overflow-hidden py-24">

            {/* Decorative image */}
            <img
                src={decorImage}
                alt=""
                className="
      absolute top-10 left-1/2 -translate-x-1/2
      w-[90%] max-w-6xl
      opacity-90
      pointer-events-none
    "
            />

            {/* Text content */}
            <h2 className="
    relative z-10
    text-4xl font-bold text-[#6ad6a4]
    text-center
  ">
                Explore Our Awesome Toys
            </h2>

        </div>

    );
};

export default TopDecoration;