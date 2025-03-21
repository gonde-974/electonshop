import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HeadingComponent from './HeadingComponent';

//ICONS
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeadingComponent />
      <nav className="navbar">
        <div className='logo'>
          <FaShopware className='logoImage' />
          <span className="navbar-logo"> Gonde Shop</span>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search Product"
            className="search-input"
          />
          <button className="search-button">
            Search
          </button>
        </div>

        <div>

        </div>

        {/* Hamburger Button for Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
          {isOpen ? <X /> : <Menu />}
        </button>

       {/* Desktop Menu */}
{/* Desktop Menu */}
<div className="navbar-container">
  <ul className="navbar-list">
    <li>
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
        <CiUser className='icon' />
      </NavLink>
    </li>
    <li>
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
        <div className="icon-wrapper">
          <CiHeart className='icon' />
          <span className="nav-counter">0</span>
          Favorite
        </div>
      </NavLink>
    </li>
    <li>
      <NavLink to="/cart/:productId" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
        <div className="icon-wrapper">
          <CiShoppingCart className='icon' />
          <span className="nav-counter">0</span>
          <span>Cart</span>
        </div>
      </NavLink>
    </li>
    <li>
      <NavLink to="/error" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
        Error Page
      </NavLink>
    </li>
  </ul>
</div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="mobile-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={() => setIsOpen(false)}>
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/productPage" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={() => setIsOpen(false)}>
                Product Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/singleProductPage/:productId" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={() => setIsOpen(false)}>
                Single Product Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} onClick={() => setIsOpen(false)}>
                Cart Page
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );

}

export default NavBarComponent;
