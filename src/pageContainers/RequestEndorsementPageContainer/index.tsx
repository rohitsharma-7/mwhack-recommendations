import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { type ChangeEvent, useState } from "react";
import countries from "../../utils/countrySelect";

type details = {
  name: string;
  country: string;
  email: string;
  otp: string;
};

const RequestEndorsementPageContainer = () => {
  const [details, setDetails] = useState<details>({
    name: "",
    country: "",
    email: "",
    otp: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const handleButtonClick = () => {
    console.log(details);
    toast({
      title: "Email Sent!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const toast = useToast();

  return (
    <VStack align="flex-start" textAlign="left">
      <Text fontSize="5xl">Client&apos;s Information:</Text>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="text"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          name="name"
          value={details.name}
          onChange={handleInputChange}
        />
        <FormLabel>Email address</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="email"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          name="email"
          value={details.email}
          onChange={handleInputChange}
        />
        <FormLabel>Country</FormLabel>
        <Select
          placeholder="Country"
          width="2xl"
          marginBottom={8}
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          onChange={handleInputChange}
          name="country"
          value={details.country}
        >
          {countries.map((country) => (
            <option value={country.name} key={country.code}>
              {country.name}
            </option>
          ))}
        </Select>
        <FormLabel>OTP</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="text"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          name="otp"
          value={details.otp}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button colorScheme="purple" size="lg" onClick={handleButtonClick}>
        Request
      </Button>
    </VStack>
  );
};

export default RequestEndorsementPageContainer;
