import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-base-100 fixed z-10 w-full shadow-md">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <a className="text-2xl font-serif font-bold uppercase md:ml-4">
            My Choice
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search product"
              className="input input-bordered  rounded-full border-pink-500 border-2 w-96 pl-8 h-10"
            />
            <FaSearch className="absolute top-3 left-3" />
          </div>
          <ul className="menu menu-horizontal px-1 space-x-4 mr-4">
            <li>
              <Link
                to="/login"
                className="bg-gray-200 rounded-full text-base font-semibold font-sans"
              >
                Login
              </Link>
            </li>
            <li>
              <Link className="bg-pink-500 text-white hover:text-white hover:bg-pink-500 rounded-full text-base font-semibold font-sans">
                <FaShoppingCart /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden mx-10">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <hr className="mx-4" />
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li><Link>Men's Feshion</Link></li>
          <li><Link>Women's Feshion</Link></li>
          <li><Link>Personal Care</Link></li>
          <li><Link>Home Applience</Link></li>
          <li><Link>Sports and Outdoor</Link></li>
          <li><Link>Sports and Outdoor</Link></li>
          <li><Link>Watch And Bags</Link></li>
          <li><Link>Groceries</Link></li>
          <li><Link className="bg-purple-600 text-white rounded-full font-semibold">FlashSale</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
