import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

const Loginui = ({ users, setForm, setIsLoggedIn }) => {
    const [loginCount, setLoginCount] = useState(3)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        users.map((user) => {
            if (user.email === email && user.password !== password) {
                loginCount > 0 && setLoginCount(loginCount - 1);
                if (loginCount <= 0) {
                    if (user.isBlocked === false) { user.isBlocked = true; }
                    toast.error(`${user.name} is blocked!`)

                }
            }
            if (user.email === email && user.password === password && user.isBlocked === false) {
                toast.success('Login Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setIsLoggedIn(true);
            }

            if (user.email === email && user.password === password && user.isBlocked === true) {
                toast.error(`${user.name} is blocked!`)

            }
        })

    }

    return (
        <>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <Box
                p={4}
                maxW="sm"
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
                margin="auto"
                mt={20}  // Adjust the top margin for vertical positioning
            >
                <form onSubmit={handleLogin}>
                    <Stack spacing={3}>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="Enter your email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Enter your password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </FormControl>
                        <Button colorScheme="teal" type="submit" width="full">
                            Sign in
                        </Button>
                        <Text fontSize="sm" textAlign="center">
                            Don't have an account?{' '}
                            <RouterLink to="/" onClick={() => {setForm("signup")}}>
                                Sign up here
                            </RouterLink>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </>
    );
};

export default Loginui;
