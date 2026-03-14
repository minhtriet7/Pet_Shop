const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/db');
const initRoutes = require('./routes'); // Tự động trỏ vào file index.js trong thư mục routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Đọc data JSON
app.use(express.urlencoded({ extended: true })); // Đọc data từ form

// Kết nối Database
dbConnect();

// Khởi tạo các Routes
initRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy ở cổng ${PORT}`);
});
