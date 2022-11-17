import { HStack, VStack } from "@chakra-ui/react";
import { CompanyCard } from "../../components/cards";
import TestimonialCard from "../../components/cards/TestimonialCard";

const dummyCompanyData = {
  companyName: "Meltwater",
  logoURL:
    "https://media-exp1.licdn.com/dms/image/C560BAQFqCEBmVvvSeA/company-logo_200_200/0/1656696462520?e=1676505600&v=beta&t=iPuGCGguq8YX1NUTgOAiQESMGriQCqiGSpWNyHfsfAI",
  description:
    "Leading media monitoring & social analytics platform helping businesses understand and influence the world around them.",
  category: " IT Services",
  address: {
    city: "San Francisco",
    country: "USA",
  },
  website: "https://www.meltwater.com/en",
};

const dummyTestimonialData = {
  name: "Parmeet Singh",
  avatar:
    "https://media-exp1.licdn.com/dms/image/C4E03AQH3_Ax8RSDUzw/profile-displayphoto-shrink_800_800/0/1627945999467?e=1674086400&v=beta&t=2a7Nf2jQf3-fK5df5E2XyJr5diMvU8ZGKlO_j3FThUw",
  message:
    "Lorem Ipsum  Leading media monitoring & social analytics platform helping businesses understand and influence the world around them. Leading media monitoring & social analytics platform helping businesses understand and influence the world around them. Leading media monitoring & social analytics platform helping businesses understand and influence the world around them. Leading media monitoring & social analytics platform helping businesses understand and influence the world around them. Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  country: "India",
};

const EndorsementListingPageContainer = () => {
  return (
    <HStack alignItems="flex-start" spacing="8" pb="24">
      <CompanyCard companyData={dummyCompanyData} />
      <HStack w="calc(100vw - 600px)">
        <VStack w="full" spacing="4">
          <TestimonialCard testimonialData={dummyTestimonialData} />
          <TestimonialCard testimonialData={dummyTestimonialData} />
          <TestimonialCard testimonialData={dummyTestimonialData} />
          <TestimonialCard testimonialData={dummyTestimonialData} />
        </VStack>
      </HStack>
    </HStack>
  );
};

export default EndorsementListingPageContainer;
