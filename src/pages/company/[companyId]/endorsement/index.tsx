import { type NextPage } from "next";
import RootPageLayout from "../../../../components/layout";
import RequestEndorsementPageContainer from "../../../../pageContainers/RequestEndorsementPageContainer";

const RequestEndorsement: NextPage = () => {
  return (
    <RootPageLayout>
      <RequestEndorsementPageContainer />
    </RootPageLayout>
  );
};

export default RequestEndorsement;
