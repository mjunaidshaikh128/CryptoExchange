import './App.css';
import users from './users'
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Loginui from './Loginui';
import Signupui from './Signupui';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  const [form, setForm] = useState("signup")
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial login status


  return (
    <ChakraProvider>
      {/* <div className="App">
      <Signup users={users} />
      <Login users={users} />
    </div> */}
      <BrowserRouter>
        <Navbar setForm={setForm} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {
          form === "login" ? <Loginui users={users} setForm={setForm} setIsLoggedIn={setIsLoggedIn} /> : form === "signup" && <Signupui users={users} setForm={setForm} />

        }

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
