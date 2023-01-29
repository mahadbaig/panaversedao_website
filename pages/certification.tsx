import Head from "next/head";
import HeroHome from "../Components/hero";
import Video from "../Components/video";
import CenteredHeading from "../Components/centeredheading";
import { Container } from "@chakra-ui/react";
import CenterLayout from "../Components/centerlayout";
import CoreCourse from "../Components/corecourse";
import Specialization from "../Components/specialization";

const Certification = () => {
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
          heading="A 15-Month Long Web 3.0 Specialization Program"
          desc=""
          btntxt="Register Now"
          btnlink="https://www.piaic.org"
          gbtntxt=""
          gbtnlink=""
          img = "https://i.imgur.com/C79ptqP.png"
        />
      </Container>

      <Container
      padding={'0 25px'}>
        <Video
        link = "https://www.youtube.com/watch?v=70INoaW37e8"
        />
      </Container>

      <Container>
        <CenterLayout
        heading = "Program In A Nutshell"
        desc = "This program is intended for beginners who want to learn Web 3 development from the ground up. Students will learn how to make money and boost exports in the classroom and will begin doing so within 6-9 months of the program's beginning."
        bgimg = "https://i.imgur.com/Q5tJha2.jpeg"
        btntxt = "Register Now"
        btnlink = "https://www.piaic.org/"
        />
      </Container>

      <Container padding={"0 25px"}>
        <HeroHome
          heading="Program Curriculum"
          desc="It is a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into 5 quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects."
          btntxt="See Curriculum"
          btnlink="#curriculum"
          gbtntxt=""
          gbtnlink=""
          img = "https://i.imgur.com/1FQSDix.png"
        />
      </Container>

<Container id="curriculum"
padding={'0 50px'}>
    <CenteredHeading
    heading = "Every participant of the program will start by completing the following three core courses"
    tagline = "Core Courses"
    />
</Container>

<Container
padding={'0 25px'}>
<CoreCourse
/>
</Container>

<Container id="curriculum"
padding={'0 50px'}>
    <CenteredHeading
    heading = "After completing the first 3 quarters the participants will select one track consisting of 2 courses each"
    tagline = "Specialization Tracks"
    />
</Container>

<Container
padding={'0 25px'}>
  <Specialization />
</Container>

<Container
padding={'0 25px'}>
<HeroHome 
heading = "What's Next?"
desc = "Here's all the opportunities you'll unlock after completing the entire program. No matter the specialization track you select, Here's a comprehensive guide on how to move forward"
btntxt = "Read Full Article"
btnlink = "/"
gbtntxt = ""
gbtnlink = ''
img = "https://i.imgur.com/gOwkVV7.png"
/>
</Container>

<Container
padding={'0 25px'}
>
  <Video 
  link = "https://youtu.be/GYEH8ZayjH4"
  />
</Container>



<Container>
        <CenterLayout
        heading = "Become An Early Adaptor & Get Ahead"
        desc = "Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Become an early adaptor and grow with the technology, earning at the same time."
        bgimg = "https://i.imgur.com/FC7Cmx6.jpg"
        btntxt = "Register Now"
        btnlink = "https://www.piaic.org/"
        />
      </Container>

    </main>
  );
};

export default Certification;
