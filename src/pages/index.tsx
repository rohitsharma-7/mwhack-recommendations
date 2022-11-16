import { type NextPage } from "next";
import LandingPageContainer from "../pageContainers/LandingPage/LandingPage";

const Landing: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <LandingPageContainer />
    </main>
  );
};

export default Landing;
