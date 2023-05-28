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

const Signupui = ({ users, setForm }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [cnicDocument, setCnicDocument] = useState(null);

    const handleSignup = (e) => {
        e.preventDefault();
        console.log({ name, email, password });
        if (name && email && password && address && cnicDocument) {
            toast.success('Signup Successful!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            users.push({
                name: name,
                email: email,
                password: password,
                address: address,
                cnicDocument: cnicDocument,
                isBlocked: false

            })
            console.log(users);

        } else {
            toast.error('Please fill in all the required fields')
        }
    }

    return (
        <main>
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
                mt={20} // Adjust the top margin for vertical positioning
            >
                <form onSubmit={handleSignup}>
                    <Stack spacing={3}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder="Enter your name" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="Enter your email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Enter your password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" placeholder="Enter your address" id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>CNIC</FormLabel>
                            <Input type="text" placeholder="Enter your CNIC" id='cnicDocument' value={cnicDocument} onChange={(e) => setCnicDocument(e.target.value)} />
                        </FormControl>
                        <Button colorScheme="teal" type="submit" width="full">
                            Sign up
                        </Button>
                        <Text fontSize="sm" textAlign="center">
                            Already have an account?{' '}
                            <RouterLink to="/" onClick={() => {setForm("login")}}>
                                Login here
                            </RouterLink>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </main>
    );
};

export default Signupui;
