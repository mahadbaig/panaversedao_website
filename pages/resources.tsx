import Head from "next/head";
import HeroHome from "../Components/hero";
import { Container } from "@chakra-ui/react";
import BlogGallery from "../Components/bloggalley";
import styles from "../styles/resources.module.css"

const Resources = () => {
  return (
    <main>
      <Head>
        <title>Panaverse DAO - Certification</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container padding={"0 25px"}>
        <HeroHome
          heading="Resources Made Specially For You!"
          desc="Whether you are a professional developer or a complete newbie from a totally different field, These resources will help you progress in the Web 3 space."
          btntxt="See Freebies"
          btnlink="#freebies"
          gbtntxt="See Paid"
          gbtnlink="#paid"
          img = "https://i.imgur.com/u1AZF1s.png"
        />
      </Container>

      <Container id="freebies">
        <h1 className={styles.padding}>Free Resources</h1>
        <BlogGallery 
        card1="Learn HTML CSS by Hira Khan"
        card1link = "https://www.gumroad.com"
        card2="Roadmap for learning Web 3"
        card2link = "https://www.gumroad.com"
        card3="Version control using Git and Github"
        card3link = "https://www.gumroad.com"
         />
      </Container>

      <Container id="freebies">
        <h1 className={styles.padding}>Paid Resources</h1>
        <BlogGallery 
        card1="Typescript Programming"
        card1link = "https://www.gumroad.com"
        card2="Developing complex apps with React"
        card2link = "https://www.gumroad.com"
        card3="Metaverse roadmap"
        card3link = "https://www.gumroad.com"
         />
      </Container>

    </main>
  );
};

export default Resources;