const mongoose = require('mongoose'); // Erase if already required

var orderSchema = new mongoose.Schema({
    products: [{
        product: { type: mongoose.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        color: String
    }],
    status: {
        type: String,
        default: 'Processing',
        enum: ['Cancelled', 'Processing', 'Delivering', 'Succeed'] 
        // Các trạng thái: Đã hủy, Đang xử lý, Đang giao, Thành công
    },
    paymentMethod: { 
        type: String, 
        default: 'COD' // Mặc định là thanh toán khi nhận hàng
    },
    paymentIntent: { 
        type: Object // Nơi lưu cục data mà PayPal trả về (Mã giao dịch, email người trả...)
    },
    isPaid: { 
        type: Boolean, 
        default: false // Đã thanh toán hay chưa?
    },
    paidAt: { 
        type: Date // Thời gian thanh toán
    },
    total: {
        type: Number
    },
    coupon: {
        type: mongoose.Types.ObjectId,
        ref: 'Coupon'
    },
    orderBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);