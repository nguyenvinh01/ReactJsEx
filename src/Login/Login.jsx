import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '') {
            setErrorMessage('Please enter a username');
        } else if (password === '') {
            setErrorMessage('Please enter a password');
        } else if (username !== 'admin' || password !== 'password') {
            setErrorMessage('Invalid username or password');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
};

export default LoginForm;
