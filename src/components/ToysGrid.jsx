import React from 'react';
import ToyCard from './ToyCard';

const ToysGrid = ({toys}) => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-5 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {toys.map((toy) => (
                        <ToyCard
                            key={toy.toyId}
                            toy={toy}
                            onViewMore={(t) => console.log("view more:", t)}
                        />
                    ))}
                </div>
            </div>

        </div>

    );
};

export default ToysGrid;