import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllToysPage = () => {
    const alldata = useLoaderData();
    // console.log(alldata);
    return (
        <div>
            <h1>AllToysPage</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto">
                {
                    alldata.map((data) => {
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
                    })
                }
            </div>

        </div>
    );
};

export default AllToysPage;