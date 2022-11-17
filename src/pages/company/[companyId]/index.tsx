import { type NextPage } from "next";
import RootPageLayout from "../../../components/layout";
import EndorsementListingPageContainer from "../../../pageContainers/EndorsementListingPage/index";

const EndorsementListingPage: NextPage = () => {
  return (
    <RootPageLayout showRequestTestimonial>
      <EndorsementListingPageContainer />
    </RootPageLayout>
  );
};

export default EndorsementListingPage;
