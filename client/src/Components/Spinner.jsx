import { Flex, Text } from "@chakra-ui/react";
import { Hourglass, RotatingSquare} from "react-loader-spinner";

const Spinner = ({ msg}) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      height={"full"}
      px={10}
    >
      <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#319795', '#76D1CF']}
  />
      <Text fontSize={25} textAlign="center" px={2}>
        {msg}
      </Text>
 
    </Flex>
  );
};

export default Spinner;