import React from 'react'
import '../productSale.css'
import ProductName from './ProductName'
import waterImg from '../assets/waterr.jpg'
import win11 from '../assets/win11.jpg'
import { IoSearch } from 'react-icons/io5'
const ProductSale = () => {
  return (
    <>
      <div className='productSaleStyle'>
        <div className='productTitle'>
          <h1>Product Sell</h1>
          <div className='inputStyle'>
            <div className='inputField'>
              <IoSearch className='searchIcon' />
              <input type="text" placeholder='Search' style={{background:'#FAFBFF'}}/>
            </div>
            <div class="dropdown customMobileStyle">
              <button class="btn btn-class-style dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Last 30 days
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='productname'>
          <h2>Product Name</h2>
          <div className='stocknameStyle'>
            <span>Stock</span>
            <span>Price</span>
            <span>Total Sales</span>
          </div>
        </div>
        <ProductName image={waterImg} imagetitle={'Abstract 3D'} imagedesc={'Lorem ipsum sit amset adispeting elit'} stock={'32 in stock'} price={'$ 45.99'} totalsales={'20'} />
        <ProductName image={win11} imagetitle={'Sarphens Illustration'} imagedesc={'Lorem ipsum sit amset adispeting elit'} stock={'32 in stock'} price={'$ 45.99'} totalsales={'20'} />
      </div>
    </>
  )
}

export default ProductSale
