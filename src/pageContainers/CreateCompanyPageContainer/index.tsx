import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Textarea,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";
import { type ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import countries from "../../utils/countrySelect";

type details = {
  name: string;
  email: string;
  logo: string;
  description: string;
  address: {
    city: string;
    country: string;
  };
  category: string;
  website: string;
};

const CreateCompanyPageContainer = () => {
  const [details, setDetails] = useState<details>({
    name: "",
    email: "",
    logo: "",
    description: "",
    address: {
      city: "",
      country: "",
    },
    category: "",
    website: "",
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

  const toast = useToast();
  const router = useRouter();

  const createCompany = async () => {
    try {
      const res = await axios.post("/api/company", details);
      if (res.status === 200) {
        toast({
          title: res.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
        router.push(`/company/${res.data.company.slug}`);
      }
    } catch (e: any) {
      toast({
        title: e.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });

      console.error(e);
    }
  };

  const handleButtonClick = () => {
    createCompany();
  };

  return (
    <VStack align="flex-start" textAlign="left" pb={8}>
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
          value={details.logo}
          name="logo"
          onChange={handleInputChange}
        />
        <FormLabel>Website</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="url"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          value={details.website}
          name="website"
          onChange={handleInputChange}
        />
        <FormLabel>Category</FormLabel>
        <Input
          width="2xl"
          marginBottom={8}
          type="text"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          value={details.category}
          name="category"
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
