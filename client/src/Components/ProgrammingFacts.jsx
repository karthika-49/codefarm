import React, { useState, useEffect } from "react";
import { VStack, Text, Container, Divider } from "@chakra-ui/react";

const ProgrammingFacts = ({ facts }) => {
  const [displayedFacts, setDisplayedFacts] = useState([]);
  const [hoveredFactIndex, setHoveredFactIndex] = useState(null);

  useEffect(() => {
    // Shuffle the array to display random facts
    const shuffledFacts = facts.sort(() => 0.5 - Math.random());
    // Take the first 10 facts
    const selectedFacts = shuffledFacts.slice(0, 10);
    setDisplayedFacts(selectedFacts);
  }, [facts]);

  const handleFactHover = (index) => {
    setHoveredFactIndex(index);
  };

  const handleFactLeave = () => {
    setHoveredFactIndex(null);
  };

  return (
    <Container maxW="full" p={5}>
      <VStack
        align="start"
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Programming Facts
        </Text>
        {displayedFacts.map((fact, index) => (
          <React.Fragment key={index}>
            <Text
              onMouseEnter={() => handleFactHover(index)}
              onMouseLeave={handleFactLeave}
              _hover={{
                backgroundColor:
                  hoveredFactIndex === index ? "gray.200" : "inherit",
              }}
            >
              {fact}
            </Text>
            {index < displayedFacts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </VStack>
    </Container>
  );
};

export default ProgrammingFacts;
