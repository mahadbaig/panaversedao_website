import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const LeftTextHero = (props:any) =>{
    const heading = props.heading
    return(
        <Flex
        margin="50px 0"
        wrap={'wrap'}
      >
        
          <Flex boxSize={"650"} direction='column' justifyContent={'center'}>
            <h1>{heading}</h1>
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
    )
}

export default LeftTextHero