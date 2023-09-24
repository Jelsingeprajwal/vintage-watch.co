import React from "react";
import ProfilePic from "../assets/profile.jpg";
const Testimonials = () => {
  const testimonialsData = [
    {
      review: "Unique design and top quality. Impressed with craftsmanship.",
      username: "user2",
    },
    {
      review: "Staple in my wardrobe. Beautiful piece of history.",
      username: "user3",
    },
    {
      review: "Preserving treasures. Proud to own.",
      username: "user6",
    },
    {
      review: "Still going strong. Craftsmanship is special.",
      username: "user7",
    },
  ];
  return (
    <section className="mt-16">
      <h1 className="text-4xl text-center font-semibold tracking-wide">
        Users Love Vintage Watch .co
      </h1>
      <div className="mt-28">
        <div className="flex flex-wrap gap-10">
          <div className="flex gap-5 justify-between items-center bg-[#1C1C1C] w-fit px-5 py-4 rounded-full ">
            <img
              src={ProfilePic}
              alt="Profile Pic/Icon"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="flex flex-col items-end">
              <p className="text-isabelline-500">
                Unique design and top quality. Impressed with craftsmanship.
              </p>
              <span>username</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center bg-[#1C1C1C] w-fit px-5 py-4 rounded-full ">
            <img
              src={ProfilePic}
              alt="Profile Pic/Icon"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="flex flex-col items-end">
              <p className="text-isabelline-500">
                Unique design and top quality. Impressed with craftsmanship.
              </p>
              <span>username</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 translate-x-16">
        <div className="flex flex-wrap gap-10">
          <div className="flex gap-5 justify-between items-center bg-[#1C1C1C] w-fit px-5 py-4 rounded-full ">
            <img
              src={ProfilePic}
              alt="Profile Pic/Icon"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="flex flex-col items-end">
              <p className="text-isabelline-500">
                Unique design and top quality. Impressed with craftsmanship.
              </p>
              <span>username</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center bg-[#1C1C1C] w-fit px-5 py-4 rounded-full ">
            <img
              src={ProfilePic}
              alt="Profile Pic/Icon"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="flex flex-col items-end">
              <p className="text-isabelline-500">
                Unique design and top quality. Impressed with craftsmanship.
              </p>
              <span>username</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
