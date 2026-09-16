import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [replyMessage, setReplyMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/api/login',
                { username, password, rememberMe },
                { withCredentials: true } // 👈 BẮT BUỘC: Cho phép nhận và lưu Cookie httpOnly
            );
            setReplyMessage(response.data.message);
        } catch (error) {
            // Lấy thông báo lỗi chi tiết từ Backend trả về
            const errorMsg = error.response?.data?.message || 'Login failed. Please try again.';
            setReplyMessage(errorMsg);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
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
    );
}