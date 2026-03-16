import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Dữ liệu giả lập: Trong giỏ hàng đang có sẵn 2 món
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Thức ăn hạt Royal Canin cho chó Poodle trưởng thành",
      price: 350000,
      quantity: 2,
      image: "https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1"
    },
    {
      id: 2,
      title: "Sữa tắm SOS chuyên dụng cho chó mèo",
      price: 150000,
      quantity: 1,
      image: "https://down-vn.img.susercontent.com/file/260efb7941784dd57be66ebefc5d18d4"
    }
  ]);

  // Tính tổng tiền
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Hàm tăng giảm số lượng (Tạm thời xử lý trên UI)
  const updateQuantity = (id, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        let newQuantity = type === 'plus' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
      }
      return item;
    }));
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="w-full flex justify-center items-start py-10 bg-[#f5f5f5] min-h-[600px]">
      <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row gap-6">
        
        {/* === CỘT TRÁI: DANH SÁCH SẢN PHẨM === */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Giỏ hàng của bạn</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">Giỏ hàng của bạn đang trống.</p>
              <Link to="/" className="bg-orange-500 text-white px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition">
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                  {/* Ảnh và Tên */}
                  <div className="flex items-center gap-4 w-1/2">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover border rounded-md p-1" />
                    <Link to="#" className="font-medium text-gray-700 hover:text-orange-500 line-clamp-2">
                      {item.title}
                    </Link>
                  </div>

                  {/* Giá tiền */}
                  <div className="font-bold text-orange-500 w-1/6 text-center">
                    {item.price.toLocaleString()}đ
                  </div>

                  {/* Cụm Số lượng */}
                  <div className="flex items-center border border-gray-300 rounded-md w-1/6 justify-center h-9">
                    <button onClick={() => updateQuantity(item.id, 'minus')} className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                    <input type="text" value={item.quantity} readOnly className="w-10 h-full text-center border-x border-gray-300 outline-none text-sm font-medium" />
                    <button onClick={() => updateQuantity(item.id, 'plus')} className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                  </div>

                  {/* Nút Xóa */}
                  <div className="w-1/12 text-right">
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium transition">
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* === CỘT PHẢI: TÓM TẮT ĐƠN HÀNG === */}
        {cartItems.length > 0 && (
          <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-sm h-fit">
            <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-4">Tóm tắt đơn hàng</h2>
            
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Tạm tính:</span>
              <span className="font-bold">{totalAmount.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between mb-6 text-gray-600 border-b pb-4">
              <span>Phí vận chuyển:</span>
              <span>Chưa tính</span>
            </div>
            
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
              <span className="text-2xl font-extrabold text-orange-500">{totalAmount.toLocaleString()}đ</span>
            </div>

            {/* Đổi từ button thành Link */}
<Link to="/checkout" className="w-full block text-center bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition uppercase shadow-sm">
  Tiến hành thanh toán
</Link>

            <Link to="/" className="block text-center mt-4 text-orange-500 hover:underline font-medium text-sm">
              ← Tiếp tục mua sắm
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;