import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { Turn as Hamburger } from 'hamburger-react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
  return (
    <div className='header'>
         {/*--header logo start-- */}
      <div className="header-logo">
        <ShoppingBagIcon className="header-logoicon" fontSize="large"/>
          <h2 className='logo-title'>E-commerce <br /> E-shop</h2>
      </div>
      {/*--header logo end-- */}

      {/*--header search start-- */}
      <div className="header-search">

        {/* --Searhcbar dropdown start--*/}
        <div className="search-select">
            <p>Kategóriák</p>
            <ArrowDropDownIcon id="arrow"/>

            <ul>
                <li>Összes kategória</li>
                <li>Elektronika</li>
                <li>Sport</li>
                <li>Játékok</li>
            </ul>

        </div>
        {/* --Searhcbar dropdown end--*/}
        <input className="search-input" type="text" />
        <SearchIcon className="search-icon" fontSize="large"/>
      </div>
      {/*--header search end-- */}

      {/*--header navbar start-- */}
      <div className="header-nav">

          <div className="nav-item"> 
          <span className='nav-item-first'>Üdvözöllek!</span>
          <span className='nav-item-second'>Jelentkezz be!</span>

          </div>

          <div className="nav-item">
          <span className='nav-item-first'>Vásárlásaid</span>
          <span className='nav-item-second'>Nézd meg</span>

          </div>

          <div className="nav-item">
          <ShoppingBasketIcon className="basketicon" fontSize="large" />
          <span className='nav-item-second basketCount'>0</span>

          </div>
      </div>
      {/*--header navbar start-- */}
    </div>
  )
}

export default Header