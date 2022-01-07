import React from 'react'

const Card = ({title, description, img}) => {
  console.log(`../assets/images/${img}`)
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={`/images/${img}`} alt="" />
    </div>
  )
}

export default Card
