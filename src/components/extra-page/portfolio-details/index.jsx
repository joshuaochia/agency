import React from "react";
import DetailsSection from "./details-section";

import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";

const Index = ({ item }) => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb title="Portfolio Details" subTitle="Portfolio Details" />
        <DetailsSection item={item} />
        {/* <CollectionSection /> */}
      </main>
      <FooterFive />
    </>
  );
};

export default Index;
