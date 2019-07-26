import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(data => {
                console.log(data);
                setEpisodeList([...data.data.results])
            })
            .catch(error => {
                console.log('Error occurred -->', error);
            })
    }, [])


    return (
        <div>
            {episodeList.map((epi, i) => <EpisodeCard props={epi} key={i} />)}
        </div>
    )
}