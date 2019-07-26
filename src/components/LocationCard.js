import React from 'react'

export default function LocationCard({ props }) {//({ name, type, dimension, residents }) {
  // image={image}
  return (
    // <span>todo: location</span>
    <div>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      <p>{props.residents}</p>
    </div>
  )
}
