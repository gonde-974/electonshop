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
      <nav className="bg-mainBlue text-whiteTextColor shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <FaShopware className="text-mainYellow" />
            <span>Gonde Shop</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center border border-mainYellow rounded-lg overflow-hidden">
            <input type="text" placeholder="Search Product" className="p-2 focus:outline-none text-blackTextColor" />
            <button className="bg-mainYellow px-4 py-2 text-whiteTextColor">Search</button>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-whiteTextColor">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex gap-6">
            <li>
              <NavLink to="/" className="hover:text-mainYellow">
                <CiUser size={24} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className="flex items-center gap-1 hover:text-mainYellow">
                <CiHeart size={24} />
                <span className="text-sm">Favorite</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="flex items-center gap-1 hover:text-mainYellow">
                <CiShoppingCart size={24} />
                <span className="text-sm">Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <div className="md:hidden bg-mainBlue text-whiteTextColor flex flex-col items-center py-4 gap-4 w-full">
            {/* Search Bar - Mobile */}
            <div className="px-4 w-full">
              <div className="flex items-center border border-mainYellow rounded-lg overflow-hidden">
                <input type="text" placeholder="Search Product" className="p-2 w-full focus:outline-none text-blackTextColor" />
                <button className="bg-mainYellow px-4 py-2 text-whiteTextColor">Search</button>
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-4 w-full">
              <li><NavLink to="/" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Home Page</NavLink></li>
              <li><NavLink to="/productPage" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Product Page</NavLink></li>
              <li><NavLink to="/cart" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Cart Page</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBarComponent;
