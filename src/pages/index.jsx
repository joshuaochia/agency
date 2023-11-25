import Wrapper from "../layout/wrapper";
import SEO from "@components/seo";
import HomeFiveMain from "@components/home";

export default function HomeFive(props) {
  return (
    <Wrapper>
      <SEO pageTitle={"Home"} />
      <HomeFiveMain portfolioData={props.portfolioData} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const query = `query {  
    portfolioCollection (limit: 10) {
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
    props: {
      portfolioData: returnObject,
    },
  };
}
