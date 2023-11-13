import CollectionSection from "@components/home-7/collection-section";
import Footer from "@layout/footer/footer";
import Header from "@layout/header/header";
import React from "react";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import dynamic from "next/dynamic";
import HeaderFive from "@layout/header/header-5";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";
const TermsPrivacySection = dynamic(() => import("./terms-privacy-section"), {
  ssr: false,
});

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title=" Privacy & Policy " subTitle="Privacy & Policy" />
      <TermsPrivacySection />

      <FooterFive />
    </main>
  );
};

export default Index;
