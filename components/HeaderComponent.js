// components/HeaderComponent.js
import {
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavbarComponent from "./NavbarComponent";

const HeaderComponent = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      width="100%"
    >
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold" mr={4}>
          Speech Recognition App
        </Text>
        <Text fontSize="md" color="gray.500">
          Bringing AI to Your Voice
        </Text>
      </Flex>

      <Flex align="center">
        <NavbarComponent />

        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorModeIcon}
          onClick={toggleColorMode}
          size="lg"
        />
      </Flex>
    </Flex>
  );
};

export default HeaderComponent;
