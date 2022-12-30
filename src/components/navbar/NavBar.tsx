import { Flex } from "@chakra-ui/react";
import Logo from "../logo/Logo";
import { RiDashboard2Line, RiFilePaper2Line } from "react-icons/ri";
import NavBarItem from "./navbar-item/NavBarItem";

const LINKS = [
  {
    title: "Dashboard",
    uri: "/",
    icon: <RiDashboard2Line />,
    isActive: true,
  },
  {
    title: "Entries",
    uri: "/entries",
    icon: <RiFilePaper2Line />,
  },
  {
    title: "Menu 1",
    uri: "/",
    icon: <RiFilePaper2Line />,
  },
  {
    title: "Menu 1",
    uri: "/",
    icon: <RiFilePaper2Line />,
  },
];

const NavBar = () => {
  return (
    <>
      <Flex
        height={"100%"}
        width={"20%"}
        maxWidth={"250px"}
        direction={"column"}
        display={{ base: "none", lg: "flex" }}
      >
        <Logo />
        <Flex
          width={"100%"}
          py={"30px"}
          px={"5px"}
          background={"white.200"}
          borderRightRadius={"20px"}
          height={"80%"}
          direction={"column"}
          justifyContent={"flex-start"}
          rowGap={"5px"}
        >
          {LINKS.map((item: any) => {
            return <NavBarItem {...item} />;
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
