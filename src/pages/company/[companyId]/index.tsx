import { NextPage } from "next";
import EndorsementListingPageContainer from "../../../pageContainers/EndorsementListingPage/index";

const EndorsementListingPage: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <EndorsementListingPageContainer />
    </main>
  );
};

export default EndorsementListingPage;
