import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import { type ChangeEvent } from "react";
import { useState } from "react";
import countries from "../../utils/countrySelect";

type details = {
  name: string;
  email: string;
  logoURL: string;
  description: string;
  address: {
    city: string;
    country: string;
  };
};

const CreateCompanyPageContainer = () => {
  const [details, setDetails] = useState<details>({
    name: "",
    email: "",
    logoURL: "",
    description: "",
    address: {
      city: "",
      country: "",
    },
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "country" || name === "city") {
      setDetails({
        ...details,
        address: { ...details.address, [name]: value },
      });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleButtonClick = () => {
    console.log(details);
  };

  return (
    <VStack align="flex-start" textAlign="left">
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
        <FormLabel>Logo URL</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="url"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          value={details.logoURL}
          name="logoURL"
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
          value={details.address.country}
        >
          {countries.map((country) => (
            <option value={country.name} key={country.code}>
              {country.name}
            </option>
          ))}
        </Select>
        <FormLabel>City</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="text"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          value={details.address.city}
          name="city"
          onChange={handleInputChange}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          width="4xl"
          marginBottom={8}
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          name="description"
          value={details.description}
          onChange={handleInputChange}
          height="200px"
        />
      </FormControl>
      <Button
        colorScheme="purple"
        size="lg"
        alignSelf="flex-end"
        onClick={handleButtonClick}
      >
        Save
      </Button>
    </VStack>
  );
};

export default CreateCompanyPageContainer;
