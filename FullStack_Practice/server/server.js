const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

const JWT_SECRET = 'bi_mat_khong_the_tiet_lo_123';

// Route đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password, rememberMe } = req.body;

  if (username !== 'admin' || password !== '123456') {
    return res.status(400).json({
      success: false,
      message: 'Tài khoản hoặc mật khẩu không đúng!'
    });
  }

  if (rememberMe) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('refreshToken', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
  }

  return res.json({
    success: true,
    message: 'Đăng nhập thành công!',
    user: { username: 'admin' }
  });
});

// 🔴 BẮT BUỘC PHẢI CÓ: Lệnh giữ Server luôn hoạt động
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server đang chạy tại: http://localhost:${PORT}`);
});