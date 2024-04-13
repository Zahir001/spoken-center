import React from 'react'


const Card = ({ icon, title, price, percent, firstclasss, secondclass, thirdclass}) => {
  return (
    // iconCardCustom
    
      <div className='cards'>
        <div className={firstclasss}>
          <span className={secondclass}>{icon}</span>
        </div>
        <div>
          <p>{title}</p>
          <h3>{price}</h3>
          <span className={thirdclass}>{percent}<span className='thismonthTitle'>this month</span></span>
        </div>
      </div>
  )
}

export default Card
