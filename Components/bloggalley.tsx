import BlogCard from "./blogcard";
import { Flex, Center } from "@chakra-ui/react";

const BlogGallery = (props:any) => {
  const card1 = props.card1
  const card1link = props.card1link
  const card2 = props.card2
  const card2link = props.card2link
  const card3 = props.card3
  const card3link = props.card3link
  return (
    <>
      <Flex wrap={"wrap"} justifyContent={"center"} marginBottom='100'>
        <BlogCard
          title= {card1}
          page= {card1link}
        />
         <BlogCard
          title={card2}
          page={card2link}
        /> <BlogCard
        title={card3}
        page={card3link}
      />
      </Flex>
    </>
  );
};

export default BlogGallery;
