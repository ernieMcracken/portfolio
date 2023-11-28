import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack backgroundColor="#eee" color="#000" borderRadius={10}>
      <Image src={imageSrc} borderRadius={10} />
      <VStack p={4} align="start" justify="start" flexGrow={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm" color="#666">
          {description}
        </Text>
        <a style={{ marginTop: "auto" }} href="#">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
