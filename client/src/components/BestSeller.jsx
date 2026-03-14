import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Import thẻ sản phẩm của bạn vào

const BestSeller = () => {
  // useState để lưu vết xem người dùng đang bấm vào Tab nào (Mặc định là 1 - Dành cho Chó)
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: 'Dành Cho Chó' },
    { id: 2, name: 'Dành Cho Mèo' }
  ];

  // Dữ liệu mẫu (Giả lập Backend)
  const dogProducts = [
    { id: 101, title: "Thức ăn hạt Royal Canin cho Poodle", price: 350000, image: "https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1" },
    { id: 102, title: "Xương gặm sạch răng Orgo", price: 45000, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lsthndh1r1yicf" },
    { id: 103, title: "Sữa tắm SOS chuyên dụng cho chó", price: 150000, image: "https://down-vn.img.susercontent.com/file/260efb7941784dd57be66ebefc5d18d4" },
    { id: 104, title: "Dây dắt kèm vòng cổ phản quang", price: 85000, image: "https://down-vn.img.susercontent.com/file/857eec03d5267a5cf5774a3f5b721e51" }
  ];

  const catProducts = [
    { id: 201, title: "Cát vệ sinh đậu nành cho mèo", price: 110000, image: "https://down-vn.img.susercontent.com/file/82302d7eb78263ff002f2323a63b061e" },
    { id: 202, title: "Pate Whiskas vị cá ngừ", price: 15000, image: "https://down-vn.img.susercontent.com/file/6c8585e05d04ccf8bb85c6ad7144e0b0" },
    { id: 203, title: "Cần câu mèo gắn lông vũ", price: 25000, image: "https://down-vn.img.susercontent.com/file/8f8a37f0e6118b762550b070bb4e1f7a" },
    { id: 204, title: "Nhà vệ sinh cho mèo có nắp", price: 250000, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfz6o1qgq76t04" }
  ];

  // Logic: Nếu activeTab là 1 thì lấy mảng chó, ngược lại lấy mảng mèo
  const currentProducts = activeTab === 1 ? dogProducts : catProducts;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-10 bg-white p-6 rounded-md shadow-sm">
      
      {/* ===== PHẦN ĐẦU: CÁC NÚT CHUYỂN TAB ===== */}
      <div className="flex gap-8 border-b-2 border-gray-200 pb-2 mb-6">
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer font-bold text-[20px] uppercase transition-colors duration-200 relative
              ${activeTab === tab.id ? 'text-orange-500' : 'text-gray-400 hover:text-orange-400'}
            `}
          >
            {tab.name}
            {/* Thanh gạch dưới màu cam chạy hiệu ứng khi Active */}
            <div className={`absolute -bottom-[10px] left-0 w-full h-[3px] bg-orange-500 transition-transform duration-300
              ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'}
            `}></div>
          </div>
        ))}
      </div>

      {/* ===== PHẦN THÂN: LƯỚI SẢN PHẨM ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
};

export default BestSeller;