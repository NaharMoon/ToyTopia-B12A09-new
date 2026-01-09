import React from 'react';
import categoryImg1 from "../assets/catagoryImg1.png"
import categoryImg2 from "../assets/catagoryImg2.png"
import categoryImg3 from "../assets/catagoryImg3.png"
import categoryImg4 from "../assets/catagoryImg4.png"
import categoryImg5 from "../assets/catagoryImg5.png"

const Collections = () => {
    return (
        <div className='w-10/12 mx-auto mt-16 mb-8'>
            <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-5xl text-primary'>Find the Perfect Toy</h1>
            <p className='text-center font-bold mt-2'>Our Collections</p>
            <div className="mx-auto flex justify-around flex-wrap gap-5  mt-8">
                <div className="flex flex-col justify-center items-center">
                    <img className='w-20 md:w-30 lg:w-full' src={categoryImg1} alt="" />
                    <p className="text-center text-xs md:text-sm mt-1">Playsets</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-20 md:w-30 lg:w-full' src={categoryImg2} alt="" />
                    <p className="text-center text-xs md:text-sm mt-1">Control Toys</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-20 md:w-30 lg:w-full' src={categoryImg3} alt="" />
                    <p className="text-center text-xs md:text-sm mt-1">Educational Toys</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-20 md:w-30 lg:w-full' src={categoryImg4} alt="" />
                    <p className="text-center text-xs md:text-sm mt-1">Eco- Friendly Toys</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-20 md:w-30 lg:w-full' src={categoryImg5} alt="" />
                    <p className="text-center text-xs md:text-sm mt-1">Stuffed Toys</p>
                </div>
            </div>
        </div>
    );
};

export default Collections;