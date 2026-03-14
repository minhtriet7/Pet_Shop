import React from 'react';
import { Link } from 'react-router-dom';

const SubBanners = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* BANNER 1: DÀNH CHO CHÓ */}
        <Link to="#" className="group relative overflow-hidden rounded-md shadow-sm">
          <img 
            // Tạm dùng ảnh từ Unsplash cực đẹp, sau này bạn thay link ảnh của bạn vào
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Đồ cho chó" 
            className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Lớp phủ màu đen mờ để chữ nổi lên */}
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 group-hover:bg-opacity-40"></div>
          
          {/* Nội dung chữ trên Banner */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
            <h3 className="text-white text-3xl font-extrabold mb-2 drop-shadow-lg">Bộ Sưu Tập Cún Cưng</h3>
            <p className="text-white text-md font-medium mb-4 drop-shadow-md">Giảm giá lên đến 30% phụ kiện</p>
            <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold uppercase text-sm hover:bg-orange-600 transition shadow-md">
              Khám phá ngay
            </span>
          </div>
        </Link>

        {/* BANNER 2: DÀNH CHO MÈO */}
        <Link to="#" className="group relative overflow-hidden rounded-md shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Đồ cho mèo" 
            className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 group-hover:bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
            <h3 className="text-white text-3xl font-extrabold mb-2 drop-shadow-lg">Thế Giới Của Mèo</h3>
            <p className="text-white text-md font-medium mb-4 drop-shadow-md">Pate & Cát vệ sinh cao cấp</p>
            <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold uppercase text-sm hover:bg-orange-600 transition shadow-md">
              Mua sắm ngay
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default SubBanners;