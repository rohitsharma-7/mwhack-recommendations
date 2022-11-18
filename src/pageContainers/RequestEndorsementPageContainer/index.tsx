import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { type ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import countries from "../../utils/countrySelect";
import axios from "axios";

type details = {
  name: string;
  country: string;
  email: string;
  otp: string;
  profilePictureURL: string;
};

const RequestEndorsementPageContainer = () => {
  const [details, setDetails] = useState<details>({
    name: "",
    country: "",
    email: "",
    otp: "",
    profilePictureURL: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const router = useRouter();
  console.log({ router });
  const toast = useToast();
  useEffect(() => {
    if (router.query.companyId) {
      const sendOTP = async () => {
        try {
          const res = await axios.get(
            `/api/company/${router.query.companyId}/testimonial`
          );
          if (res.status === 200) {
            toast({
              title: "Email Sent!",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom-right",
            });
          }
        } catch (e: any) {
          console.error(e);
          toast({
            title: "Something went wrong :(",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      };
      sendOTP();
    }
  }, [router]);

  const handleButtonClick = async () => {
    console.log(details);

    try {
      const res = await axios.post(
        `/api/company/${router.query.companyId}/testimonial`,
        details
      );
      if (res.status === 200) {
        toast({
          title: "Request Sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Something went wrong :(",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <VStack align="flex-start" textAlign="left">
      <Text fontSize="5xl" className="text-purple-800">
        Client&apos;s Information:
      </Text>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          variant="filled"
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
          variant="filled"
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
          variant="filled"
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
        <PinInput
          variant="filled"
          otp
          value={details.otp}
          onChange={(e) => setDetails({ ...details, otp: e })}
        >
          <PinInputField
            marginRight={4}
            marginBottom={8}
            _focus={{
              borderColor: "purple.600",
            }}
            borderColor="purple.300"
            _hover={{
              borderColor: "purple.300",
            }}
          />
          <PinInputField
            marginRight={4}
            marginBottom={8}
            _focus={{
              borderColor: "purple.600",
            }}
            borderColor="purple.300"
            _hover={{
              borderColor: "purple.300",
            }}
          />
          <PinInputField
            marginRight={4}
            marginBottom={8}
            _focus={{
              borderColor: "purple.600",
            }}
            borderColor="purple.300"
            _hover={{
              borderColor: "purple.300",
            }}
          />
          <PinInputField
            marginRight={4}
            marginBottom={8}
            _focus={{
              borderColor: "purple.600",
            }}
            borderColor="purple.300"
            _hover={{
              borderColor: "purple.300",
            }}
          />
        </PinInput>

        <FormLabel>Profile Picture URL</FormLabel>
        <Input
          variant="filled"
          width="2xl"
          marginBottom={8}
          type="text"
          focusBorderColor="purple.600"
          borderColor="purple.300"
          _hover={{
            borderColor: "purple.300",
          }}
          name="profilePictureURL"
          value={details.profilePictureURL}
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
