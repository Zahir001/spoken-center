import React from 'react'
import productImage from '../assets/product.jpg'
import Figure from '../components/Figure'
const Product = () => {
  return (
    <div>
      <Figure img={productImage} title={'This is a Product Route'}/>
    </div>
  )
}

export default Product
