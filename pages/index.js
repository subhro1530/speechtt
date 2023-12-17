// pages/index.js
import { ChakraProvider, extendTheme, Flex, VStack } from "@chakra-ui/react";
import HeaderComponent from "../components/HeaderComponent";
import SpeechRecognitionComponent from "../components/SpeechRecognitionComponent";
import ImageGalleryComponent from "../components/ImageGalleryComponent";
import DarkModeToggleComponent from "../components/DarkModeToggleComponent";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        p={8}
      >
        <VStack spacing={8} textAlign="center" width="100%">
          <HeaderComponent />

          {/* <SpeechRecognitionComponent /> */}

          <ImageGalleryComponent />

          <DarkModeToggleComponent />
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
