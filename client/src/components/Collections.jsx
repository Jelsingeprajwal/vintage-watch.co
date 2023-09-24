import React from "react";

const Collections = () => {
  const CollectionData = [
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/vintage-bg.jpg",
      title: "Vintage",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/luxury-bg.jpg",
      title: "Luxury",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/dress-bg.jpg",
      title: "Dress",
    },
    {
      url: "https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/sports-bg.jpg",
      title: "sports",
    },
  ];
  return (
    <section className="mt-16  py-20">
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
            <button className="w-[160px] h-10 bg-peach-100 text-black text-xl font-semibold  absolute left-1/2 -translate-x-1/2 bottom-7">
              Vintage
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
