import CollectionSection from "@components/home-7/collection-section";
import Footer from "@layout/footer/footer";
import Header from "@layout/header/header";
import React from "react";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import dynamic from "next/dynamic";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";
const TermsSonditionSection = dynamic(
  () => import("./terms-condition-section"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title="Terms & Conditions" subTitle="Terms & Conditions" />
      <TermsSonditionSection />

      <FooterFive />
    </main>
  );
};

export default Index;
