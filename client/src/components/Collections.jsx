import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  const CollectionData = [
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/vintage-bg.jpg",
      title: "vintage",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/luxury-bg.jpg",
      title: "luxury",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/dress-bg.jpg",
      title: "dress",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/sports-bg.jpg",
      title: "sports",
    },
  ];
  return (
    <section className="mt-16  py-20" id="collections">
      <h1 className="text-4xl font-semibold tracking-wide">Our Collections</h1>
      <div className="flex justify-between mt-16 ">
        {CollectionData.map((data, index) => (
          <div
            style={{
              backgroundImage: `url(${data.url})`,
            }}
            key={index}
            className="w-[265px] h-[300px] bg-center bg-cover relative"
          >
            <Link
              to={`${data.title}`}
              className="w-[160px] h-10 capitalize flex justify-center items-center bg-peach-100 text-black text-xl font-semibold  absolute left-1/2 -translate-x-1/2 bottom-7"
            >
              {data.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
