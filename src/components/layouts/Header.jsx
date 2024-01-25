import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.css";

import logo from "../../assets/images/icons/logo.svg";
import search from "../../assets/images/icons/search.svg";

import MobileNavScroll from "./Header-mobile";
import UserAccountDropdown from "../User-account/UserAccountDropdown";
import UserBasketComponent from "../UserBasket/UserBasketComponent";

const Header = () => {
  return (
    <>
      <div className="mobile-navbar d-block d-md-none">
        <MobileNavScroll />
      </div>
      <header className=" header-styles d-none d-md-flex  ">
        <div className=" container d-flex align-items-center  justify-content-between  ">
          <div>
            <img src={logo} alt="tech heim" width="56px" />
          </div>
          <nav className="nav nav-items  d-flex align-items-center gap-4">
            <Link to="/" className=" nav-link text-black blue-hover-color">
              Home
            </Link>
            <div className="">
              <Link
                to="/products"
                className="nav-link text-black blue-hover-color"
              >
                Products
              </Link>
              <div className="sub-menu"></div>
            </div>
            <Link to="/blog" className="nav-link text-black blue-hover-color">
              Blog
            </Link>
            <Link to="/faq" className="nav-link text-black blue-hover-color">
              FAQ
            </Link>
            <Link
              to="/contact-us"
              className="nav-link text-black blue-hover-color"
            >
              Contact us
            </Link>
          </nav>
          <div className=" d-flex align-items-center ">
            <button className="bg-transparent border-0 pe-3">
              <img src={search} alt="" />
            </button>
            {/* <div
            className={`basket menu-trigger  d-inline ${
              basketOpen ? "basketActive" : "basketInactive"
            }`}
            onMouseEnter={() => setBasketOpen(true)}
            onMouseLeave={() => setBasketOpen(false)}
          > */}

            <UserBasketComponent />
            <UserAccountDropdown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
