import React from "react";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import dynamic from "next/dynamic";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";
const PortfolioGridSection = dynamic(() => import("./portfolio-grid-section"), {
  ssr: false,
});

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title="Portfolio Grid" subTitle="Portfolio Grid" />
      <PortfolioGridSection />

      <FooterFive />
    </main>
  );
};

export default Index;
