import Head from "next/head";
import HeroHome from "../Components/hero";
import Parllax from "../Components/parallax";
import { Container } from "@chakra-ui/react";
import CenteredHeading from "../Components/centeredheading";
import BlogGallery from "../Components/bloggalley";
import Video from "../Components/video";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Panaverse DAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        // margin={"50px 0"}
        padding="0 25px"
      >
        <HeroHome
          heading="Community to learn, grow and earn in Web 3.0"
          desc="Panaverse DAO is a community of web 3 & metaverse developers, designers, trainers and founders that will help you to “Earn While You Learn” in Web 3"
          btntxt="Join Panaverse"
          btnlink="/join"
          gbtntxt="Web 3 Certification"
          gbtnlink="/certification"
          img = "https://i.imgur.com/5lsQD2r.png"
        />
      </Container>

      <Container
      padding={'0 25px'}>
        <Video link="https://youtu.be/zmv0A90UKi0" />
      </Container>

      <Parllax
        heading="The Biggest Web 3 & Metaverse Community In Pakistan!"
        bgimg="https://i.imgur.com/Q5tJha2.jpeg"
      />
      <Parllax
        heading="More Than 5,000 Active Community Members & Students"
        bgimg="https://i.imgur.com/Utw0sno.jpeg"
      />
      <Parllax
        heading="150+ Certified Trainers Ready To Lend A Helping Hand"
        bgimg="https://i.imgur.com/91aJgRG.jpeg"
      />
      <Parllax
        heading="Seminars Conducted At Biggest Organizations All Across Pakistan"
        bgimg="https://i.imgur.com/gOr4QMI.jpeg"
      />

      <Container marginTop={"50px"}>
        <CenteredHeading
          tagline="Members Gallery"
          heading="Meet The Community"
        />
      </Container>

      <Container marginTop={"50px"}>
        <CenteredHeading
          tagline="The Panavserse Blog"
          heading="Get The Latest Insights"
        />
      </Container>

      <Container
      padding={'0 25px'}>
        <BlogGallery
        card1 = "Advancement of Web 3 and roles of NextJS"
        card1link = "/"

        card2 = "Advancement of Web 3 and roles of NextJS"
        card2link = "/"

        card3 = "Advancement of Web 3 and roles of NextJS"
        card3link = "/"
        />
      </Container>

      <Container
        marginTop={"250"}
        // marginBottom='50'
        padding={"0 25px"}
      >
        <HeroHome
          heading="Join The Biggest Web 3 Community Where Everyone Is Welcomed!"
          desc="Panaverse DAO helps individuals who are stuck in a low-paying job by offering a welcome community and a 15-month-long Web 3 Certification program that will make them specialized professionals in Web 3."
          btntxt="Web 3 Certification"
          btnlink="/certification"
          gbtntxt="Join Panaverse"
          gbtnlink="/join"
          img = "https://i.imgur.com/clU6JCq.png"
        />
      </Container>
    </main>
  );
}
