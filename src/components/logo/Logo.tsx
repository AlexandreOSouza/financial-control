import { Flex, Text } from "@chakra-ui/react";
import { RiBankLine } from "react-icons/ri";

const Logo = () => {
  return (
    <Flex
      height={"70px"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"main.100"}
      columnGap={"10px"}
    >
      <RiBankLine fontSize={"28px"} />
      <Text color={"gray.700"} fontSize={"28px"}>
        FinControl
      </Text>
    </Flex>
  );
};
export default Logo;
