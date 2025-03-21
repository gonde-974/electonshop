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

          {/* Search Bar - Responsive */}
          <div className="flex flex-grow mx-4 items-center border border-mainYellow rounded-lg overflow-hidden max-w-lg w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Search Product"
              className="p-2 w-full focus:outline-none text-blackTextColor"
            />
            <button className="bg-mainYellow px-4 py-2 text-whiteTextColor">
              Search
            </button>
          </div>

          {/* Desktop & Mobile Icons */}
          <div className="hidden md:flex gap-6">
            <NavLink to="/" className="hover:text-mainYellow">
              <CiUser size={24} />
            </NavLink>
            <NavLink to="/favorites" className="flex items-center gap-1 hover:text-mainYellow">
              <CiHeart size={24} />
              <span className="text-sm">Favorite</span>
            </NavLink>
            <NavLink to="/cart" className="flex items-center gap-1 hover:text-mainYellow">
              <CiShoppingCart size={24} />
              <span className="text-sm">Cart</span>
            </NavLink>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-whiteTextColor">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <ul className="md:hidden bg-mainBlue text-whiteTextColor flex flex-col items-center py-4 gap-4">
            <li><NavLink to="/" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Home Page</NavLink></li>
            <li><NavLink to="/productPage" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Product Page</NavLink></li>
            <li><NavLink to="/cart" className="hover:text-mainYellow" onClick={() => setIsOpen(false)}>Cart Page</NavLink></li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default NavBarComponent;
