import React, { Fragment } from "react";
import VintageBG from "../assets/vintage-bg.jpg";
import Rolex from "../assets/rolex.png";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
const CollectionProductPage = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-24 items-center -mx-[80px]">
        {/* Left Section */}
        <div
          className="h-[90vh] max-w-[615px] bg-cover bg-[90%]"
          style={{
            backgroundImage: `url(${VintageBG})`,
          }}
        ></div>
        {/* Right Section */}
        <div className="max-w-[470px]">
          <h1
            className="text-[48px] font-cormorantUpright font-bold tracking-[5.12px]
           text-peach-100 mb-20 capitalize"
          >
            adding a touch of luxury to your time
          </h1>
          <div className="flex items-center gap-6">
            <CTA title={"Explore Collection"} />
            <p className="text-[32px] tracking-[2.56px] font-semibold  ">
              40% OFF
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl tracking-[2.88px] font-semibold my-16">
        Products
      </h1>
      <div className="grid grid-cols-3 gap-3 text-black uppercase">
        <div
          className="grow min-w-[740px] col-span-2 h-[432px] p-[52px] bg-peach-200
         rounded-sm flex items-stretch justify-between"
        >
          <div>
            <h1 className="text-3xl font-semibold font-josefinSans mb-[60px]">
              ROLEX
            </h1>
            <Fragment>
              <div className="flex gap-4">
                <div
                  className="w-[52px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100  py-4 px-2  font-normal"
                >
                  {" "}
                  30M
                </div>
                <div
                  className="w-[162px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100 flex justify-center items-center  font-normal  "
                >
                  stainless steel
                </div>
              </div>
              <div className="flex gap-4 mb-[60px] mt-[20px]">
                <div
                  className="w-[52px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100 flex flex-col justify-center items-center   font-normal"
                >
                  <div className="w-4 h-4 bg-[#F0BC68] rounded-full"></div>

                  <div>Gold</div>
                </div>
                <div
                  className="w-[162px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100 flex justify-center items-center  font-normal  "
                >
                  1948 model
                </div>
              </div>
            </Fragment>
            <Fragment>
              <h1 className="text-xs font-semibold  ">price</h1>
              <h1 className="text-[32px] font-semibold  ">$8,500</h1>
            </Fragment>
          </div>
          <div>
            <img src={Rolex} className="h-[356px] " alt="" />
          </div>
          <button className="w-[120px] h-[40px] self-end bg-black text-isabelline-100">
            Add to Cart
          </button>
        </div>
        {/* Small Cards */}
        {[1, 2, 3, 4].map(() => (
          <div className="min-w-[340px] rounded-sm bg-peach-200 p-[32px] flex gap-4 items-center">
            <div>
              <h1 className="text-3xl font-semibold font-josefinSans mb-[60px]">
                ROLEX
              </h1>
              <Fragment>
                <div className="flex gap-4">
                  <div
                    className="w-[52px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100  py-4 px-2  font-normal"
                  >
                    {" "}
                    30M
                  </div>
                </div>
                <div className="flex gap-4 mb-8 mt-[20px]">
                  <div
                    className="w-[52px] h-[52px] bg-isabelline-600 rounded-sm
             border border-black-100 flex flex-col justify-center items-center   font-normal"
                  >
                    <div className="w-4 h-4 bg-[#F0BC68] rounded-full"></div>

                    <div>Gold</div>
                  </div>
                </div>
              </Fragment>
              <Fragment>
                <h1 className="text-xs font-semibold  ">price</h1>
                <h1 className="text-[32px] font-semibold  ">$8,500</h1>
              </Fragment>
              <button className="w-[120px] h-[40px] mt-3 self-end bg-black text-isabelline-100">
                Add to Cart
              </button>
            </div>
            <div>
              <img src={Rolex} className="" alt="" />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default CollectionProductPage;
