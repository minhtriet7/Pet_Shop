const mongoose = require('mongoose');

var productCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true, // Tên danh mục không được trùng nhau
        index: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);