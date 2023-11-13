import React from "react";
import ErrorSection from "./error-section";

import HeaderFour from "@layout/header/header-4";
import FooterFive from "@layout/footer/footer-5";

const ErrorMainArea = () => {
  return (
    <main>
      <HeaderFour />
      <ErrorSection />

      <FooterFive />
    </main>
  );
};

export default ErrorMainArea;
