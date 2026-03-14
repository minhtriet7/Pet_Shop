const jwt = require('jsonwebtoken');

// Hàm tạo Access Token (hạn dùng 2 ngày)
const generateAccessToken = (uid, role) => {
    return jwt.sign(
        { _id: uid, role }, // Dữ liệu nhét vào thẻ (ID người dùng và quyền)
        process.env.JWT_SECRET, // Chìa khóa ký tên lấy từ .env
        { expiresIn: '2d' } // Hạn sử dụng 2 ngày
    );
};

module.exports = {
    generateAccessToken
};