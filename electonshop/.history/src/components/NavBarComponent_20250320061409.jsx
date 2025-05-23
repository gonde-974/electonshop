import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeadingComponent from "./HeadingComponent";
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeadingComponent />
      <nav className="nav-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="nav-logo">
            <FaShopware className="logo-icon" />
            <span>Gonde Shop</span>
          </div>

          {/* Search Bar - Responsive */}
          <div className="search-bar">
            <input type="text" placeholder="Search Product" className="search-input" />
            <button className="search-button">Search</button>
          </div>

          {/* Desktop Icons */}
          <ul className="flex items-center gap-6">
  <li className="flex items-center gap-2">
    <CiUser size={24} />
    <NavLink to="/" className="text-sm font-medium transition hover:text-mainYellow">Sign in</NavLink>
  </li>
  <li className="flex items-center gap-2 relative">
    <div className="relative">
      <CiHeart size={24} />
      <span className="absolute -top-1 -right-1 text-xs bg-mainRed text-white px-1 rounded-full">0</span>
    </div>
    <NavLink to="/" className="text-sm font-medium transition hover:text-mainYellow">Favorite</NavLink>
  </li>
  <li className="flex items-center gap-2 relative">
    <div className="relative">
      <CiShoppingCart size={24} />
      <span className="absolute -top-1 -right-1 text-xs bg-mainRed text-white px-1 rounded-full">0</span>
    </div>
    <NavLink to="/cart" className="text-sm font-medium transition hover:text-mainYellow">Cart</NavLink>
  </li>
</ul>


          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <div className="mobile-nav">
            {/* Search Bar - Mobile */}
            <div className="mobile-search-bar">
              <input type="text" placeholder="Search Product" className="search-input" />
              <button className="search-button">Search</button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="mobile-menu">
              <li>
                <NavLink to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home Page</NavLink>
              </li>
              <li>
                <NavLink to="/productPage" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Product Page</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Cart Page</NavLink>
              </li>
            </ul>

            {/* Mobile Icons */}
            <div className="mobile-icons">
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                <CiUser size={24} />
              </NavLink>
              <NavLink to="/favorites" className="nav-link" onClick={() => setIsOpen(false)}>
                <CiHeart size={24} />
                <span className="nav-text">Favorite</span>
              </NavLink>
              <NavLink to="/cart" className="nav-link" onClick={() => setIsOpen(false)}>
                <CiShoppingCart size={24} />
                <span className="nav-text">Cart</span>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBarComponent;
