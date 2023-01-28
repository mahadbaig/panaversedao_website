import BlogCard from "./blogcard";
import { Flex, Center } from "@chakra-ui/react";

const BlogGallery = () => {
  return (
    <>
      <Flex wrap={"wrap"} justifyContent={"center"}>
        <BlogCard
          title="Advancements in Web3 and the Role of NextJS"
          page="/join"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, placeat! Magnam quaerat doloremque commodi quibusdam repellat tempore porro officia ea sit nihil. Fugit magnam nobis esse dolor odit, libero in?"
        />
         <BlogCard
          title="Advancements in Web3 and the Role of NextJS"
          page="/join"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, placeat! Magnam quaerat doloremque commodi quibusdam repellat tempore porro officia ea sit nihil. Fugit magnam nobis esse dolor odit, libero in?"
        /> <BlogCard
        title="Advancements in Web3 and the Role of NextJS"
        page="/join"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, placeat! Magnam quaerat doloremque commodi quibusdam repellat tempore porro officia ea sit nihil. Fugit magnam nobis esse dolor odit, libero in?"
      />
      </Flex>
    </>
  );
};

export default BlogGallery;
