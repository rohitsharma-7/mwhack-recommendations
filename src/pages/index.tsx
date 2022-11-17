import { type NextPage } from "next";
import RootPageLayout from "../components/layout";
import LandingPageContainer from "../pageContainers/LandingPage/LandingPage";

const Landing: NextPage = () => {
  return (
    <RootPageLayout>
      <LandingPageContainer />
    </RootPageLayout>
  );
};

export default Landing;
