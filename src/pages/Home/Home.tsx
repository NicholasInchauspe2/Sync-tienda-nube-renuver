import React from "react";
import BannerPrimary from "./BannerPrimary";
import BannerReasons from "./BannerReasons";
import BannerSteps from "./BannerSteps";
import BannerOpinion from "./BannerOpinion";
import BannerEco from "./BannerEco";

const Home = () => {
  return (
    <>
      <BannerPrimary />
      <BannerReasons />
      <BannerSteps />
      <BannerOpinion />
      <BannerEco />
    </>
  );
};

export default Home;
