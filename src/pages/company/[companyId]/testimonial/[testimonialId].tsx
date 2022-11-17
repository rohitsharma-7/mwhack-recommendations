import { type NextPage } from "next";
import RootPageLayout from "../../../../components/layout";
import AddEndorsementPageContainer from "../../../../pageContainers/AddEndorsementPageContainer";

const AddEndorsement: NextPage = () => {
  return (
    <RootPageLayout>
      <AddEndorsementPageContainer />
    </RootPageLayout>
  );
};

export default AddEndorsement;
