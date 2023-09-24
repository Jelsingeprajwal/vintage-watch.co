import React from "react";
import FB from "../assets/FB.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
const Footer = () => {
  return (
    <section className="mt-16 pt-14 pb-28 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cormorantUpright text-3xl font-semibold mb-5">
            Vintage Watch.co
          </h1>
          <h1>Copyright ©2023. All rights reserved</h1>
        </div>
        <div className="flex flex-col items-end gap-10">
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
          <ul className="flex items-center gap-8 ">
            <li>
              <img src={FB} alt="" className="w-5 h-5" />
            </li>
            <li>
              <img src={Instagram} alt="" className="w-5 h-5" />
            </li>
            <li>
              <img src={Twitter} alt="" className="w-5 h-5" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
