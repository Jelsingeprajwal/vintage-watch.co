import React from "react";
import HeroSection from "../components/HeroSection";
import Collections from "../components/Collections";

import FavProducts from "../components/FavProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Collections />
      <FavProducts />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default HomePage;
