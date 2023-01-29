import {
  Accordion,
  Center,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Highlight,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const CoreCourse = (props: any) => {
  return (
    <Center
    flexDirection={'column'}
    marginBottom={'50'}>
      <Accordion w={"70%"} allowToggle>
        <AccordionItem
        padding={'25'}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Quarter 1 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Quarter 1 : Object Oriented Programming Using Typescript
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10"}>
                <h5>Web 3 and Metaverse Theory</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Fundamentals Of Javascript</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Promises, Callbacks, Async / await & Event Loops</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Object Oriented Programming With Typescript</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Typescript for React</h5>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>



        <AccordionItem
        padding={'25'}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Quarter 2 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Quarter 2 : Developing Web 2.0 Serverless Cloud Apps & APIs using Next.js 13 & CDKTF
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10"}>
                <h5>NextJS 13 web development</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>NextJS 13 with Chakra UI</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>UI desing in Figma for developers</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>API Routes with NextJS</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>APIs with NextJS and tRPC</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>SQL and Prisma</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>NextJS 13 using Tailwind CSS</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>AWS Application Composer</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Multi-Cloud GraphQL serverless APIs with CDKTF</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Final Project : Build a Twitter Clone</h5>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>



        <AccordionItem
        padding={'25'}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Quarter 3 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Quarter 3 : Dollar-Making Bootcamp, Templates & API Development
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10"}>
                <h5>Build NextJS Jamstack template</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Build GraphQL APIs</h5>
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Center>
  );
};

export default CoreCourse;
