import React, { useContext } from "react";
import { UserContext } from "../userContext";
// import CartIcon from "../assets/ShoppingCart.svg";
// import SearchIcon from "../assets/Vector.svg";
import Profile from "../assets/profile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const handleSignOut = async () => {
    await axios.post("/signout");
    setUser(null);
  };
  return (
    <header className="flex justify-between items-center font-josefinSans w-full h-[10vh] min-h-[64px] z-40 ">
      {/* Logo */}
      <React.Fragment>
        <a href="/" className="font-cormorantUpright text-4xl font-semibold">
          Vintage Watch.co
        </a>
      </React.Fragment>
      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-4 ">
          <li>
            <Link to="/" className="opacity-80 hover:opacity-100">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="opacity-80 hover:opacity-100">
              About Us
            </Link>
          </li>
          {/* <li>
            <a href="#collections" className="opacity-80 hover:opacity-100">
              Collections
            </a>
          </li> */}
          <li>
            <Link to="/contact" className="opacity-80 hover:opacity-100">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* Search Bar */}
      {/* <div className="flex border-2 border-black-300 px-4 py-1 items-center rounded-full w-[192px]">
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
      </div> */}
      {/* Profile Icon */}
      <div className="flex gap-4 items-center">
        {user ? (
          <button type="button" onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
        <Link
          to={user ? "profile" : "signin"}
          className=" w-10 h-10 rounded-full"
        >
          <img
            src={Profile}
            alt="Profile Pic/Icon"
            className="object-cover w-10 h-10 rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
