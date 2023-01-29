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
          <FootLink pagelink="https://www.instagram.com/piaicofficial/" pagename="Instagram"  />
          <FootLink pagelink="https://www.facebook.com/panaverse.dao" pagename="Facebook"  />
          <FootLink pagelink="https://www.linkedin.com/company/panaverse-kolachi/" pagename="Linkedin"  />
          <FootLink pagelink="https://github.com/panaverse" pagename="Github"  />
          <FootLink pagelink="https://twitter.com/Panaverse_edu" pagename="Twitter"  />
    </Flex>
  );
};

export default Footer;
