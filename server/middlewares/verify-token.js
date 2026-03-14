const jwt = require('jsonwebtoken');

// 1. Gã bảo vệ kiểm tra xem người dùng đã đăng nhập chưa
const verifyAccessToken = (req, res, next) => {
    // Token chuẩn sẽ được gửi kèm trong Header với chữ "Bearer " đứng trước
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]; // Tách lấy phần mã token
        
        // Dịch ngược token xem có đúng là do server mình cấp không
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).json({ success: false, mes: 'Token không hợp lệ hoặc đã hết hạn' });
            }
            // Nếu hợp lệ, nhét thông tin (ID, role) vào req.user để các hàm sau xài
            req.user = decode;
            next(); // Cho phép đi tiếp vào Controller
        });
    } else {
        return res.status(401).json({ success: false, mes: 'Yêu cầu đăng nhập (Chưa có token)' });
    }
};

// 2. Gã bảo vệ cấp cao (Chỉ cho Admin đi qua, dùng để thêm/sửa/xóa sản phẩm)
const isAdmin = (req, res, next) => {
    const { role } = req.user; // Lấy role từ gã bảo vệ số 1 truyền qua
    if (role !== 'admin') {
        return res.status(401).json({ success: false, mes: 'Yêu cầu quyền Admin!' });
    }
    next(); // Là Admin thì cho đi tiếp
};

module.exports = {
    verifyAccessToken,
    isAdmin
};