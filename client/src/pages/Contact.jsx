import React, { useState } from "react";
import WaterMark1 from "../assets/watch-watermark-1.svg";
import WaterMark2 from "../assets/watch-watermark-2.svg";
import ArrowNarrowRight from "../assets/ArrowNarrowRight.svg";
import Footer from "../components/Footer";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleContactSubmit = (ev) => {
    ev.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, message });
  };
  return (
    <section className="">
      <div className="grid grid-cols-2 -mx-[80px]">
        <div className="bg-peach-200 text-black h-full pb-16">
          <h1 className="text-[64px] leading-[94.8%] font-cormorantUpright font-bold tracking-[5.12px] pl-[80px] mb-6 mt-20">
            We’d Love to <br /> hear from you
          </h1>
          <div className="flex gap-12 overflow-hidden">
            <img
              src={WaterMark2}
              alt=""
              className="-translate-x-1/2 w-[330px]"
            />
            <img
              src={WaterMark1}
              alt=""
              className="-translate-x-1/2 w-[330px]"
            />
          </div>
        </div>
        <div className="ml-16 mr-[80px] mt-20">
          <h1 className="text-4xl font-semibold tracking-[2.88px] mb-10">
            Contact us
          </h1>
          <form onSubmit={handleContactSubmit}>
            <div className={`flex mb-8 gap-[14px]`}>
              <div className={`flex flex-col w-full gap-4 `}>
                <label
                  htmlFor=""
                  className="font-semibold uppercase font-josefinSans"
                >
                  First Name
                </label>
                <input
                  required={true}
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
                />
              </div>

              <div className={`flex flex-col w-full gap-4 `}>
                <label
                  htmlFor=""
                  className="font-semibold uppercase font-josefinSans"
                >
                  Last Name
                </label>
                <input
                  required={true}
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
                />
              </div>
            </div>
            <div className={`flex mb-8 gap-[14px]`}>
              <div className={`flex flex-col w-full gap-4 `}>
                <label
                  htmlFor=""
                  className="font-semibold uppercase font-josefinSans"
                >
                  Email
                </label>
                <input
                  required={true}
                  type="email"
                  placeholder="Enter your email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
                />
              </div>
              <div className={`flex flex-col w-full gap-4 `}>
                <label
                  htmlFor=""
                  className="font-semibold uppercase font-josefinSans"
                >
                  Phone Number
                </label>
                <input
                  required={true}
                  type="tel"
                  placeholder="Enter your phone number "
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
                />
              </div>{" "}
            </div>
            <div className={`flex flex-col w-full gap-4 `}>
              <label
                htmlFor=""
                className="font-semibold uppercase font-josefinSans"
              >
                Message
              </label>
              <input
                required={true}
                type="text"
                placeholder="Enter your message "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-1 tracking-[1.28px] mt-7"
            >
              submit{" "}
              <span>
                <img src={ArrowNarrowRight} alt="" />
              </span>
            </button>
          </form>
          <div className="mt-7">
            <h1 className="uppercase">email us</h1>
            <a className="text-sm mt-4" href="mailto:vintagewatchco@gmail.com">
              vintagewatchco@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
