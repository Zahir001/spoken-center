import React, { useState } from 'react'
import { RiSettingsLine } from "react-icons/ri";
import { HiOutlineKey } from "react-icons/hi";
import { GrCube } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import { LiaWalletSolid } from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';


const Sidebar = () => {

  const [shownav, setshownav] = useState('initial')
  
  const toggleNav = () => {
    
    setshownav(shownav === 'initial' ? 'collpase' : 'initial');
  };
  const closeNav = () => {
    
    setshownav('initial');
  };
  return (
    <div>
      <FaBars style={{ position: 'absolute', fontSize:'40px' }} onClick={toggleNav}/>
      <div className={`d-flex flex-column flex-shrink-0 p-3 navbarBody ${shownav}`}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <RiSettingsLine className='dashboardIcon' />
          <span className="fs-4">Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto" onClick={closeNav}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page" >
              <HiOutlineKey className='dashboardlistIcon' />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="nav-link customArrowStyle">
              <div>
                <GrCube className='dashboardlistIcon' />
                Product
              </div>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer" className="nav-link customArrowStyle">
              <div>
                <MdPerson className='dashboardlistIcon' />
                Customers
              </div>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/income" className="nav-link customArrowStyle">
              <div>
                <LiaWalletSolid className='dashboardlistIcon' />
                Income
              </div>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/promote" className="nav-link customArrowStyle">
              <div>
                <LuBadgePercent className='dashboardlistIcon' />
                Promote
              </div>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="nav-link customArrowStyle">
              <div>
                <RiQuestionnaireLine className='dashboardlistIcon' />
                Help
              </div>
              <FaChevronRight />
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a className="d-flex align-items-center text-white text-decoration-none userNameBGStyle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <div style={{ display: 'flex', alignItems: "center", width: '100%', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong>Evano</strong>
                <span>Project Manager</span>
              </div>
              <FaChevronDown style={{ color: '#B6B7C9' }} />
            </div>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Sidebar
