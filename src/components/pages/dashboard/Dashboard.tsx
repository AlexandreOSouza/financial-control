import StatusBar from "@/components/statusbar/StatusBar";
import { Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex width={"100%"} height={"100%"} pl={"40px"}>
      <StatusBar />
    </Flex>
  );
};

export default Dashboard;
