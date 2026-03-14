import React, { useState, useEffect } from 'react';
import icons from '../utils/icons'; // Lấy icon ngôi sao từ thư viện của bạn
const { AiFillStar } = icons;

const DealDaily = () => {
  // Logic tạo đồng hồ đếm ngược (Ví dụ: đếm ngược 5 giờ)
  const [time, setTime] = useState({
    hours: 5,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format số (thêm số 0 đằng trước nếu nhỏ hơn 10)
  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-10">
      <div className="bg-white rounded-md shadow-sm border border-red-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* CỘT TRÁI: THÔNG TIN DEAL & ĐỒNG HỒ */}
        <div className="md:w-1/3 bg-red-50 p-6 flex flex-col items-center justify-center border-r border-red-100">
          <h2 className="text-3xl font-extrabold text-red-600 uppercase flex items-center gap-2 mb-2">
            ⚡ Flash Sale
          </h2>
          <p className="text-gray-600 mb-6 font-medium">Kết thúc trong:</p>
          
          {/* Khối đồng hồ */}
          <div className="flex gap-3 text-2xl font-bold text-white">
            <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-md shadow-md">
              {formatTime(time.hours)}
            </div>
            <span className="text-red-600 self-center">:</span>
            <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-md shadow-md">
              {formatTime(time.minutes)}
            </div>
            <span className="text-red-600 self-center">:</span>
            <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-md shadow-md">
              {formatTime(time.seconds)}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: SẢN PHẨM ĐANG SALE */}
        <div className="md:w-2/3 p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/2 flex justify-center relative">
            {/* Nhãn -50% */}
            <span className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 font-bold text-sm rounded-br-lg rounded-tl-md z-10">
              -50%
            </span>
            <img 
              src="https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1" 
              alt="Sale Product" 
              className="w-[250px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col gap-3">
            <h3 className="text-xl font-bold text-gray-800 hover:text-orange-500 cursor-pointer">
              Thức ăn hạt Royal Canin cho chó Poodle trưởng thành (Túi 1.5kg)
            </h3>
            
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
              <span className="text-gray-500 text-sm ml-2">(125 đánh giá)</span>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-2xl font-extrabold text-red-600">350.000đ</span>
              <span className="text-sm text-gray-400 line-through pb-1">700.000đ</span>
            </div>

            {/* Thanh tiến trình (Đã bán) */}
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                <span>Đã bán: 45</span>
                <span>Số lượng: 100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-md font-bold uppercase hover:bg-orange-600 transition shadow-md">
              Thêm Vào Giỏ Hàng Ngay
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DealDaily;