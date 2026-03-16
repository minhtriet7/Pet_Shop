import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  // Dữ liệu giả lập sản phẩm thả tim
  const [wishlist] = useState([
    { id: 1, title: 'Thức ăn hạt Royal Canin cho chó Poodle trưởng thành', price: 350000, image: 'https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1' },
    { id: 2, title: 'Cát vệ sinh đậu nành cho Mèo (Hương trà xanh)', price: 110000, image: 'https://down-vn.img.susercontent.com/file/82302d7eb78263ff002f2323a63b061e' },
    { id: 3, title: 'Sữa tắm SOS chuyên dụng khử mùi hôi', price: 150000, image: 'https://down-vn.img.susercontent.com/file/260efb7941784dd57be66ebefc5d18d4' }
  ]);

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[500px] animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4 mb-6">
        Sản Phẩm Yêu Thích
      </h1>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">Bạn chưa lưu sản phẩm nào.</p>
          <Link to="/" className="text-orange-500 hover:underline font-bold">Về trang chủ mua sắm</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 relative group hover:shadow-md transition">
              {/* Nút Xóa khỏi Wishlist */}
              <button className="absolute top-2 right-2 bg-gray-100 text-gray-400 hover:bg-red-500 hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition z-10" title="Bỏ yêu thích">
                ✕
              </button>
              
              <div className="w-full h-[180px] flex justify-center items-center overflow-hidden mb-4">
                <img src={item.image} alt={item.title} className="max-h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              
              <h3 className="font-bold text-gray-700 text-[14px] line-clamp-2 mb-2 hover:text-orange-500 cursor-pointer">
                {item.title}
              </h3>
              <p className="text-orange-500 font-extrabold text-[16px] mb-4">{item.price.toLocaleString()}đ</p>
              
              <button className="w-full bg-orange-50 text-orange-600 border border-orange-500 py-2 rounded-md hover:bg-orange-500 hover:text-white transition font-bold uppercase text-xs tracking-wider">
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;