import ProfileCard from "./profilecard";
import { Flex, Center } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <>
      <Flex wrap={"wrap"}
      justifyContent={'center'}>
        
          <ProfileCard onoma="Mirza Mahad Baig" profession="UX Designer" img = "https://picsum.photos/1/200/200?grayscale"/>
          <ProfileCard onoma="Syed Adeel" profession="Oracle Developer" img = "https://picsum.photos/1/200/200?grayscale"/>
          <ProfileCard onoma="Talha Khilji" profession="Bio-Medical Engineer" img = "https://picsum.photos/1/200/200?grayscale"/>
          <ProfileCard onoma="Muhammad Azhar" profession="AI Engineer" img = "https://picsum.photos/1/200/200?grayscale"/>
          <ProfileCard onoma="Ibrahim Memon" profession="HR Manager" img = "https://picsum.photos/1/200/200?grayscale"/>
          <ProfileCard onoma="Ahmed Khan" profession="Javascript Developer" img = "https://picsum.photos/1/200/200?grayscale"/>
        
      </Flex>
    </>
  );
};

export default Gallery;
