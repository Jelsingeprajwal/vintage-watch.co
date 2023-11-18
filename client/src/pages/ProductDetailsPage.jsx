import React, { Fragment } from "react";
import FiveStars from "../assets/FiveStars.svg";
import Rolex from "../assets/rolex.png";
import Footer from "../components/Footer";
const ProductDetailsPage = () => {
  return (
    <section className="">
      <div
        className="text-black relative bg-[#E4C38E] p-[52px]
      mt-8 rounded-md flex justify-between items-center"
      >
        <div className="">
          {/* Title */}
          <div className="mb-10 max-w-[395px]">
            {" "}
            <h1 className="text-2xl font-semibold uppercase">
              Rolex Submariner Ref. 5513
            </h1>
            <p>
              The 1968 Rolex Submariner Ref. 5513 in excellent pre-owned
              condition...
            </p>
          </div>
          <h1 className="text-2xl font-semibold ">Colour</h1>
          {/* color box */}
          <div className="flex gap-4 mb-8 mt-1">
            <div
              className="w-[52px] h-[52px] bg-black text-white rounded-sm
              border border-black-100 flex flex-col justify-center items-center   font-normal"
            >
              <div className="w-4 h-4 bg-[#F0BC68] rounded-full"></div>
              <div>Gold</div>
            </div>
          </div>
          {/* price */}
          <Fragment>
            <h1 className="text-2xl font-semibold  ">Price</h1>
            <h1 className="text-[32px] font-semibold  ">
              $6,800 <span className="opacity-30">$8,500</span>{" "}
              <span className="text-2xl font-normal">(20% OFF)</span>
            </h1>
          </Fragment>
          <button className="w-[120px] h-[40px] mt-10 mb-5 self-end bg-black text-isabelline-100">
            Add to Cart
          </button>
          <img src={FiveStars} alt="" />
        </div>
        {/* Image */}
        <div className="">
          <img src={Rolex} alt="" className="h-[345px]" />
        </div>
        {/* Specifications */}
        <div className=" text-right">
          <h1 className="text-2xl font-semibold mb-4">Specifications</h1>
          <ul className="tracking-[1.28px] leading-loose">
            <li>Material: Stainless steel</li>
            <li>Case Diameter: 30mm</li>
            <li>Case Thickness: 12mm</li>
            <li>Band Width: 20mm</li>
            <li>Movement: Automatic (cal. 1570)</li>
            <li>Power Reserve: ~48 hours</li>
            <li>Water Resistance: 300m</li>
          </ul>
          <h1 className="absolute bottom-[52px] right-[52px]">
            Product Code: 469099761001
          </h1>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductDetailsPage;
