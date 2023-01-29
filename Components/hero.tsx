import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import Btn from "./button";
import GhostBtn from "./ghostbutton";

const HeroHome = (props: any) => {
  const heading = props.heading;
  const desc = props.desc;
  const btntxt = props.btntxt;
  const btnlink = props.btnlink;
  const gbtnlink = props.gbtnlink;
  const gbtntxt = props.gbtntxt;
  return (
    <Flex
      // margin="25px 0"
      wrap={'wrap'}
      marginBottom='50'
    >
      
        <Flex 
        boxSize={"650"} 
        direction='column' 
        justifyContent={'center'}
        marginBottom = '150'>
          <h1>{heading}</h1>
          <h6>{desc}</h6>
          <br />
          <Flex>
          <Btn pagelink={btnlink} pagename={btntxt} />
          <GhostBtn pagelink={gbtnlink} pagename={gbtntxt} />
          </Flex>
        </Flex>
      
      <Spacer />
      <Box
      // marginTop={'150'}
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
