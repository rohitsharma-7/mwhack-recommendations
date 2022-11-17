import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { CompanyCard } from "../../components/cards";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const fetchCompanyData = (_: any, companyId: string | undefined) => {
  return axios.get(`/api/company/${companyId}`).then(({ data }) => data);
};

const EndorsementListingPageContainer = () => {
  const router = useRouter();
  const companyId = router.query.companyId;

  const { isLoading, data, ...query } = useQuery(
    ["fetchCompanyData", companyId],
    (e) => fetchCompanyData(e, companyId as string),
    {
      enabled: !!companyId,
    }
  );

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  console.log({ data });

  return (
    <Flex alignItems="flex-start" justifyContent="space-between" pb="24">
      <CompanyCard companyData={dummyCompanyData} />
      <HStack pl="8" boxSizing="border-box" w="calc(100vw - 600px)">
        <VStack w="full" spacing="4">
          {data.endorsements.length > 0 ? (
            data.endorsements.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonialData={testimonial}
              />
            ))
          ) : (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              h="80"
            >
              <VStack spacing="8">
                <Heading color="purple.800">No Testimonials found!</Heading>
                <Button
                  colorScheme="purple"
                  onClick={() =>
                    router.push(`${router.query.companyId}/testimonial/`)
                  }
                >
                  Request Testimonial
                </Button>
              </VStack>
            </Flex>
          )}
        </VStack>
      </HStack>
    </Flex>
  );
};

export default EndorsementListingPageContainer;
