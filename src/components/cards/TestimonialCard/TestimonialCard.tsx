import { Avatar, Card, Flex, HStack, Text } from "@chakra-ui/react";

type Props = {
  testimonialData: {
    name: string;
    avatar: string;
    message: string;
    country: string;
  };
};

const TestimonialCard = ({
  testimonialData: { name, avatar, message, country },
}: Props) => {
  return (
    <Card w="full" px="5" py="8" borderRadius="2xl" bgColor="white">
      <HStack mb="2">
        <Avatar src={avatar} name={name} size="md" />
        <Flex direction="column" alignItems="flex-start">
          <Text fontWeight="semibold">{name} </Text>
          <Text fontSize="sm" color="purple.300">
            {country}
          </Text>
        </Flex>
      </HStack>
      <Text fontStyle="italic" textAlign="left" fontSize="md">
        {'"'}
        {message}
        {'"'}
      </Text>
    </Card>
  );
};

export default TestimonialCard;
