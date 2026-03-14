const Order = require('../models/Order'); // Nhớ viết hoa chữ O nhé
const User = require('../models/user');
const Coupon = require('../models/Coupon');

// 1. Tạo đơn hàng (User)
const createOrder = async (req, res) => {
    const { _id } = req.user;
    const { coupon } = req.body;
    try {
        const userCart = await User.findById(_id).select('cart').populate('cart.product', 'title price');
        if (!userCart?.cart || userCart.cart.length === 0) {
            return res.status(400).json({ success: false, mes: 'Giỏ hàng đang trống' });
        }

        let total = 0;
        const orderProducts = userCart.cart.map(el => {
            total += el.product.price * el.quantity;
            return {
                product: el.product._id,
                quantity: el.quantity,
                color: el.color
            };
        });

        if (coupon) {
            const selectedCoupon = await Coupon.findById(coupon);
            if (selectedCoupon) {
                total = Math.round(total * (1 - selectedCoupon.discount / 100));
            }
        }

        const response = await Order.create({
            products: orderProducts,
            total,
            coupon,
            orderBy: _id
        });

        if (response) {
            await User.findByIdAndUpdate(_id, { cart: [] });
        }

        return res.status(200).json({ success: true, mes: 'Tạo đơn hàng thành công', order: response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 2. Cập nhật trạng thái đơn hàng (Admin)
const updateStatus = async (req, res) => {
    const { oid } = req.params;
    const { status } = req.body;
    if (!status) return res.status(400).json({ success: false, mes: 'Yêu cầu cung cấp trạng thái' });
    try {
        const response = await Order.findByIdAndUpdate(oid, { status }, { new: true });
        return res.status(200).json({ success: response ? true : false, response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 3. Lấy danh sách đơn hàng của riêng user đang đăng nhập (User)
const getUserOrder = async (req, res) => {
    const { _id } = req.user;
    try {
        const response = await Order.find({ orderBy: _id });
        return res.status(200).json({ success: response ? true : false, response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 4. Lấy tất cả đơn hàng trong hệ thống (Admin)
const getOrders = async (req, res) => {
    try {
        const response = await Order.find();
        return res.status(200).json({ success: response ? true : false, response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 5. Cập nhật đơn hàng thành Đã Thanh Toán (Dành cho PayPal)
const updateOrderToPaid = async (req, res) => {
    const { oid } = req.params; 
    const paymentIntent = req.body; 

    try {
        const order = await Order.findById(oid);

        if (!order) {
            return res.status(404).json({ success: false, mes: 'Không tìm thấy đơn hàng' });
        }

        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentMethod = 'Paypal';
        order.paymentIntent = paymentIntent; 
        order.status = 'Succeed'; 

        const updatedOrder = await order.save();

        return res.status(200).json({ 
            success: true, 
            mes: 'Thanh toán PayPal thành công', 
            updatedOrder 
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

module.exports = {
    createOrder,
    updateStatus,
    getUserOrder,
    getOrders,
    updateOrderToPaid
};