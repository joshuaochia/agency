import Wrapper from "../layout/wrapper";
import SEO from "@components/seo";
import HomeFiveMain from "@components/home";

export default function HomeFive() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Five"} />
      <HomeFiveMain />
    </Wrapper>
  );
}
