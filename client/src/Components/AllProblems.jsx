import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Flex,
} from "@chakra-ui/react";
import Spinner from "./Spinner.jsx";
import { Link } from "react-router-dom";
import { backendUrl } from "../constants.js";

const AllProblems = () => {
  // Fake problems array
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const init = async () => {
    setIsLoading(true);
    const response = await fetch(`${backendUrl}/problems`, {
      method: "GET",
    });
    const json = await response.json();
    setProblems(json.problems);
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "green";
      case "Medium":
        return "goldenrod";
      case "Hard":
        return "red";
      default:
        return "black"; // Default color
    }
  };

  return (
    <Box p={4}>
    {isLoading ? (
      <Box height={"100vh"}>
      <Spinner msg={"Loading problems..."}/>
      </Box>
    ):
    (
      
      <Flex flexDirection={"column"}>
      <Table variant="striped" colorScheme="gray" >
        <Thead>
          <Tr>
            <Th style={{ fontSize: "15px" }}>Title</Th>
            <Th style={{ fontSize: "15px" }}>Difficulty</Th>
            <Th style={{ fontSize: "15px" }}>Acceptance</Th>
          </Tr>
        </Thead>
        <Tbody>
          {problems.map((problem, index) => (
            <Tr key={index}>
              <Td>
                <Link to={`/problems/:${problem.problemId}`}>
                  <td>{problem.title}</td>
                </Link>
              </Td>
              <Td style={{ color: getDifficultyColor(problem.difficulty) }}>
                {problem.difficulty}
              </Td>
              <Td>{problem.acceptance}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text style={{ marginTop: '10px', fontSize: '12px', color: '#888', alignSelf: 'center' }}>
      &copy; 2024 Karthika Bingi. All rights reserved.
    </Text>
    </Flex>
    )
  }
    </Box>
  );
};

export default AllProblems;
