import React from 'react';
import BannerPrimary from './components/BannerPrimary';
import BannerReasons from './components/BannerReasons';
import BannerSteps from './components/BannerSteps';
import BannerOpinion from './components/BannerOpinion';
import BannerEco from './components/BannerEco';

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