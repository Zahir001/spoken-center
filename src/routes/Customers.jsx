import React from 'react'
import Figure from '../components/Figure'
import customerimg from '../assets/customer.jpeg'
const Customers = () => {
  return (
    <div>
      <Figure img={customerimg} title={'This is a Customer Route'}/>
    </div>
  )
}

export default Customers
