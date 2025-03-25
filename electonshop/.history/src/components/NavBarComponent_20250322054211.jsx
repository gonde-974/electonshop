import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeadingComponent from "./HeadingComponent";
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <HeadingComponent />

      {/* Main Navigation Bar */}
      <nav className="nav-container">
        <div className="nav-wrapper">
          {/* Logo Section */}
          <div className="nav-logo">
            <FaShopware className="logo-icon" />
            <span>Gonde Shop</span>
          </div>

          {/* Desktop Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Product"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>

          {/* Desktop Navigation Icons */}
          <ul className="nav-icons">
            <li className="nav-item">
              <SignedOut>
                <SignInButton mode="modal">
                  <CiUser size={24} className="cursor-pointer" />
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </li>
            <li className="nav-item relative">
              {/* Favorite icon with counter */}
              <div className="relative">
                <CiHeart size={24} />
                <span className="nav-counter">0</span>
              </div>
              <NavLink to="/" className="nav-link">
                Favorite
              </NavLink>
            </li>
            <li className="nav-item relative">
              {/* Cart icon with counter */}
              <div className="relative">
                <CiShoppingCart size={24} />
                <span className="nav-counter">0</span>
              </div>
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {/* Mobile Search Bar */}
            <div className="mobile-search-bar">
              <input
                type="text"
                placeholder="Search Product"
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBarComponent;
