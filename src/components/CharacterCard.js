import React from 'react'

export default function CharacterCard({ props }) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} />
        <h4>{props.species} {props.status}</h4>
        {/* <span>Location: {props.location.name}</span>
      <span>Origin: {props.origin.name}</span> */}
        <p>Location: {props.location.name}</p>
        <p>Origin: {props.origin.name}</p>
      </div>
    </div>
  )
}