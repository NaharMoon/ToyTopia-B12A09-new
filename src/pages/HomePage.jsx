import React from 'react';
import { Link, useLoaderData } from 'react-router';
import BannerSlider from '../components/BannerSlider';
import BannerSlider2 from '../components/BannerSlider2';
import BannerSlider3 from '../components/BannerSlider3';
import BannerSlider4 from '../components/BannerSlider4';
import Toys from '../components/Toys';

const HomePage = () => {
    const toys = useLoaderData();
    // console.log(allData);
    return (
        <div>
            <h1>HomePage</h1>
            <Toys toys={toys}></Toys>





 














            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto">
                {
                    allData.slice(0, 6).map((data => {
                        return (
                            <div className='border-2 border-pink-400 '>
                                <p>{data.toyName}</p>
                                <p>{data.subCategory}</p>
                                <button className='btn'>
                                    <Link to={`/toy-details/${data.toyId}`}>
                                        Details
                                    </Link>
                                </button>
                            </div>
                        );
                    }))
                }
            </div> */}
            

            <div className="max-w-6xl mx-auto px-4 mt-12">
                <BannerSlider3 />
                {/* Popular Toys + other sections */}
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-12">
                <BannerSlider4 />
                {/* Popular Toys + other sections */}
            </div>

            {/* <div className="max-w-6xl mx-auto px-4 mt-12">
                <BannerSlider />
                Popular Toys + other sections
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-12">
                <BannerSlider2 />
                Popular Toys + other sections
            </div> */}

            {/* <img src="https://i.ibb.co.com/5WzmK4WX/Slider.png" alt="" /> */}
            {/* <img src="https://i.ibb.co.com/pv2pMSy6/hero.png" alt="hero"/> */}
        </div>
    );
};

export default HomePage;

