import React from "react";
import DetailsSection from "./details-section";
import ReviewSection from "./review-section";
import FaqSection from "./faq-section";

import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";
import ReviewSectionFive from "@components/home/review-section-5";
import PortfolioSectionTwo from "@components/home/portfolio-section-2";

const Index = ({ item, portfolioData, portfolioSingular }) => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb title="Service Details" subTitle="Service Details" />
        <DetailsSection item={item} />
        <PortfolioSectionTwo
          portfolioSingular={portfolioSingular}
          data={portfolioData}
          item={item}
        />
        <ReviewSectionFive />

        <FaqSection data={item.QandA} />
      </main>
      <FooterFive />
    </>
  );
};

export default Index;
