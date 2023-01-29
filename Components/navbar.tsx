// import { Image } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import { Flex, Spacer } from "@chakra-ui/react";
// import { Center, Square, Circle } from "@chakra-ui/react";
// import NavLink from "./nav-link";
// import Btn from "./button";
// import NextLink from "next/link";
// import { Link } from "@chakra-ui/react";

// const Navbar = () => {
//   return (
//     <Flex padding={'0 25px'}
//     marginBottom='50px'>

//       <Box paddingTop="10"
//       >
//         <Center>
//           <Link as={NextLink} href="/">
//             <Image
//               boxSize="50px"
//               src="https://pbs.twimg.com/profile_images/1573936081082482688/5xc_Zr67_400x400.jpg"
//               alt="Panaverse Logo"
//             />
//           </Link>
//           <NavLink pagelink="/certification" pagename="Certification" />
//           <NavLink pagelink="/resources" pagename="Resources" />
//           <NavLink pagelink="/blog" pagename="Blog" />
//         </Center>
//       </Box>

//       <Spacer />

//       <Box paddingTop="10">
//         <Center>
//           <Btn pagelink="/join" pagename="Join Panaverse" />
//         </Center>
//       </Box>
//     </Flex>

//   );
// };

// export default Navbar;

import { Box, Flex, IconButton, Link, useColorMode, Image } from "@chakra-ui/react";
import NavLink from "./nav-link";
import NextLink from "next/link";
import Btn from "./button";


function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.800", dark: "white" };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      boxShadow="sm"
      height="6rem"
    >
      <Flex align="center" mr={5}>
      <Link as={NextLink} href="/">
<Image
              boxSize="50px"
              src="https://pbs.twimg.com/profile_images/1573936081082482688/5xc_Zr67_400x400.jpg"
              alt="Panaverse Logo"
            />
          </Link>
      </Flex>

      <Box
        display={{ sm: "none", md: "block" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        justifyContent="center"
        mt={{ base: 4, md: 0 }}
      >
        <NavLink pagelink="/certification" pagename="Certification" />
        <NavLink pagelink="/blog" pagename="Blog" />
        <NavLink pagelink="/resources" pagename="Resources" />
        <Btn pagelink = '/join' pagename = "Join Panaverse"/>
      </Box>
    </Flex>
  );
}

export default Navbar;
