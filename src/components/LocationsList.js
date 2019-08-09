import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [location, setLocation] = useState([])

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location`)
            .then(data => {
                // console.log(data)
                setLocation(data.data.results);
            })
            .catch(error => {
                console.log('Error occurred -->', error);
            })
    }, [])

    return (
        <div>
            {location.map((loc, i) => <LocationCard props={loc} key={i} />)}
        </div>
    )

}