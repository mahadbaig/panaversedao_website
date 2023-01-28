import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import HeroHome from "../Components/hero";
import LeftHeroText from "../Components/Homeparallax";
import Btn from "../Components/button";
import { Container } from "@chakra-ui/react";
import CenteredHeading from "../Components/centeredheading";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Container margin={"50px 0"}>
          <HeroHome
            heading="A community to learn, grow and earn in Web 3"
            desc="Panaverse DAO is a community of web 3 & metaverse developers, designers, trainers and founders that will help you to “Earn While You Learn” in Web 3"
            btntxt="Join Panaverse"
            btnlink="/join"
          />
        </Container>

        <LeftHeroText
          heading="The Biggest Web 3 & Metaverse Community In Pakistan!"
          bgimg="https://picsum.photos/800/700"
        />
        <LeftHeroText
          heading="More Than 5,000 Active Community Members & Students"
          bgimg="https://picsum.photos/id/237/800/700"
        />
        <LeftHeroText
          heading="150+ Certified Trainers Ready To Lend A Helping Hand"
          bgimg="https://picsum.photos/800/700"
        />
        <LeftHeroText
          heading="Seminars Conducted At Biggest Universities All Across Pakistan"
          bgimg="https://picsum.photos/id/237/800/700"
        />

        <Container
        marginTop={'50px'}>
          <CenteredHeading
            tagline="Members Gallery"
            heading="Meet The Community"
          />
        </Container>
      
      </main>
  );
}
