// components/NavbarComponent.js
import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavbarComponent = () => {
  return (
    <HStack spacing={4}>
      <NextLink href="/about" passHref>
        <Link fontSize="xl">About</Link>
      </NextLink>
      <NextLink href="/faqs" passHref>
        <Link fontSize="xl">FAQs</Link>
      </NextLink>
    </HStack>
  );
};

export default NavbarComponent;
