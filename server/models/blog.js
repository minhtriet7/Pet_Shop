const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    numberViews: {
        type: Number,
        default: 0
    },
    likes: [
        { type: mongoose.Types.ObjectId, ref: 'User' }
    ],
    dislikes: [
        { type: mongoose.Types.ObjectId, ref: 'User' }
    ],
    image: {
        type: String,
        default: 'https://www.shutterstock.com/image-vector/blog-icon-260nw-419131606.jpg' // Ảnh mặc định nếu không up
    },
    author: {
        type: String,
        default: 'Admin'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }, // Hai dòng này hỗ trợ lấy data mượt hơn sau này
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Blog', blogSchema);