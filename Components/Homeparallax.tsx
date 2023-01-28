import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Center } from "@chakra-ui/react";

const LeftTextHero = (props: any) => {
  const heading = props.heading;
  const bgimg = props.bgimg
  return (
    <Center>
    <Flex
    color={"white"} 
    // margin="50px 0" 
    wrap={"wrap"}
    justifyContent='center'
    alignItems={'center'}
    textAlign={'center'}
    // boxSize='700'
    minH='100vh'
    bgImage={`url(${bgimg})`}
    bgAttachment='fixed'
    >
      <h1>{heading}</h1>
    </Flex>
    </Center>
  );
};

export default LeftTextHero;
