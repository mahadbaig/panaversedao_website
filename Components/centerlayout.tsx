import { Flex, Box, Center } from "@chakra-ui/react";
import Btn from "./button";

const CenterLayout = (props: any) => {
  const heading = props.heading;
  const bgimg = props.bgimg;
  const desc = props.desc;
  const btntxt = props.btntxt;
  const btnlink = props.btnlink;
  return (
    
      <Flex
        color={"white"}
        marginBottom="50px"
        wrap={"wrap"}
        justifyContent="center"
        alignItems={"center"}
        textAlign={"center"}
        // boxSize='700'
        bgImage={`url(${bgimg})`}
        bgAttachment="fixed"
        bgRepeat={"no-repeat"}
        bgSize="cover"
        padding={'80px 0'}
      >
        <Box
        width={'800px'}>
          <h1>{heading}</h1>
          <br />
          <p>{desc}</p>
          <br />
          <br />
          <Btn pagelink={btnlink} pagename={btntxt} />
        </Box> 
      </Flex>
    
  );
};

export default CenterLayout;
