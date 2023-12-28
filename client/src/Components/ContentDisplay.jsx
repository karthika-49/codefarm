import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

const ContentDisplay = ({ content, problem, dummySubmissions }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "AC":
        return "green";
      case "WA":
        return "red";
      default:
        return "black"; // Default color
    }
  };

  if (content === "description" && problem) {
    return (
      <Box>
        <Box mb="4">
          <Text fontWeight="bold">{problem.title}</Text>
          <Text>{problem.description}</Text>
          <code>Input : {problem.exampleIn}</code>
          <br />
          <code>Output : {problem.exampleOut}</code>
        </Box>
      </Box>
    );
  } else if (content === "submissions") {
    // Reverse the array to get the latest submissions first
    const reversedSubmissions = dummySubmissions.slice().reverse();
    // Take the first 10 elements (latest submissions) and reverse the id
    const latestTenSubmissions = reversedSubmissions
      .slice(0, 10)
      .map((submission, idx) => ({
        ...submission,
        id: reversedSubmissions.length - idx,
      }));

    return (
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {latestTenSubmissions.map((submission) => (
            <Tr key={submission.id}>
              <Td>{submission.id}</Td>
              <Td style={{ color: getStatusColor(submission.status) }}>
                {submission.status}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  } else {
    return null;
  }
};

export default ContentDisplay;
