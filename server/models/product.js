    const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true }, // Tên sản phẩm
    slug: { type: String, required: true, unique: true, lowercase: true }, // Đường dẫn SEO
    description: { type: String, required: true }, // Mô tả
    brand: { type: String, required: true }, // Thương hiệu (Royal Canin, Whiskas...)
    price: { type: Number, required: true }, // Giá
    category: { type: String, required: true }, // Danh mục (Chó, Mèo, Phụ kiện...)
    quantity: { type: Number, default: 0 }, // Số lượng kho
    sold: { type: Number, default: 0 }, // Đã bán
    images: { type: Array, default: [] }, // Danh sách link ảnh
    // ... các trường khác (title, price, images...)
    ratings: [
        {
            star: { type: Number },
            postedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
            comment: { type: String }
        }
    ],
    totalRatings: {
        type: Number,
        default: 0
    },
    // ...
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);