import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";


const ProfileCard = (props: any) => {
  const onoma = props.onoma;
  const profession = props.profession;
  const profile = props.profile
  return (
    <>
      <Link as={NextLink}
      href={profile}>
        <Box
          padding={"10"}
          color="white"
          margin={"30px 20px 0 20px"}
          boxSize={"400"}
          bgImage={"url('https://picsum.photos/400')"}
        >
          <h2>{onoma}</h2>
          <h4>{profession}</h4>
        </Box>
      </Link>
    </>
  );
};

export default ProfileCard
