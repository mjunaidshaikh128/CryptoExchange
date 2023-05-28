import React, { useState } from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({isLoggedIn, setIsLoggedIn, setForm}) => {

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
        setForm("login")
    };

    return (
        <Box bg="teal.500" px={4} py={3}>
            <Flex align="center">
                <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold" mr={4}>
                    Logo
                </Link>
                <Spacer />
                {isLoggedIn ? (
                    <Link as={RouterLink} to="/logout" color="white" onClick={handleLogout}>
                        Logout
                    </Link>
                ) : (
                    <>
                        <Link as={RouterLink} to="/" color="white" mr={2} onClick={() => { setForm("login") }}>
                            Login
                        </Link>
                        <Link as={RouterLink} to="/" color="white" onClick={() => { setForm("signup") }}>
                            Signup
                        </Link>
                    </>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;
