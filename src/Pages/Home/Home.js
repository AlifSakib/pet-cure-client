import React from "react";
import Banner from "./Banner";
import InfoCard from "./InfoCard";
import InfoSection from "./InfoSection";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <InfoSection></InfoSection>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
