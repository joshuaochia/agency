import React from "react";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "./contact-section";

import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";

const Index = () => {
  return (
    <main>
      <HeaderFour />
      <Breadcrumb title="Contact Us" subTitle="Contact Us" />
      <ContactSection />

      <FooterFive />
    </main>
  );
};

export default Index;
