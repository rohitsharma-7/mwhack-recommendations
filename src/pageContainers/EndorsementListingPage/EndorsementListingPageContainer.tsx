import { HStack } from "@chakra-ui/react";
import { CompanyCard } from "../../components/cards";

const dummyCompanyData = {
  companyName: "Meltwater",
  logoURL:
    "https://media-exp1.licdn.com/dms/image/C560BAQFqCEBmVvvSeA/company-logo_200_200/0/1656696462520?e=1676505600&v=beta&t=iPuGCGguq8YX1NUTgOAiQESMGriQCqiGSpWNyHfsfAI",
  description:
    "Leading media monitoring & social analytics platform helping businesses understand and influence the world around them.",
  category: " IT Services and IT Consulting",
  address: {
    city: "San Francisco",
    country: "USA",
  },
  website: "https://www.meltwater.com/en",
};

const EndorsementListingPageContainer = () => {
  return (
    <HStack alignItems="flex-start" spacing="8">
      <CompanyCard companyData={dummyCompanyData} />
      <h2>Endorsement Listing Page Container</h2>
    </HStack>
  );
};

export default EndorsementListingPageContainer;
