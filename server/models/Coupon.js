const mongoose = require('mongoose');

var couponSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true, 
        uppercase: true // Tự động viết hoa (VD: pet10 -> PET10)
    },
    discount: { 
        type: Number, 
        required: true 
    },
    expiry: { 
        type: Date, 
        required: true 
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Coupon', couponSchema);