import React from "react";
import IWC from "../assets/iwc.jpg";
import Star from "../assets/Star.svg";
import StarOutline from "../assets/StarOutline.svg";
const FavProducts = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-wide">
        Our Most Loved Products
      </h1>
      <div className="mt-16 flex flex-wrap gap-24 justify-center ">
        <div className="w-[400px] h-fit bg-isabelline-200 text-black border border-black-400">
          <img src={IWC} alt="" />
          <div className="text-center px-6 pb-6">
            <h1 className="mt-2 font-semibold text-xl">Classic IWC watch</h1>
            <span className="mt-1 mb-2 block">$ 1299</span>
            <div className="flex justify-between items-center">
              <button className="py-2 font-semibold rounded px-6 bg-black text-isabelline-200">
                Add to cart
              </button>
              <div className="flex gap-1">
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={StarOutline} className="w-[15px] h-[15px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-fit bg-isabelline-200 text-black border border-black-400">
          <img src={IWC} alt="" />
          <div className="text-center px-6 pb-6">
            <h1 className="mt-2 font-semibold text-xl">Classic IWC watch</h1>
            <span className="mt-1 mb-2 block">$ 1299</span>
            <div className="flex justify-between items-center">
              <button className="py-2 font-semibold rounded px-6 bg-black text-isabelline-200">
                Add to cart
              </button>
              <div className="flex gap-1">
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={StarOutline} className="w-[15px] h-[15px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-fit bg-isabelline-200 text-black border border-black-400">
          <img src={IWC} alt="" />
          <div className="text-center px-6 pb-6">
            <h1 className="mt-2 font-semibold text-xl">Classic IWC watch</h1>
            <span className="mt-1 mb-2 block">$ 1299</span>
            <div className="flex justify-between items-center">
              <button className="py-2 font-semibold rounded px-6 bg-black text-isabelline-200">
                Add to cart
              </button>
              <div className="flex gap-1">
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={Star} className="w-[15px] h-[15px]" alt="" />
                <img src={StarOutline} className="w-[15px] h-[15px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavProducts;
