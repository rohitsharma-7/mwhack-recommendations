import {
  Text,
  HStack,
  VStack,
  Textarea,
  Button,
  Link,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { CompanyCard } from "../../components/cards";
import { BsCheck2 } from "react-icons/bs";
import axios from "axios";

const AddEndorsementPageContainer = () => {
  const fetchCompanyData = (_: any, companyId: string | undefined) => {
    return axios.get(`/api/company/${companyId}`).then(({ data }) => data);
  };
  const router = useRouter();
  const toast = useToast();
  const companyId = router.query.companyId;
  const testimonialId = router.query.testimonialId;

  const [endorsementText, setEndorsementText] = useState<string>("");
  const [pfpUrl, setPfpUrl] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEndorsementText(e.target.value);
  const handleButtonClick = async () => {
    try {
      const res = await axios.put(
        `/api/company/${companyId}/testimonial/${testimonialId}`,
        {
          picture: pfpUrl,
          message: endorsementText,
        }
      );
      if (res.status === 200) {
        toast({
          title: "Endorsement Submitted!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      }
      setStep((s) => (s += 1));
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

  const { isLoading, data, ...query } = useQuery(
    ["fetchCompanyData", companyId],
    (e) => fetchCompanyData(e, companyId as string),
    {
      enabled: !!companyId,
    }
  );

  if (isLoading) {
    return <div>LOADING...</div>;
  }
  return (
    <HStack alignItems="flex-start" spacing={8}>
      <CompanyCard
        companyData={{
          name: data.name,
          logo: data.logo,
          description: data.description,
          category: data.category,
          address: data.address,
          website: data.website,
        }}
      />
      {step === 0 ? (
        <VStack w="full" alignItems="flex-start" textAlign="left">
          <FormControl isRequired>
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
              value={pfpUrl}
              onChange={(e) => setPfpUrl(e.target.value)}
            />
            <Text fontSize="5xl" className="text-purple-800">
              Add Your Endorsement
            </Text>
            <Textarea
              variant="filled"
              resize="none"
              value={endorsementText}
              onChange={handleInputChange}
              marginBottom={8}
              focusBorderColor="purple.600"
              borderColor="purple.300"
              _hover={{
                borderColor: "purple.300",
              }}
              height={56}
            />
          </FormControl>
          <Button
            colorScheme="purple"
            size="lg"
            alignSelf="flex-end"
            onClick={() => handleButtonClick()}
          >
            Submit
          </Button>
        </VStack>
      ) : (
        <VStack w="full">
          <Icon as={BsCheck2} w={24} h={24} className="fill-purple-800" />
          <Text fontSize="5xl" mb={8} className="text-purple-800">
            Your endorsment has been
            <br />
            successfully submitted
          </Text>

          <Link href={`/company/${companyId}`}>View all endorsements</Link>
        </VStack>
      )}
    </HStack>
  );
};

export default AddEndorsementPageContainer;
