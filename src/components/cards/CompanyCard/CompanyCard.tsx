import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsArrowUpRightCircle } from "react-icons/bs";

const data = {
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
const CompanyCard = () => {
  return (
    <Card px="1" py="3" borderRadius="2xl" w="80" bgColor="white">
      <CardHeader textAlign="left" pb="2">
        <Avatar name={data.companyName} src={data.logoURL} size="xl" mb="4" />
        <Heading size="xl">{data.companyName}</Heading>
        <Text>{data.description}</Text>
      </CardHeader>
      <CardBody pt="0">
        {data.category && (
          <HStack>
            <Icon as={BiCategory} className="fill-purple-400" />
            <Text fontSize="sm">{data.category}</Text>
          </HStack>
        )}
        {(data.address.city || data.address.country) && (
          <HStack>
            <Icon as={HiOutlineLocationMarker} className="stroke-purple-400" />
            <Text fontSize="sm">
              {data.address.city}, {data.address.country}
            </Text>
          </HStack>
        )}
      </CardBody>
      <CardFooter>
        <Button
          colorScheme="purple"
          variant="outline"
          size="sm"
          rightIcon={<Icon as={BsArrowUpRightCircle} />}
          as="a"
          href={data.website}
          target="_blank"
        >
          Company Website
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
