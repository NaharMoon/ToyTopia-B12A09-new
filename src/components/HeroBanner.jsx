import React from 'react';
import heroImg from '../assets/hero.png'
import Fringe2 from './Fringe2';
import FringeDesign from './FringeDesign';
import BannerVector from './BannerVector';

const HeroBanner = () => {
    return (
        <div className="mt-5">
            <div className="">
                {/* <BannerVector></BannerVector>  */}
            </div>
            <div className='banner bg-[#bfe7f0] lg:flex '>
                <div className="banner-left lg:w-1/2 min-h-75 p-8 lg:p-0 flex justify-center items-center relative">
                    <div className="absolute top-0 w-full">
                        <Fringe2></Fringe2>
                    </div>
                    <div className='space-y-4 md:pl-20 md:pr-15'>
                        {/* <p className='text-4xl md:text-5xl text-orange-400 font-extrabold text-baloo'>Play • Learn • Grow</p> */}
                        <h1 className="text-4xl md:text-6xl text-baloo font-extrabold bg-linear-to-r from-orange-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                            Play · Learn · Grow
                        </h1>

                        <p className="text-sm md:text-xl text-[#53b3abfb]">
                            {/*  text-[#53b3abfb] */}
                            Discover safe, colorful, and educational toys designed to inspire creativity, imagination, and happy childhood moments.
                        </p>
                        <button className='btn border-none rounded-full bg-linear-to-tl from-primary to-orange-400 text-white lg:mt-6 hover:brightness-110'>Explore Collections</button>
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


// import { useEffect, useState } from "react";
// import heroImg from "../assets/hero.png";

// const HeroBanner = () => {
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         // component load হওয়ার একটু পরে animation শুরু হবে
//         setTimeout(() => {
//             setShow(true);
//         }, 200);
//     }, []);

//     return (
//         <div className="banner bg-[#bfe7f0] lg:flex m-6 rounded-xl overflow-hidden">

//             {/* LEFT TEXT */}
//             <div className="flex-1 assuming-center flex justify-center items-center p-8">
//                 <div
//                     className={`
//                         animate-[bounce_3s_infinite]
//             space-y-4 text-center
//             transform transition-all duration-700 ease-out
//             ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
//           `}
//                 >
//                     <p className="text-4xl lg:text-5xl font-bold animate-none" style={{ animationDuration: "2.5s" }}>
//                         All New Best Latest <br /> Toy Collections
//                     </p>

//                     <button className="btn border-none rounded-full bg-[#E6947A] text-white skeleton skeleton-text ">
//                         Shop Now
//                     </button>
//                 </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div
//                 className={`
//           flex-1 transform transition-all duration-1000 ease-out
//           ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
//         `}
//             >
//                 <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
//             </div>

//         </div>
//     );
// };

// export default HeroBanner;
