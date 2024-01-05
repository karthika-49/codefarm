import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ContentDisplay from "./ContentDisplay";
import { backendUrl } from "../constants";

const ProblemsPage = () => {
  const [displayContent, setDisplayContent] = useState("description");
  const { pid } = useParams();
  const cleanId = pid.substring(1);
  const [problem, setProblem] = useState(null);
  const [submission, setSubmission] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [dummySubmissions, setDummySubmissions] = useState([]);

  const handleSubmit = async () => {
    let json;
    if (!localStorage.getItem("token")) {
      setAlert({ type: "error", message: "Login to submit" });
    } else {
      if (submission.trim() === "") {
        setAlert({ type: "error", message: "Submission is empty" });
        return;
      }

      const response = await fetch(`${backendUrl}/submission`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemId: cleanId,
          submission: submission,
        }),
      });

       json = await response.json();
        // console.log(json);
      if (response.ok) {
        const color = json.status === "WA" ? "error" : "success";
        const verdict = json.status === "WA" ? "Wrong Answer" : "Accepted";
        setAlert({ type: color, message: verdict });
        setTimeout(() => {
          setAlert({ type: "", message: "" });
        }, 3000);
      } else {
        setAlert({ type: "error", message: "Failed to submit" });
        setTimeout(() => {
          setAlert({ type: "", message: "" });
        }, 3000);
      }
    }

    // Only add to dummySubmissions if submission is not empty
    if (submission.trim() !== "") {
      setDummySubmissions((prevSubmissions) => [
        ...prevSubmissions,
        { id: prevSubmissions.length + 1, status: json.status}, // Replace this with actual submission data
      ]);
    }
  };

  const init = async () => {
    try {
      const problemResponse = await fetch(
        `${backendUrl}/problem/${cleanId}`
      );
      const problemJson = await problemResponse.json();
      setProblem(problemJson.problem);

      const submissionsResponse = await fetch(
        `${backendUrl}/submissions/${cleanId}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!submissionsResponse.ok) {
        throw new Error("Failed to fetch submissions");
      }

      const submissionsJson = await submissionsResponse.json();
      setDummySubmissions(submissionsJson.submissions);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    init();
  }, [cleanId]);

  return (
    <Flex>
      <Flex flexDirection="column">
        <Flex
          p={4}
          alignItems="center"
          width="50vw"
          height="10vh"
          color="black"
          fontSize="lg"
          fontFamily="sans-serif"
        >
          <Text
            mx={8}
            cursor="pointer"
            onClick={() => setDisplayContent("description")}
            borderBottom={
              displayContent === "description"
                ? "4px solid teal"
                : "0px solid teal"
            }
            _hover={{ textDecoration: "none", color: "black" }}
          >
            Description
          </Text>
          <Text
            mx={8}
            cursor="pointer"
            onClick={() => setDisplayContent("submissions")}
            borderBottom={
              displayContent === "submissions"
                ? "4px solid teal"
                : "0px solid teal"
            }
            _hover={{ textDecoration: "none", color: "black" }}
          >
            Submissions
          </Text>
        </Flex>

        <Flex p="2vw" width="50vw">
          {displayContent === "description" && (
            <ContentDisplay content="description" problem={problem} />
          )}

          {displayContent === "submissions" && (
            <ContentDisplay
              content="submissions"
              problem={problem}
              dummySubmissions={dummySubmissions}
            />
          )}
        </Flex>
      </Flex>

      <Flex width="50vw" flexDirection="column" m="15px">
        <Text fontFamily="sans-serif" fontSize="30px">
          Code Here
        </Text>
        {alert.type && (
          <Alert
            mb="2"
            status={alert.type === "success" ? "success" : "error"}
            borderRadius="5px"
            padding="10px"
            color="black"
            backgroundColor={alert.type === "success" ? "#c6f6d5" : "#fed7d7"}
            marginTop="10px"
          >
            <AlertIcon />
            {alert.message}
          </Alert>
        )}

        <Textarea
          style={{
            fontFamily: "monospace",
            height: "60vh",
          }}
          placeholder="For now returning status as Accepted/Wrong Answer based on a random value generated by Math.random() function"
          _hover={{ textDecoration: "none" }}
          borderColor="black"
          borderWidth="2px"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
        ></Textarea>

        <Button
          mt="5px"
          colorScheme="whatsapp"
          size="md"
          width="120px"
          onClick={handleSubmit}
        >
          Submit Code
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProblemsPage;
