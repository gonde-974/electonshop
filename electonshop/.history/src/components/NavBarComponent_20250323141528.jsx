import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeadingComponent from "./HeadingComponent";
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut,SignInButton, UserButton } from "@clerk/clerk-react";
import CategoryComponents from "./CategoryComponents";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation items (currently not used in render, but available for future enhancements)
  const navItems = [
    {
      item: <CiUser />,
      title: "SignIn",
      path: "/"
    },
    {
      item: <CiHeart />,
      title: "Favorite",
      path: "/",
      count: 0
    },
    {
      item: <CiShoppingCart />,
      title: "Cart",
      path: "/Cart",
      count: 0
    }
  ];

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
              <CiUser size={24} />
              <SignedOut>
                 <SignInButton />
             </SignedOut>
             <SignedIn>
              <UserButton/>
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
      <div className=" text-gray-700  shadow-lg rounded-xl flex flex-wrap justify-center gap-4 md:justify-between">
          <CategoryComponents />
      </div>    
    </>
  );
}

export default NavBarComponent;
