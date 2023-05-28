import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ users }) => {
    const [loginCount, setLoginCount] = useState(3)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
            users.map((user) => {
                if (user.email === email && user.password !== password) {
                    loginCount > 0 && setLoginCount(loginCount - 1);
                    if (loginCount <= 0) {
                        if(user.isBlocked === false) {user.isBlocked = true;} 
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
                }

                if (user.email === email && user.password === password && user.isBlocked === true) {
                    toast.error(`${user.name} is blocked!`)

                }
            })

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
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type='submit'>Login</button>

            </form>
        </main>
    )
}

export default Login