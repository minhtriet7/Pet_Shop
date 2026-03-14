const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Cấu hình tài khoản Cloudinary bằng các biến môi trường bạn vừa lưu
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Cấu hình kho lưu trữ (Folder trên Cloudinary)
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'jpeg', 'png'], // Chỉ cho phép up ảnh
  params: {
    folder: 'Shop_ThuCung' // Tên thư mục nó sẽ tự tạo trên mây để chứa ảnh của bạn
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;