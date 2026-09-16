import React  from 'react';
import axios from 'axios';

export default function LoginForm() {
    const [username , setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe , setRememberMe] = React.useState(false);
    const [replyMessage , setReplyMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password,
                rememberMe
            });
            setReplyMessage(response.data.message);
        } catch (error) {
            setReplyMessage('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                </label>
                <button type="submit">Login</button>
            </form>
            {replyMessage && <p>{replyMessage}</p>}
        </div>
    )
}
