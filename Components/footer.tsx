import {
  Link,
  Flex,
} from "@chakra-ui/react";
import FootLink from "./foot-link"


const Footer = () => {
  return (
    <Flex justify={'space-evenly'}
    padding = '50'
    wrap={'wrap'}
    bg={'black'}>
          <FootLink pagelink="/certification" pagename="Instagram"  />
          <FootLink pagelink="/events" pagename="Facebook"  />
          <FootLink pagelink="/resources" pagename="Linkedin"  />
          <FootLink pagelink="/mission" pagename="Github"  />
          <FootLink pagelink="/mission" pagename="Twitter"  />
    </Flex>
  );
};

export default Footer;
