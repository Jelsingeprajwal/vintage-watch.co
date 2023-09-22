import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import CartIcon from "../assets/ShoppingCart.svg";
import SearchIcon from "../assets/Vector.svg";
import Profile from "../assets/profile.jpg";
const Header = () => {
  const { user } = useContext(UserContext);
  const [query, setQuery] = useState("");

  return (
    <header className="flex justify-between items-center font-josefinSans w-full h-16">
      {/* Logo */}
      <React.Fragment>
        <h1 className="font-cormorantUpright text-4xl font-semibold">
          Vintage Watch.co
        </h1>
      </React.Fragment>
      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-4 ">
          <li>
            <a href="/" className="opacity-80 hover:opacity-100">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="opacity-80 hover:opacity-100">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="opacity-80 hover:opacity-100">
              Collections
            </a>
          </li>
          <li>
            <a href="/" className="opacity-80 hover:opacity-100">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      {/* Search Bar */}
      <div className="flex border-2 border-black-300 px-4 py-1 items-center rounded-full w-[192px]">
        <div className="flex items-center gap-[10px] ">
          <label htmlFor="query">
            <img src={SearchIcon} className="w-5 h-5" alt="Magnifying Glass" />
          </label>
          <input
            type="text"
            value={query}
            placeholder="Search"
            className="w-full text-sm"
            onChange={(event) => {
              setQuery(event.target.value);
              console.log(query);
            }}
          />
        </div>
        <div>
          <div></div>
          <div>
            <a href="/">
              <img src={CartIcon} className="w-5 h-5" alt="Cart" />
            </a>
          </div>
        </div>
      </div>
      {/* Profile Icon */}
      <div className=" w-10 h-10 rounded-full">
        <img
          src={Profile}
          alt="Profile Pic/Icon"
          className="object-cover w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
