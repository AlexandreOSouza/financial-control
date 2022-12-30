import { Flex } from "@chakra-ui/react";
import SearchInput from "../inputs/searchInput/SearchInput";

const StatusBar = () => {
  return (
    <Flex width={"100%"} height={"70px"} alignItems={"center"}>
      <Flex width={"300px"}>
        <SearchInput placeholder="Search" />
      </Flex>
    </Flex>
  );
};

export default StatusBar;
