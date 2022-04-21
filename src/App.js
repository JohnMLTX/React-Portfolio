import React from "react";

import Contact from "./components/Contact";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import ContactForm from "./components/Contact";

//TODO: Get App to read imported ContactMe component and return it.

//import reactDom from "react-dom";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <VStack>
        <Flex w="100%">
          <Heading ml="2" size="md" fontWeight="extrabold" color="blue.500">
            Portfolio
          </Heading>

          <Spacer></Spacer>

          <IconButton
            ml={9}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </VStack>
      <ContactForm />
    </div>
  );
}

export default App;
