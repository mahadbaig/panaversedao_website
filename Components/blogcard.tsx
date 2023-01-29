import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link, Image } from "@chakra-ui/react";
import styles from "../styles/blogcard.module.css"


const BlogCard = (props: any) => {
  const title = props.title;
  const page = props.page;
  return (
    <>
      <Link as={NextLink}
      href={page}>
        <Box
          padding={"10"}
          color="black"
          margin={'80px 50px'}
          boxSize={"400"}
        
        >
          <Image 
          src="https://i.imgur.com/8Bt3YqB.png"
          w={'100%'}
          />
          <h2 className = {styles.h2}>{title}</h2>
        </Box>
      </Link>
    </>
  );
};

export default BlogCard
