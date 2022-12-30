import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

const SearchInput = (props: InputProps) => {
  return (
    <InputGroup>
      <Input
        background={"white.200"}
        border={"none"}
        borderRadius={"10px"}
        {...props}
      />
      <InputRightElement children={<RiSearch2Line color="gray" />} />
    </InputGroup>
  );
};

export default SearchInput;
