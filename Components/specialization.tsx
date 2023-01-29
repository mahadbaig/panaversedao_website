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

const Specialization = (props: any) => {
  return (
    <Center flexDirection={"column"} marginBottom={"50"}>
      <Accordion w={"70%"} allowToggle>
        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 1 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 1 : Web 3 & Metaverse
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 : Smart Contracts and Web 3 dApps</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Blockchain & Metaverse Theory</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Smart contract development in Solidity</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>dApps development using EtherJS and NextJS</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Tokenomics</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Blockchain Project: Create a Token and Launch ICO/IEO/IDO</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Open Virtual and Augmented Metaverse Experiences</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>Open Metaverse development</h5>
              </ListItem>
              <ListItem padding={"10px 0"}>
                <h5>Blender 3D for Metaverse asset creation</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 2 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 2 : Artificial Intelligence and Deep Learning
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 : Intelligent APIs and Python Programming</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Pythong crash course</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Introduction to ML, Data Science and AI</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Building Next-Gen intelligent Apps</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Deep Learning and MLOPs</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>Deep Learning with Tensorflow</h5>
              </ListItem>
              <ListItem padding={"10px 0"}>
                <h5>ML Engineering for production using CDKTF</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 3 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 3 : Cloud-Native Computing
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 : Certified Kubernetes Application Developer</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Mastering Kubernetes</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Cloud Development Kit for Kubernetes</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Developing Multi-Cloud Apps using CDK for Terraform</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>CDK for Terraform</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 4 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 4 : Ambient Computing and IoT
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 :  Ambient Computing with Voice Assistants and Matter Devices</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Alexa skill development</h5>
              </ListItem>
              <ListItem padding={"10"}>
                <h5>Alexa with Matter Protocol</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Embedded Programming using C and Rust</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>Introduction to IoT and Embedded Programs</h5>
              </ListItem>
              <ListItem padding={"10px 0"}>
                <h5>Programming in C</h5>
              </ListItem>
              <ListItem padding={"10px 0"}>
                <h5>Deep dive into Embedded Systems</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 5 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 5 : Genomics and Bioinformatics
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 : Python for Biologists</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Curriculum under development</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Bioinformatics with Python</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>Curriculum under development</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem padding={"25"}>
          <h2>
            <AccordionButton bg={"transparent"} border="none">
              <Box as="span" flex="1" textAlign="left">
                <h2>
                  <Highlight
                    query={"Track 6 :"}
                    styles={{ rounded: "full", bg: "#FED7D7" }}
                  >
                    Track 6 : Network Programmability and Automation
                  </Highlight>
                </h2>
              </Box>
              <AccordionIcon boxSize={"50"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding="10px" paddingLeft={"80px"}>
            <UnorderedList padding={"15"}>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 4 : CCNA 200-301 Certification</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10"}>
                <h5>Curriculum under development</h5>
              </ListItem>
              </UnorderedList>
              <ListItem padding={"10px 0"}>
                <h4>Quarter 5 : Network Programmability and Automation</h4>
              </ListItem>
              <UnorderedList>
              <ListItem padding={"10px 0"}>
                <h5>Curriculum under development</h5>
              </ListItem>
              </UnorderedList>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Center>
  );
};

export default Specialization;
