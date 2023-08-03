import React from "react";
import { Hero } from "./hero";
import { FeaturesSection } from "./featuresSection";
import { Content } from "./content";
import "../../style/Home.css";
import { Stats } from "./stats";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />

      <Content />

      <Stats />
    </>
  );
};
