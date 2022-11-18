import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { CompanyCard } from "../../components/cards";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      <CompanyCard
        companyData={{
          name: data.name,
          logo: data.logo,
          description: data.description,
          category: data.category,
          address: data.address,
          website: data.website,
        }}
      />
      <HStack pl="8" boxSizing="border-box" w="calc(100vw - 600px)">
        <VStack w="full" spacing="4">
          {data?.testimonials?.filter((t: any) => t.isPublic)?.length > 0 ? (
            data.testimonials.map((testimonial: any, index: number) => (
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
