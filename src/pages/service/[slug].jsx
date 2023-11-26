import SEO from "@components/seo";
import ServiceDetailsArea from "@components/extra-page/service-details";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import services_data from "@data/common_data/service-data";
import Wrapper from "@layout/wrapper";

export async function getStaticPaths() {
  // Fetch all portfolio item slugs from Contentful
  const slugs = services_data.map((item) => item.slug); // Implement this function to get the slugs

  // Generate paths based on slugs
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `query {
    portfolioCollection (where: {category_exists: true} limit: 20){
     items{
       title
       description
       slug
       category {
       ... on Category{
         slug
       }
       
       }
       thumbnailOne {
       url
       }
       thumbnailTwo{
       url
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

  const items = data.data.portfolioCollection.items;

  const finalData = items?.filter((item) => item.category.slug === params.slug);

  return {
    props: {
      portfolioData: {
        all: finalData ? finalData : [],
        webDesign: [],
        webDev: [],
        videoEdit: [],
        discordManagement: [],
        discordDev: [],
        systemInt: [],
      },
    },
  };
}

const ServicesDetails = (props) => {
  const router = useRouter();
  const slug = router.query.slug;
  const [service, setService] = useState({});

  useEffect(() => {
    if (!slug) <h1>Loading...</h1>;
    else setService(services_data.find((item) => item.slug == slug));

    return () => {};
  }, [slug]);

  return (
    <Wrapper>
      <SEO pageTitle={"Service Details"} />
      <ServiceDetailsArea
        portfolioSingular={true}
        portfolioData={props.portfolioData}
        item={service}
      />
    </Wrapper>
  );
};

export default ServicesDetails;
