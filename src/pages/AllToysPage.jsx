import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import ToyCard from '../components/ToyCard';
import ToysGrid from '../components/ToysGrid';
import BannerVector from '../components/BannerVector';

const AllToysPage = () => {
    useEffect(() => {
        document.title = "ToyTopia | All Toys";
    }, []);

    const toys = useLoaderData();
    // console.log(alldata);
    return (
        <div className="">
            <div className="relative -top-10">
                <BannerVector>
                </BannerVector>
                <div className="flex justify-center lg:absolute bottom-0 w-full">
                    <h1 className=' bottom-0 font-bold text-yellow-600 px-5 text-3xl lg:text-4xl text-center'>Explore Our Awsome Toyes</h1>
                </div>
                {/* !!!!!!!! ei div er design ta experimentally perfect hoiche!!!!!!!!!!!!!!! */}
            </div>
            {/* <div className="banner-vector h-70 w-full bg-secondary-content"></div> */}
            <ToysGrid toys={toys}></ToysGrid>
        </div>
    );
};

export default AllToysPage;