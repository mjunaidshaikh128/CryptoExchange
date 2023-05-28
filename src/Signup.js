import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({ users }) => {
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
                cnicDocument: cnicDocument

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
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <br />
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <br />
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br />
                    <label htmlFor='address'>Address: </label>
                    <input type='text' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <br />
                    <label htmlFor='cnicDocument'>CnicDocument: </label>
                    <input type='text' id='cnicDocument' value={cnicDocument} onChange={(e) => setCnicDocument(e.target.value)} />
                    <br />
                    <button type='submit'>Signup</button>
                </div>
            </form>
            
        </main>
    )
}

export default Signup