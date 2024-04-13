import React from 'react'

const Figure = ({ img, title }) => {
  return (
    <div>
      <div className='figureTitleStyle'>
        <h1>{title}</h1>
      </div>
      <figure className='imgStyle'>
        <img src={img} alt="image" />
      </figure>
    </div>
  )
}

export default Figure
