import React from 'react';
import ProgrammingFacts from './ProgrammingFacts';
import ProgrammingAnimation from './PrgrammingAnimation';
import { Flex, Text } from '@chakra-ui/react';

const HomePage = () => {
  const programmingFacts = [
    "The first computer programmer was Ada Lovelace, who wrote the first algorithm intended for implementation on Charles Babbage's Analytical Engine.",
    "JavaScript was created by Brendan Eich in 10 days in 1995.",
    "The world's first computer virus was created in 1983 and was called the Elk Cloner.",
    "The QWERTY keyboard layout was designed to prevent jamming on mechanical typewriters by slowing down typing.",
    "Python's name is derived from the British comedy group Monty Python, not the snake.",
    "The C programming language was created by Dennis Ritchie at Bell Labs in 1972.",
    "HTML stands for HyperText Markup Language.",
    "The first video game ever created was 'Tennis for Two' in 1958.",
    "The 'Hello World' program is a traditional way to introduce a new programming language to beginners.",
    "Alan Turing is considered the father of theoretical computer science and artificial intelligence.",
    "The average salary of a programmer in the United States is significantly higher than the national average.",
    "PHP originally stood for 'Personal Home Page' but now stands for 'Hypertext Preprocessor'.",
    "The first computer bug was a real insect – a moth caught between relay contacts in the Harvard Mark II computer in 1947.",
    "The most popular programming language for web development is JavaScript.",
    "A byte is composed of 8 bits and can represent 256 different values.",
    "The 'printf' function in C stands for 'print formatted' and is used for printing output.",
    "The programming language 'Java' was named after the island of Java, Indonesia, not the coffee.",
    "In 1978, the first spam email was sent over ARPANET, the precursor to the modern internet.",
    "The first programming language was Fortran, created in the 1950s.",
    "GitHub, one of the largest code repositories, was created using Ruby on Rails.",
    "The term 'bug' in programming originated when a moth got trapped in a computer and disrupted its functionality.",
    "Bill Gates' house was designed using a Macintosh computer.",
    "In binary code, 1 kilobyte is equal to 1024 bytes, not 1000 bytes.",
    "The first computer mouse was made of wood and had only one button.",
    "The Apollo 11 guidance computer that landed humans on the moon in 1969 had less processing power than a modern smartphone.",
    "A 'race condition' in programming occurs when the behavior of a program depends on the relative timing of events.",
    "JavaScript was created in 1995 by Brendan Eich in just 10 days.",
    "Linux Torvalds, the creator of Linux, first used the name 'Freax' (a combination of 'free,' 'freak,' and 'Unix') before settling on Linux.",
    "The world's first computer programmer was Ada Lovelace, who wrote the first algorithm for Charles Babbage's Analytical Engine in the 1840s.",
    "Larry Page and Sergey Brin initially named their search engine 'Backrub' before settling on 'Google'.",
    "The first computer virus was created in 1983 and was called the Elk Cloner.",
    "The original name for Java was 'Oak'.",
    "The world's first computer programmer was a woman named Ada Lovelace.",
    "The first computer game, 'Spacewar!', was developed in 1962.",
    "The first computer mouse was invented by Douglas Engelbart in 1964 and was made of wood.",
    "The concept of 'pair programming' involves two programmers working together at one computer.",
    "A SQL injection attack occurs when an attacker inserts malicious code into a SQL query.",
    "The first computer, the ENIAC, weighed over 27 tons and occupied 1,800 square feet of floor space.",
    "The longest domain name ever registered was 63 characters long.",
    "In 2016, a programmer deleted his entire company with a single line of code.",
    "The world's first computer programmer was Ada Lovelace, who wrote the first algorithm intended for implementation on Charles Babbage's Analytical Engine.",
    "The first computer virus was created in 1983 and was called the Elk Cloner.",
    "JavaScript was created by Brendan Eich in 10 days in 1995.",
    "The QWERTY keyboard layout was designed to prevent jamming on mechanical typewriters by slowing down typing.",
    "Python's name is derived from the British comedy group Monty Python, not the snake.",
    "The C programming language was created by Dennis Ritchie at Bell Labs in 1972.",
    "HTML stands for HyperText Markup Language.",
    "The first video game ever created was 'Tennis for Two' in 1958.",
    "The 'Hello World' program is a traditional way to introduce a new programming language to beginners.",
    "Alan Turing is considered the father of theoretical computer science and artificial intelligence.",
    "The average salary of a programmer in the United States is significantly higher than the national average.",
    "PHP originally stood for 'Personal Home Page' but now stands for 'Hypertext Preprocessor'.",
    "The first computer bug was a real insect – a moth caught between relay contacts in the Harvard Mark II computer in 1947.",
    "The most popular programming language for web development is JavaScript.",
    "A byte is composed of 8 bits and can represent 256 different values.",
    "The 'printf' function in C stands for 'print formatted' and is used for printing output.",
    "The programming language 'Java' was named after the island of Java, Indonesia, not the coffee.",
    "In 1978, the first spam email was sent over ARPANET, the precursor to the modern internet."]
  return (
    <Flex flexDirection={"column"}    >
    <Flex style={{ position: 'relative', overflow: 'hidden' }}>
    <ProgrammingFacts facts={programmingFacts} />
    <ProgrammingAnimation />
  </Flex>
  <Text style={{ marginTop: '10px', fontSize: '12px', color: '#888', alignSelf: 'center' }}>
        &copy; 2024 Karthika Bingi. All rights reserved.
      </Text>
    </Flex>
  );
};

export default HomePage;
