import { Text, HStack, VStack, Textarea, Button, Link } from "@chakra-ui/react";
import { type ChangeEvent, useState } from "react";
// import { CompanyCard } from "../../components/cards";

const AddEndorsementPageContainer = () => {
  const [endorsementText, setEndorsementText] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEndorsementText(e.target.value);
  const handleButtonClick = () => {
    setStep((s) => (s += 1));
    // console.log(step);
  };
  return (
    <HStack alignItems="flex-start" spacing={8}>
      {/* <CompanyCard/> */}
      {step === 0 ? (
        <VStack w="full" alignItems="flex-start">
          <Text fontSize="5xl" className="text-purple-800">
            Add Your Endorsement
          </Text>
          <Textarea
            resize="none"
            value={endorsementText}
            onChange={handleInputChange}
            size="lg"
            marginBottom={8}
            focusBorderColor="purple.600"
            borderColor="purple.300"
            _hover={{
              borderColor: "purple.300",
            }}
            height="sm"
          />
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
        <VStack w="full" paddingTop={36}>
          <Text fontSize="5xl" mb={8} className="text-purple-800">
            Your endorsment has been
            <br />
            successfully submitted
          </Text>

          <Link>View all endorsements</Link>
        </VStack>
      )}
    </HStack>
  );
};

export default AddEndorsementPageContainer;
