import PortfolioDetailsArea from "@components/extra-page/portfolio-details";
import SEO from "@components/seo";
import portfolio_data from "@data/common_data/portfolio-data";
import Wrapper from "@layout/wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export async function getStaticPaths() {
  // Fetch all portfolio item slugs from Contentful
  const query = `query {  
    portfolioCollection {
      items {
        slug
      }
    }
}`;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/d9sw8o4cytj7`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({ query }),
    }
  );

  const data = await res.json();

  const items = data.data.portfolioCollection.items;

  // Generate paths based on slugs
  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for a specific portfolio item based on the slug
  const query = `query {  
      portfolioCollection (where: {slug: "${params.slug}"} limit:1) {
        items {
          slug
          title
          description
          longDescription
          industry
          estimation
          dateStarted
          problem
          whatWeDid
          whatWeDidList
          dateStarted
          client
          photoResultsCollection {
            items{
               url
            }
          }
          portfolioOpportunitiesCollection{
            items {
             ... on PortfolioOpportunities{
              title
              description
              icon {
                url
              }
              }
            }
          }
          finalResult
          thumbnailOne {
            url
          }
          bannerImage {
            url
          }
          thumbnailTwo {
            url
          }
          category {
            ... on Category{
              title
            }
          }
        }
      }
  }`;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/d9sw8o4cytj7`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({ query }),
    }
  );

  const data = await res.json();

  const items = data.data.portfolioCollection.items[0];

  return {
    props: items,
  };
}

const PortfolioDetails = (props) => {
  const router = useRouter();

  const [portfolio, setPortfilio] = useState({});

  useEffect(() => {
    if (!props) {
      router.push("/404");
    } else setPortfilio(props);

    return () => {};
  }, [props]);

  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Details"} />
      <PortfolioDetailsArea item={portfolio} />
    </Wrapper>
  );
};

export default PortfolioDetails;
