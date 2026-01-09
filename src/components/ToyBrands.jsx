import React from 'react';
import brand1 from '../assets/Brand-1-duplo (1).png'
import brand2 from '../assets/Brand-2-PlayDoh.png'
import brand3 from '../assets/Brand-3-Fresh.png'
import brand4 from '../assets/Brand-4-Barlri.png'

const ToyBrands = () => {
    return (
        <div className='w-10/12 mx-auto mt-16 mb-8'>
            <h1 className='text-center font-bold text-baloo text-4xl md:text-5xl text-primary'>Toy Brands</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 mt-12'>
                <div className="brand-card scale-100 hover:scale-105 duration-700 border-4 border-primary rounded-4xl p-7 flex justify-center items-center">
                    <img className='' src={brand1} alt="" />
                </div>
                <div className="brand-card scale-100 hover:scale-105 duration-700 border-4 border-primary rounded-4xl p-7 flex justify-center items-center">
                    <img className='' src={brand4} alt="" />
                </div>
                <div className="brand-card scale-100 hover:scale-105 duration-700 border-4 border-primary rounded-4xl p-7 flex justify-center items-center">
                    <img className='' src={brand2} alt="" />
                </div>
                <div className="brand-card scale-100 hover:scale-105 duration-700 border-4 border-primary rounded-4xl p-7 flex justify-center items-center">
                    <img className='' src={brand3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ToyBrands;