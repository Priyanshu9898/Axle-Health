import MainFeature from "@/components/Home/FeatureSection/MainFeature";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <MainFeature />
    </div>
  );
};

export default page;
