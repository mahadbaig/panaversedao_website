import { Box, Center } from "@chakra-ui/react";
import { url } from "inspector";


const ProfileCard = (props: any) => {
  const onoma = props.onoma;
  const profession = props.profession;
  const img = props.img
  return (
    <>
        <Box
          padding={"10"}
          color="black"
          margin={"30px 20px 0 20px"}
          boxSize={"400"}
          bgRepeat='no-repeat'
          bgSize={'contain'}
          bgImage={`url(${img})`}
        >
          <Box
          flexDirection={'column'}
          paddingTop = '50%'
          padding={'0 25px'}>
          <h2>{onoma}</h2>
          <h4>{profession}</h4>
          </Box>
        </Box>
    </>
  );
};

export default ProfileCard
