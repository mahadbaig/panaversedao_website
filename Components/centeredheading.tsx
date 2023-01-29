import { Box, Center } from "@chakra-ui/react";

const CenteredHeading = (props: any) => {
  const tagline = props.tagline;
  const heading = props.heading;

  return (
    <Box textAlign={'center'}
    marginBottom='50px'>
      <h4>{tagline}</h4>
      <h1>{heading}</h1>
    </Box>
  );
};

export default CenteredHeading;
