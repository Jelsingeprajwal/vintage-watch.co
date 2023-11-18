import React, { Fragment } from "react";
import FB from "../assets/FB.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Footer from "../components/Footer";
const About = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 tracking-[1.28px] pt-14">
        <div>
          <h1 className="text-[64px] font-cormorantUpright font-bold tracking-[5.12px] text-peach-100 mb-20">
            Our Passion <br /> for Timepieces
          </h1>
          <div>
            <ul className="flex items-center gap-8 ">
              <li>
                <img src={FB} alt="" className="w-6 h-6" />
              </li>
              <li>
                <img src={Instagram} alt="" className="w-6 h-6" />
              </li>
              <li>
                <img src={Twitter} alt="" className="w-6 h-6" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex gap-20 font-medium">
            <div>
              <h1 className="text-4xl tracking-[2px]">20 years</h1>
              <p>of Premium service</p>
            </div>
            <div>
              <h1 className="text-4xl tracking-[2px]">40,000+</h1>
              <p>Happy customers</p>
            </div>
          </div>
          <p className="my-16">
            At vintage watch.co, our passion is preserving history through
            horology. For over 20 years, we have scoured the globe seeking
            vintage timepieces with stories to tell. Through meticulous
            restoration, we revive these mechanical marvels, maintaining their
            character while ensuring reliability. Our trained watchmakers have
            unmatched expertise in servicing rare and antique movements.
          </p>
          <p>
            You'll find no finer curation of watches from bygone eras in our
            collection. Each piece we lovingly restore represents innovation,
            craftsmanship and design from its time. By sharing these treasures,
            we aim to keep the artistic spirit of horology alive for future
            generations to admire.
          </p>
        </div>
      </div>
      <div className="w-full h-[515px] my-20">
        <img
          src="https://ik.imagekit.io/z2moegjbczv/vintage%20watch.co/vintage-bg.jpg"
          alt=""
          className="w-full h-[515px] object-cover"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
