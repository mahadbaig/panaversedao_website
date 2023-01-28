import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import Btn from "./button";

const HeroHome = (props: any) => {
  const heading = props.heading;
  const desc = props.desc;
  const btntxt = props.btntxt;
  const btnlink = props.btnlink;
  return (
    <Flex
      margin="25px 0"
      wrap={'wrap'}
    >
      
        <Flex boxSize={"650"} direction='column' justifyContent={'center'}>
          <h1>{heading}</h1>
          <h6>{desc}</h6>
          <br />
          <Btn pagelink={btnlink} pagename={btntxt} />
        </Flex>
      
      <Spacer />
      <Box
      bgImage="url(https://picsum.photos/800/700)"
      bgRepeat={'no-repeat'}
      bgPos='center'
      boxSize={'650'}
      >
      </Box>
    </Flex>
  );
};

export default HeroHome;
