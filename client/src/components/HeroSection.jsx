import React from "react";
import HeroBg from "../assets/heroBg.jpg";
import CTA from "./CTA";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <div
        className="w-full  bg-contain bg-right bg-no-repeat py-16"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <h1 className="text-[64px] font-cormorantUpright font-bold text-peach-100 mb-5 pt-14">
          Keepers of Time.
        </h1>
        <h1 className="uppercase tracking-[7px] font-josefinSans font-light text-4xl mb-2">
          Time is a luxury
        </h1>
        <p className="max-w-[280px] text-2xl font-light tracking-[1.2px] mb-14">
          A Classic Collection of Luxurious Watches for the Real Gentlemen.
        </p>
        <CTA title={"Shop now"} />
      </div>
    </div>
  );
};

export default HeroSection;
