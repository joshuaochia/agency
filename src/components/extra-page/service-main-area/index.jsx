import React from "react";
import PortfolioSection from "./portfolio-section";
import PolicySection from "./policy-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ServiceSectionFive from "@components/home/service-section-5";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title="Service V1" subTitle="Service V1" />
      <ServiceSectionFive />
      <PortfolioSection />
      <PolicySection />

      <FooterFive />
    </main>
  );
};

export default Index;
