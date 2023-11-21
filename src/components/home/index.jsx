import AboutSectionFive from "./about-section-5";
import BlogSectionFive from "./blog-section-5";
import BrandSectionFive from "./brand-section-5";
import PolicySection from "./policy-section";
import ReviewSectionFive from "./review-section-5";
import ServiceSectionFive from "./service-section-5";

import ValueSection from "./value-section";
import FooterFive from "@layout/footer/footer-5";
import HeaderFour from "@layout/header/header-4";
import HeroSectionFour from "@components/home/hero-section-4";
import PortfolioSectionTwo from "@components/home/portfolio-section-2";

const Index = (props) => {
  return (
    <main className="overflow-hidden">
      <HeaderFour />
      <HeroSectionFour />
      <PolicySection />
      <AboutSectionFive />
      <ServiceSectionFive />
      <ValueSection />
      <BrandSectionFive />
      <PortfolioSectionTwo data={props.portfolioData} />
      {/* <TeamSection /> */}
      <ReviewSectionFive />
      <BlogSectionFive />
      <FooterFive />
    </main>
  );
};

export default Index;
