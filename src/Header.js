import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Header = () => {
  return (
    <div className='header'>
         {/*--header logo start-- */}
      <div className="header-logo">
        <ShoppingBagIcon className="header-logoicon" fontSize="large"/>
          <h2 className='logo-title'>E-commerce E-shop</h2>
      </div>
      {/*--header logo end-- */}

      {/*--header search start-- */}
      <div className="header-search">
        <input className="search-input" type="text" />
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