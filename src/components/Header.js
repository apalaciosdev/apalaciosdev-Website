import React from 'react'


const Header = ({data}) => {
  console.log(data.name)
  return (
    <div>
      <p>{data.welcomeTitle}</p>
      <p className='name'>{data.name}</p>
      <p>{data.descriptionTitle}</p>
    </div>
  )
}

export default Header
