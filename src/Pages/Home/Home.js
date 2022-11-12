import React from "react";
import Banner from "./Banner";
import InfoCard from "./InfoCard";
import InfoSection from "./InfoSection";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <InfoSection></InfoSection>
    </div>
  );
};

export default Home;
