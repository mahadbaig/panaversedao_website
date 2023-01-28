import ProfileCard from "./profilecard";
import { Flex, Center } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <>
      <Flex wrap={"wrap"}
      justifyContent={'center'}>
        
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" profile = "./join" />
        
      </Flex>
    </>
  );
};

export default Gallery;
