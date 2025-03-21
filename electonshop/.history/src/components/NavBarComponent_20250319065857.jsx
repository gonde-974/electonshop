import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaShopware } from 'react-icons/fa';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        <FaShopware className="text-mainBlue text-3xl" />
        <span>Gonde Shop</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search Product"
          className="px-4 py-2 outline-none w-60 text-gray-600"
        />
        <button className="bg-mainBlue text-white px-4 py-2 hover:bg-blue-700 transition-all">
          Search
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-mainBlue font-semibold' : 'hover:text-mainBlue transition'}>
            <CiUser className="text-2xl" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-mainBlue font-semibold' : 'hover:text-mainBlue transition'}>
            <div className="flex items-center gap-1">
              <CiHeart className="text-2xl" />
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
              Favorite
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart/:productId" className={({ isActive }) => isActive ? 'text-mainBlue font-semibold' : 'hover:text-mainBlue transition'}>
            <div className="flex items-center gap-1">
              <CiShoppingCart className="text-2xl" />
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
              Cart
            </div>
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <li>
            <NavLink to="/" className="hover:text-mainBlue transition" onClick={() => setIsOpen(false)}>Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/productPage" className="hover:text-mainBlue transition" onClick={() => setIsOpen(false)}>Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/singleProductPage/:productId" className="hover:text-mainBlue transition" onClick={() => setIsOpen(false)}>Single Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="hover:text-mainBlue transition" onClick={() => setIsOpen(false)}>Cart Page</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBarComponent;
