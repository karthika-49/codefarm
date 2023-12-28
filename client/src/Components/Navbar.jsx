import React, { useState, useEffect } from "react";
import {
  Flex,
  Link,
  Image,
  Button,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import logo from "../assets/logo_no_bg.png";
import { backendUrl } from "../constants";

const Navbar = ({ loggedIn, onLogout }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      fetchUser();
    }
  }, [loggedIn]);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${backendUrl}/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });

      if (!response.data) {
        // Handle error, e.g., redirect to login
        navigate("/login");
        return;
      }
      console.log(response.data);
      setUser(response.data.user);
      console.log(user.email, user.id)
    } catch (error) {
      console.error("Error fetching user:", error);
      // Handle error, e.g., redirect to login
      navigate("/login");
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
    onLogout();
    navigate("/");
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100vw"
      p={4}
      bg="teal.500"
      color="white"
      fontSize="lg"
      fontFamily="sans-serif"
    >
      <Link
        as={RouterLink}
        to="/"
        _hover={{ textDecoration: "none", color: "black" }}
      >
        <Flex>
          <Image src={logo} height="25px" px="5px"></Image>
          Code Farm
        </Flex>
      </Link>
      <Flex justifyContent="space-around" alignItems="center" width="50vw">
        <Link
          as={RouterLink}
          to="/problemset/all"
          mx={4}
          _hover={{ textDecoration: "none", color: "black" }}
        >
          Problems
        </Link>
        {!loggedIn ? (
          <>
            <Link
              as={RouterLink}
              to="/signup"
              mx={4}
              _hover={{ textDecoration: "none", color: "black" }}
            >
              Signup
            </Link>
            <Link
              as={RouterLink}
              to="/login"
              mx={4}
              _hover={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Menu
            color="black"
            >
              <MenuButton>
                <Avatar size="sm" name={user.email} />
              </MenuButton>
              <MenuList>
  <MenuItem style={{ color: "black" ,fontSize:"15px"}}>Email : {user.email}</MenuItem>
  <MenuItem style={{ color: "black",fontSize:"15px" }}>User Id : {user.userId}</MenuItem>
</MenuList>

            </Menu>
            <Button onClick={handleLogout} colorScheme="red">
              Logout
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
