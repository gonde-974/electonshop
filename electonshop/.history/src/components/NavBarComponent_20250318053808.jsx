import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HeadingComponent from './HeadingComponent';

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <HeadingComponent/>
    <nav className="navbar">
      <h1 className="navbar-logo">Logo</h1>

      {/* Hamburger Button for Mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop Menu */}
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/productPage" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Product Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/singleProductPage/:productId" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Single Product Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
            Cart Page
          </NavLink>
        </li>
      </ul>

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
