import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams } from 'react-router';
import ToyDetails from '../components/ToyDetails';
import TryNowForm from '../components/TryNowForm';

const ToyDetailsPage = () => {

    const toys = useLoaderData();
    const { id } = useParams();
    const [filteredToy, setFilteredToy] = useState([]);
    // console.log("Params Id: ",id,"\nAll Data: ",alldata,"\nDetails: ",dataDetails);

    useEffect(() => {
        const filteredToy = toys.filter(toy => toy.toyId == id)
        setFilteredToy(filteredToy);
    }, [toys, id]);

    return (
        <div>
            <div>
                {
                    filteredToy.map((toy) => {
                        return (
                            <ToyDetails toy={toy}>
                                <TryNowForm></TryNowForm>
                            </ToyDetails>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ToyDetailsPage;