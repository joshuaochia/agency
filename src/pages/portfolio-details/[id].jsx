import PortfolioDetailsArea from "@components/extra-page/portfolio-details";
import SEO from "@components/seo";
import portfolio_data from "@data/common_data/portfolio-data";
import Wrapper from "@layout/wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// export async function getStaticPaths() {
//     // Fetch all portfolio item slugs from Contentful
//     const slugs = await getPortfolioItemSlugs(); // Implement this function to get the slugs

//     // Generate paths based on slugs
//     const paths = slugs.map((slug) => ({
//       params: { slug },
//     }));

//     return { paths, fallback: false };
//   }

//   export async function getStaticProps({ params }) {
//     // Fetch data for a specific portfolio item based on the slug
//     const portfolioItem = await getContentfulData(params.slug); // Implement this function to get the data

//     return {
//       props: {
//         portfolioItem,
//       },
//     };
//   }

const PortfolioDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [portfolio, setPortfilio] = useState({});
  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setPortfilio(portfolio_data.find((item) => item.id == id));
    return () => {};
  }, [id]);
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Details"} />
      <PortfolioDetailsArea item={portfolio} />
    </Wrapper>
  );
};

export default PortfolioDetails;
