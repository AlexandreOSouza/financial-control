import NavBar from "@/components/navbar/NavBar";
import Dashboard from "@/components/pages/dashboard/Dashboard";
import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"left"}
      background={"white.100"}
    >
      <NavBar />
      <Dashboard />
    </Flex>
  );
};

export default Home;
