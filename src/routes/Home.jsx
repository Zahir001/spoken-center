import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Card from '../components/Card';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { LiaWalletSolid } from "react-icons/lia";
import { HiShoppingBag } from "react-icons/hi";
import Bargraph from '../components/Bargraph';
import PieGraph from '../components/PieGraph';
import ProductSale from '../components/ProductSale';


const Home = () => {  
  return (
    <div className='homeParentDiv'>
      
      <div className='headText'>
        <div className='headTextStyle'>
          <h1>Hello Shahrukh </h1>
          <span>👋,</span>
        </div>
        <div className='inputField'>
          <IoSearch className='searchIcon headerSearchIcon' />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className='cardsParent'>
        <Card icon={<AiOutlineDollarCircle />} title={'Earnings'} price={'$198k'} percent={'↑ 37.8%'} firstclasss={'iconCardStyleone'} secondclass={'iconCardfirst'} thirdclass={'percentUp'} />
        <Card icon={<CgNotes />} title={'Orders'} price={'$2.4k'} percent={'↓ 2%'} firstclasss={'iconCardStyletwo'} secondclass={'iconCardsecond'} thirdclass={'percentDown'} />
        <Card icon={<LiaWalletSolid />} title={'Balance'} price={'$2.4k'} percent={'↓ 2%'} firstclasss={'iconCardStylethree'} secondclass={'iconCardthird'} thirdclass={'percentDown'} />
        <Card icon={<HiShoppingBag />} title={'Total Sales'} price={'$89k'} percent={'↑11%'} firstclasss={'iconCardStylefour'} secondclass={'iconCardfourth'} thirdclass={'percentUp'} />
      </div>
      <div className='graphParent'>
        <div className='graphchild_one'>
          <Bargraph />
        </div>
        <div className='graphchild_two'>
          <div className='graphchildcustomer'>
            <h2 style={{ fontWeight: '500', fontSize: '24px', marginBottom: '6px' }}>Customers</h2>
            <span style={{ marginBottom: '10px', color: 'gray', fontWeight: '300', fontSize: '14px' }}>Customers that buy products</span>
          </div>
          <PieGraph />
        </div>
      </div>
      <ProductSale />
    </div>
  )
}

export default Home
