import SEO from "@components/seo";

import Wrapper from "../layout/wrapper";
import HomeFive from "./home-5";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Main"} />
      <HomeFive />
    </Wrapper>
  );
}
