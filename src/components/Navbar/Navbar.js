import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";

import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/cartSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbar-cnt flex align-center">
          <div className="brand-and-toggler flex align-center">
            <button
              type="button"
              className="sidebar-show-btn text-black"
              onClick={() => dispatch(setSidebarOn())}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link to="/" className="navbar-brand flex align-center">
              <span className="navbar-brand-ico">
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
              <span className="navbar-brand-txt mx-2">
                <span className="fw-7">My</span>Shoppy.
              </span>
            </Link>
          </div>

          <div className="navbar-cart flex align-center">
            <Link to="/cart" className="cart-btn text-black">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="cart-items-value">{itemsCount}</div>
            
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
