import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import PortfolioGridArea from "@components/extra-page/portfolio-grid-area";
import PortfolioSectionTwo from "@components/home/portfolio-section-2";
import SEO from "@components/seo";
import FooterFive from "@layout/footer/footer-5";
import HeaderFour from "@layout/header/header-4";
import Wrapper from "@layout/wrapper";
import React from "react";

const Index = (props) => {
  console.log(props, "data");
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio"} />
      <HeaderFour />
      <Breadcrumb title="Portfolio Grid" subTitle="Portfolio Grid" />
      <PortfolioSectionTwo data={props} />
      <FooterFive />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const query = `query {
    portfolioCollection {
      items {
        slug
        title
        description
        thumbnailOne {
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
  console.log(data, "-------red");
  const items = data.data.portfolioCollection.items;

  const returnObject = {
    all: items,
    webDesign: items.filter((item) => item.category.title === "Web Design"),
    webDev: items.filter((item) => item.category.title === "Web Dev"),
    videoEdit: items.filter((item) => item.category.title === "Video Edit"),
    discordManagement: items.filter(
      (item) => item.category.title === "Discord Management"
    ),
    discordDev: items.filter(
      (item) => item.category.title === "Discord Development"
    ),
    systemInt: items.filter(
      (item) => item.category.title === "System Integration"
    ),
  };

  return {
    props: returnObject,
  };
}

export default Index;
