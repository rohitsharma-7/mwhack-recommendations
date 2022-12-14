import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
  showRequestTestimonial?: boolean;
};

const RootPageLayout = (
  { children, showRequestTestimonial }: Props = {
    showRequestTestimonial: false,
  }
) => {
  const router = useRouter();

  return (
    <Box bgColor="#e9dbfa">
      <Box as="section" pb={{ base: "12", md: "24" }}>
        <Box bgColor="whiteAlpha.600" as="nav" bg="bg-surface" boxShadow="md">
          <Container maxW="container.xl" py={{ base: "3", lg: "5" }}>
            <Flex alignItems="center" justify="space-between">
              <HStack>
                <Image w="14" src="/testimonial.svg" alt="" />
                <Heading>
                  Get
                  <span className="text-purple-800">Reco</span>
                </Heading>
              </HStack>
              {showRequestTestimonial && (
                <Button
                  colorScheme="purple"
                  onClick={() =>
                    router.push(`${router.query.companyId}/testimonial/`)
                  }
                >
                  Request Testimonial
                </Button>
              )}
            </Flex>
          </Container>
        </Box>
      </Box>
      <Container
        minH="calc(100vh - 96px)"
        maxW="container.xl"
        textAlign="center"
      >
        {children}
      </Container>
    </Box>
  );
};

export default RootPageLayout;
