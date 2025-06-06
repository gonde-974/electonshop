import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeadingComponent from "./HeadingComponent";
import { FaShopware } from "react-icons/fa";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllFavoriteItemsAction } from "../store/favoriteSlice";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const {totalProduct} = useSelector(state=>state.cartStore)
  const {totalFavoriteItems} = useSelector(state=>state.favoriteStore)
  const dispatch = useDispatch()
  
  
  //HandleAddToFavorite
  function handleAddToFavorite (){
    dispatch(saveAllFavoriteItemsAction(totalProduct))
  }
  
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
            <Link to='/'>
              <FaShopware className="logo-icon" />
            </Link>
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
                <UserButton />
              </SignedIn>
            </li>
            <li className="nav-item relative">
              {/* Favorite icon with counter */}
              <div className="relative">
                <CiHeart size={24} />
                <span className={`nav-counter ${totalProduct > 0 ? 'bg-green-500' : 'bg-mainYellow'}`}>{ totalFavoriteItems}</span>
              </div>
              <NavLink to="/favorite" 
                       className="nav-link"
                       onClick={handleAddToFavorite}>
                Favorite
              </NavLink>
            </li>
            <li className="nav-item relative">
              {/* Cart icon with counter */}
              <div className="relative">
                <CiShoppingCart size={24} />
                <span className={`nav-counter ${totalProduct > 0 ? 'bg-green-500' : 'bg-mainYellow'}`}>{totalProduct}</span>
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
