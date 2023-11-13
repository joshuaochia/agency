import React from "react";
import DetailsAboutSection from "./about-section";
import AboutSectionTwo from "./about-section-2";
import HistorySection from "./history-section";

import CounterSection from "./counter-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title="About Us" subTitle="About Us" />
      <DetailsAboutSection />
      <CounterSection />
      <AboutSectionTwo />
      <HistorySection />

      <FooterFive />
    </main>
  );
};

export default Index;
