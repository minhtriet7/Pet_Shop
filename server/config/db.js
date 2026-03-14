const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB đã kết nối thành công: ${conn.connection.host}`);
    } catch (error) {
        console.log('Lỗi kết nối database!');
        console.error(error);
        process.exit(1);
    }
};

module.exports = dbConnect;