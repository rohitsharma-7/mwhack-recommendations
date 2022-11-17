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

type Props = {
  companyData: {
    companyName: string;
    logoURL: string;
    description: string;
    category: string;
    address: {
      city: string;
      country: string;
    };
    website: string;
  };
};
const CompanyCard = ({
  companyData: {
    companyName,
    logoURL,
    description,
    category,
    address,
    website,
  },
}: Props) => {
  return (
    <Card px="1" py="3" borderRadius="2xl" w="80" bgColor="white">
      <CardHeader textAlign="left" pb="2">
        <Avatar name={companyName} src={logoURL} size="xl" mb="4" />
        <Heading size="xl">{companyName}</Heading>
        <Text>{description}</Text>
      </CardHeader>
      <CardBody pt="0">
        {category && (
          <HStack>
            <Icon as={BiCategory} className="fill-purple-400" />
            <Text fontSize="sm">{category}</Text>
          </HStack>
        )}
        {(address.city || address.country) && (
          <HStack>
            <Icon as={HiOutlineLocationMarker} className="stroke-purple-400" />
            <Text fontSize="sm">
              {address.city}, {address.country}
            </Text>
          </HStack>
        )}
      </CardBody>
      {website && (
        <CardFooter>
          <Button
            colorScheme="purple"
            variant="outline"
            size="sm"
            rightIcon={<Icon as={BsArrowUpRightCircle} />}
            as="a"
            href={website}
            target="_blank"
          >
            Company Website
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CompanyCard;
