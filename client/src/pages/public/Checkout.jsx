import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  // Dữ liệu giả lập lấy từ Giỏ hàng sang
  const cartItems = [
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
  ];

  const subTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 30000; // Giả sử phí ship là 30k
  const total = subTotal + shippingFee;

  return (
    <div className="w-full flex justify-center items-start py-10 bg-[#f5f5f5] min-h-screen">
      <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row gap-8">
        
        {/* === CỘT TRÁI: THÔNG TIN GIAO HÀNG & THANH TOÁN === */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Khung 1: Thông tin nhận hàng */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase border-b-2 border-orange-500 pb-2 inline-block">
              Thông tin nhận hàng
            </h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Họ và Tên *</label>
                  <input type="text" placeholder="Nhập họ tên người nhận" className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Số điện thoại *</label>
                  <input type="text" placeholder="Nhập số điện thoại" className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Tỉnh / Thành phố *</label>
                  <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 cursor-pointer">
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    <option value="sg">Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                  </select>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Quận / Huyện *</label>
                  <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 cursor-pointer">
                    <option value="">Chọn Quận/Huyện</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Địa chỉ cụ thể (Số nhà, tên đường) *</label>
                <input type="text" placeholder="VD: 123 Đường Nguyễn Văn Linh..." className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Ghi chú đơn hàng (Tùy chọn)</label>
                <textarea rows="3" placeholder="Ghi chú về giao hàng, ví dụ: Giao giờ hành chính..." className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500"></textarea>
              </div>
            </form>
          </div>

          {/* Khung 2: Phương thức thanh toán */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase border-b-2 border-orange-500 pb-2 inline-block">
              Phương thức thanh toán
            </h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 p-4 border border-orange-500 bg-orange-50 rounded-md cursor-pointer transition">
                <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-orange-500" />
                <span className="font-medium text-gray-800">Thanh toán khi nhận hàng (COD)</span>
              </label>
              
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-md cursor-pointer hover:border-orange-500 transition">
                <input type="radio" name="payment" className="w-5 h-5 accent-orange-500" />
                <span className="font-medium text-gray-800">Chuyển khoản ngân hàng / VNPAY</span>
              </label>
            </div>
          </div>

        </div>

        {/* === CỘT PHẢI: TÓM TẮT ĐƠN HÀNG === */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-sm border border-gray-100 h-fit sticky top-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase border-b-2 border-orange-500 pb-2 inline-block">
            Đơn hàng của bạn
          </h2>
          
          {/* Danh sách món hàng mini */}
          <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-center gap-3 w-3/4">
                  <div className="relative">
                    <img src={item.image} alt="img" className="w-14 h-14 object-cover border rounded-md" />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 line-clamp-2">{item.title}</span>
                </div>
                <span className="text-sm font-bold text-gray-800 w-1/4 text-right">
                  {(item.price * item.quantity).toLocaleString()}đ
                </span>
              </div>
            ))}
          </div>

          {/* Mã giảm giá */}
          <div className="flex gap-2 mb-6 border-t border-b border-gray-100 py-4">
            <input type="text" placeholder="Nhập mã giảm giá..." className="flex-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm" />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition text-sm">
              Áp dụng
            </button>
          </div>

          {/* Tính tiền */}
          <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6 border-b border-gray-100 pb-4">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span className="font-medium text-gray-800">{subTotal.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span className="font-medium text-gray-800">{shippingFee.toLocaleString()}đ</span>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6">
            <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
            <span className="text-3xl font-extrabold text-orange-500">{total.toLocaleString()}đ</span>
          </div>

          <button className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-md hover:bg-red-700 transition uppercase shadow-md">
            ĐẶT HÀNG NGAY
          </button>
          
          <Link to="/my-cart" className="block text-center mt-4 text-blue-500 hover:text-orange-500 transition text-sm font-medium">
            ← Quay lại giỏ hàng
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Checkout;