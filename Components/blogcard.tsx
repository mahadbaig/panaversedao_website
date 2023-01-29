import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link, Image } from "@chakra-ui/react";
import styles from "../styles/blogcard.module.css"


const BlogCard = (props: any) => {
  const title = props.title;
  const page = props.page;
  const desc = props.desc
  return (
    <>
      <Link as={NextLink}
      href={page}>
        <Box
          padding={"10"}
          color="black"
          margin={'50px'}
          boxSize={"400"}
        
        >
          <Image 
          src="https://picsum.photos/400"
          alt={desc}
          />
          <h2 className = {styles.h2}>{title}</h2>
        </Box>
      </Link>
    </>
  );
};

export default BlogCard
