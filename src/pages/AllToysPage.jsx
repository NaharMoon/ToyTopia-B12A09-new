import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ToyCard from '../components/ToyCard';
import ToysGrid from '../components/ToysGrid';

const AllToysPage = () => {
    const toys = useLoaderData();
    // console.log(alldata);
    return (
        <div className="">
            <h1 className='font-bold text-secondary text-4xl text-center my-10'>Explore Our Awsome Toyes</h1>
            <ToysGrid toys={toys}></ToysGrid>
        </div>
    );
};

export default AllToysPage;