import React from "react";
import { Hero } from "./hero";
import { FeaturesSection } from "./featuresSection";
import { Content } from "./content";
import "../../style/Home.css";
import { Stats } from "./stats";
import { FeaturedProducts } from "./featuredProducts";
import { PerfumeCategory } from "./perfumeCategory";

export const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fdfdff" }}>
        <Hero />
        <FeaturesSection />

        <Content />
        <PerfumeCategory />
        <FeaturedProducts />
        <Stats />
      </div>
    </>
  );
};
