import React from 'react';
import heroImg from '../assets/hero.png'
import Fringe2 from './Fringe2';

const HeroBanner = () => {
    return (
        <div className="mt-5">
            <div className='banner bg-[#bfe7f0] lg:flex '>
                <div className="banner-left lg:w-1/2 min-h-75 p-8 lg:p-0 flex justify-center items-center relative">
                    <div className="absolute top-0 w-full">
                        <Fringe2></Fringe2>
                    </div>
                    <div className='space-y-4 md:pl-25 md:pr-15'>
                        <h1 className="text-4xl md:text-6xl text-baloo font-extrabold bg-linear-to-r from-orange-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                            Play · Learn · Grow
                        </h1>

                        <p className="text-sm md:text-xl text-[#53b3abfb]">
                            Discover safe, colorful, and educational toys designed to inspire creativity, imagination, and happy childhood moments.
                        </p>
                        <a href="#popular-toys">
                        <button className='btn border-none rounded-full bg-linear-to-tl from-primary to-orange-400 text-white lg:mt-6 hover:brightness-110'>Explore Collections</button>
                        </a>
                    </div>
                    <div className="absolute w-full rotate-180 bottom-0">
                        <Fringe2></Fringe2>
                    </div>
                </div>
                <div className="banner-right lg:w-1/2 sm:h-1/2">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;

