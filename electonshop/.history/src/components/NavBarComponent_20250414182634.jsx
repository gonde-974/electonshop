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
  const { totalProduct } = useSelector(state => state.cartStore);
  const dispatch = useDispatch();

  // Handle Add to Favorite
  function handleAddToFavorite() {
    const testProduct = {
      id: 1,
      name: "Test Product",
      price: 100
    };
    dispatch(saveAllFavoriteItemsAction(testProduct));
  }

  return (
    <>
      <HeadingComponent />

      <nav className="nav-container">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <Link to='/'>
              <FaShopware className="logo-icon" />
            </Link>
            <span>Gonde Shop</span>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Product"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>

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
              <div className="relative">
                <CiHeart size={24} />
                <span className="nav-counter">❤️</span>
              </div>
              <NavLink to="/favorite" onClick={handleAddToFavorite} className="nav-link">
                Favorite
              </NavLink>
            </li>
            <li className="nav-item relative">
              <div className="relative">
                <CiShoppingCart size={24} />
                <span className="nav-counter">{totalProduct}</span>
              </div>
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </li>
          </ul>

          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-nav">
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
