import React from 'react';
import bannerVectorImg from "../assets/vector banner1.png"
const BannerVector = () => {
    // {children}
    return (
        <div className="relative">
            <img className='lg:h-80 w-full'  src={bannerVectorImg} alt="" />
            {/* <div className="absolute bottom-0">{children}</div> */}
        </div>
    );
};

export default BannerVector;