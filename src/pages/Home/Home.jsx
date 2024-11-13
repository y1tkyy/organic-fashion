import React from "react";
import Banner from "../../components/Banner/Banner";
import CategorySection from "../../components/CategorySection/CategorySection";
import NewCollection from "../../components/NewCollection/NewCollection";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <NewCollection></NewCollection>
      <AboutUs></AboutUs>
    </>
  );
};

export default Home;
