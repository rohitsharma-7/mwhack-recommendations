import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const RootPageLayout = ({ children }: Props) => {
  return (
    <>
      <Box as="section" pb={{ base: "12", md: "24" }}>
        <Box as="nav" bg="bg-surface" boxShadow="md">
          <Container maxW="container.xl" py={{ base: "3", lg: "5" }}>
            <Flex alignItems="center" justify="space-between">
              <Heading>GetReco</Heading>
              <Button>Request Testimonial</Button>
            </Flex>
          </Container>
        </Box>
      </Box>
      <Container maxW="container.xl">{children}</Container>
    </>
  );
};

export default RootPageLayout;
