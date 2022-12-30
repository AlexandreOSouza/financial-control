import { Flex, IconProps, Text, useBoolean } from "@chakra-ui/react";
import Link from "next/link";
import { ReactChild, ReactNode } from "react";

type Props = {
  uri: string;
  icon: ReactNode;
  title: string;
  isActive?: boolean;
};

const NavBarItem = ({ uri, icon, title, isActive = false }: Props) => {
  const [isHover, setIsHover] = useBoolean();

  const colorActive = isActive ? "main.100" : "gray.600";

  return (
    <Link href={uri}>
      <Flex
        alignItems={"center"}
        columnGap={"10px"}
        pl={"40px"}
        direction={"row"}
        height={"50px"}
        width={"100%"}
        cursor={"pointer"}
        onMouseEnter={setIsHover.toggle}
        color={colorActive}
        borderRadius={"20px"}
        _hover={{
          color: "main.100",
          background: "gray.50",
        }}
      >
        {icon}
        <Text color={"gray.500"}>{title}</Text>
      </Flex>
    </Link>
  );
};

export default NavBarItem;
