import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import NavLink from "./nav-link";
import Btn from "./button";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex>

      <Box paddingTop="10">
        <Center>
          <Link as={NextLink} href="/">
            <Image
              boxSize="50px"
              src="https://avatars.githubusercontent.com/u/99120681?s=280&v=4"
              alt="Panaverse Logo"
            />
          </Link>
          <NavLink pagelink="/certification" pagename="Certification" />
          <NavLink pagelink="/events" pagename="Events" />
          <NavLink pagelink="/resources" pagename="Resources" />
          <NavLink pagelink="/mission" pagename="Mission" />
        </Center>
      </Box>

      <Spacer />

      <Box paddingTop="10">
        <Center>
          <Btn pagelink="/join" pagename="Join Panaverse" />
        </Center>
      </Box>
    </Flex>
  );
};

export default Navbar;
