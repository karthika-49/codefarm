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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { backendUrl } from "../constants.js";

const AllProblems = () => {
  // Fake problems array
  const [problems, setProblems] = useState([]);
  const init = async () => {
    const response = await fetch(`${backendUrl}/problems`, {
      method: "GET",
    });
    const json = await response.json();
    setProblems(json.problems);
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
      <Table variant="striped" colorScheme="gray">
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
    </Box>
  );
};

export default AllProblems;
