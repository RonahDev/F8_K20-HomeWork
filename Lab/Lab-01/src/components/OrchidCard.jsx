import React from 'react'

export default function OrchidCard({ orchid }) {
  return (
    <div className='card h-100 shadow'>
      <img
        src={orchid.img}
        alt={orchid.name}
        className='card-img-top'
        alt = {orchid.name}
        style = {{ height: "200px", objectFit: "cover" }}
      />

      <div className='card-body'>
        <h5>{orchid.name}</h5>
        <p>Origin : {orchid.origin}</p>
        <p>Color : {orchid.color}</p>
        <p>Category : {orchid.category}</p>
        <p>Rating : {orchid.rating}</p>
        <p>Likes : {orchid.numberOfLike}</p>

        <p>Special : {orchid.isSpecial ? "Yes" : "No"}</p>

        <p>Natural : {orchid.isNatural ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}
