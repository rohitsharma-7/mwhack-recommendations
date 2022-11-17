import { type NextPage } from "next";
import RootPageLayout from "../../components/layout";
import CreateCompanyPageContainer from "../../pageContainers/CreateCompanyPageContainer";

const CreateCompany: NextPage = () => {
  return (
    <RootPageLayout>
      <CreateCompanyPageContainer />
    </RootPageLayout>
  );
};

export default CreateCompany;
