import React from 'react'


const ProductName = ({image, imagetitle, imagedesc, stock, price, totalsales}) => {
  return (
    <>
      <div className='productNameList'>
          <div className='productListImage'>
            <figure><img src={image} alt="image" /></figure>
            <div className='textMobileProduct'>
              <h3>{imagetitle}</h3>
              <span>{imagedesc}</span>
            </div>
          </div>
          <div className='productStocklistStyle'>
            <span>{stock}</span>
            <span>{price}</span>
            <span>{totalsales}</span>
          </div>
      </div>
    </>
  )
}

export default ProductName
