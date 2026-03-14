const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // unique: Không cho phép trùng email
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' }, // 'user' hoặc 'admin'
    isVerified: { type: Boolean, default: false }, // Đã xác minh qua email chưa?
    // ... các trường khác
    cart: [
        {
            product: { type: mongoose.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
            color: { type: String }
        }
    ],
    wishlist: [
        { type: mongoose.Types.ObjectId, ref: 'Product' }
    ],
    // ...
}, {
    timestamps: true // Tự động lưu ngày tạo và ngày cập nhật
});

// Hàm tự động mã hóa mật khẩu trước khi lưu vào Database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
// Thêm hàm kiểm tra mật khẩu
userSchema.methods.isCorrectPassword = async function (password) {
    // So sánh mật khẩu nhập vào với mật khẩu đã băm trong database
    return await bcrypt.compare(password, this.password);
};

// module.exports = mongoose.model('User', userSchema); // Dòng cũ của bạn ở đây
module.exports = mongoose.model('User', userSchema);