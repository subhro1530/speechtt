// components/ImageGalleryComponent.js
import { VStack, Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ImageGalleryComponent = () => {
  return (
    <VStack spacing={4} alignItems="stretch">
      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Image
          src="/image1.jpg"
          alt="Image 1"
          borderRadius="md"
          boxShadow="md"
        />
        <Text fontSize="xl">Description for Image 1</Text>
      </MotionBox>

      <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Image
          src="/image2.jpg"
          alt="Image 2"
          borderRadius="md"
          boxShadow="md"
        />
        <Text fontSize="xl">Description for Image 2</Text>
      </MotionBox>
    </VStack>
  );
};

export default ImageGalleryComponent;
