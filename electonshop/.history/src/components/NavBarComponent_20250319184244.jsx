import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeadingComponent from "./HeadingComponent";

// ICONS
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeadingComponent />
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <FaShopware className="logoImage" />
          <span>Gonde Shop</span>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search Product" className="search-input" />
          <button className="search-button">Search</button>
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navbar */}
        <div className="navbar-container">
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
                <CiUser className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
                <div className="icon-wrapper">
                  <CiHeart className="icon" />
                  <span className="nav-counter">0</span>
                  Favorite
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart/:productId" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
                <div className="icon-wrapper">
                  <CiShoppingCart className="icon" />
                  <span className="nav-counter">0</span>
                  Cart
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/error" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
                Error Page
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <ul className="mobile-menu">
            <li>
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/productPage" className="nav-link" onClick={() => setIsOpen(false)}>
                Product Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/singleProductPage/:productId" className="nav-link" onClick={() => setIsOpen(false)}>
                Single Product Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link" onClick={() => setIsOpen(false)}>
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
