import React from 'react';

export default function EpisodeCard({ props }) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.episode}</p>
        </div>
    )
}

