const { GoogleGenerativeAI } = require("@google/generative-ai");
const Product = require('../models/product'); // Kéo database sản phẩm vào đây

const chatWithBot = async (req, res) => {
    // Frontend sẽ gửi lên câu hỏi (message) và lịch sử chat cũ (history)
    const { message, history } = req.body; 

    if (!message) {
        return res.status(400).json({ success: false, mes: 'Vui lòng nhập tin nhắn' });
    }

    try {
        // 1. LẤY DATA THẬT: Quét toàn bộ sản phẩm trong shop (Chỉ lấy Tên và Giá)
        const products = await Product.find().select('title price');
        // Tạo thành một danh sách văn bản để AI đọc hiểu
        const productListString = products.map(p => `- ${p.title}: ${p.price} VNĐ`).join('\n');

        // 2. CÀI ĐẶT NÃO BỘ AI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            // Chỉ thị tối cao: Ép nó chỉ được bán hàng trong danh sách
            systemInstruction: `Bạn là nhân viên tư vấn dễ thương của Pet Shop. Xưng 'em', gọi khách là 'dạ anh/chị'. 
            Dưới đây là danh sách sản phẩm shop ĐANG BÁN:
            ${productListString}
            Nhiệm vụ: Chỉ tư vấn dựa trên danh sách này. Nếu khách hỏi sản phẩm không có trong danh sách, hãy xin lỗi khéo léo và hướng khách sang sản phẩm khác mà shop đang có. KHÔNG bịa ra giá tiền.`
        });

        // 3. TẠO CUỘC HỘI THOẠI CÓ TRÍ NHỚ (Chat Session)
        const chat = model.startChat({
            // Nếu khách có lịch sử chat cũ thì truyền vào, không thì tạo mảng rỗng
            history: history || [], 
        });

        // Gửi câu hỏi mới và chờ AI trả lời
        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        return res.status(200).json({
            success: true,
            reply: responseText
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi AI: ' + error.message });
    }
}

module.exports = {
    chatWithBot
};