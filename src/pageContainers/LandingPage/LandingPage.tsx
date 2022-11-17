import { Button, Heading, Image, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const HomePageContainer = () => {
  const router = useRouter();
  return (
    <VStack spacing="12">
      <Image w="40" src="testimonial.svg" alt="" />
      <Heading w="5xl" textAlign="center" size="3xl">
        Get all your company{"'"}s
        <span className="text-purple-800"> testimonials </span>
        added at one place
      </Heading>
      <Button
        size="lg"
        colorScheme="purple"
        onClick={() => router.push("company")}
      >
        Add your Company
      </Button>
    </VStack>
  );
};

export default HomePageContainer;
