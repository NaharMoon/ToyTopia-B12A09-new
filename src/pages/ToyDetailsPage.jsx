import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const ToyDetailsPage = () => {
    const alldata = useLoaderData();
    const {id} = useParams();
    const [dataDetails,setDataDetails] = useState([]);
    // console.log("Params Id: ",id,"\nAll Data: ",alldata,"\nDetails: ",dataDetails);

    useEffect(()=>{
        const filteredData = alldata.filter(data => data.toyId == id)
        setDataDetails(filteredData);
    },[alldata,id]);
    
    return (
        <div>
            <h1>ToyDetailsPage</h1>
            <div>
                {
                    dataDetails.map((data) => {
                        return (
                            <div className='border-2 border-pink-400 '>
                                <p>{data.toyName}</p>
                                <p>{data.subCategory}</p>
                                <button className='btn'>
                                    <Link to={`/all-toys`}>
                                        See All Toys
                                    </Link>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ToyDetailsPage;