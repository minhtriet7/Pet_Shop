import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f5] pb-10 min-h-screen">
      
      {/* THANH BREADCRUMB */}
      <div className="w-full bg-white h-[50px] flex items-center justify-center border-b border-gray-200">
        <div className="w-full max-w-7xl px-4 flex items-center gap-2 text-[14px] text-gray-500">
          <Link to="/" className="hover:text-orange-500 transition">Trang chủ</Link>
          <span>{'>'}</span>
          <span className="font-bold text-orange-500 uppercase">TIN TỨC & CẨM NANG</span>
        </div>
      </div>

      {/* DANH SÁCH BÀI VIẾT */}
      <div className="w-full max-w-7xl px-4 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 uppercase border-l-4 border-orange-500 pl-4">
          Cẩm Nang Thú Cưng
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bài viết 1 */}
          <div className="bg-white rounded-md shadow-sm overflow-hidden group cursor-pointer border border-gray-100">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500" alt="blog" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-500 font-bold mb-2">20 Tháng 10, 2026</p>
              <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-orange-500 transition line-clamp-2 leading-snug">
                Top 5 loại hạt tốt nhất cho chó Poodle kén ăn
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Poodle là giống chó kén ăn và cần chế độ dinh dưỡng đặc biệt để duy trì bộ lông xù bóng mượt. Khám phá ngay 5 loại hạt được bác sĩ thú y khuyên dùng.
              </p>
            </div>
          </div>

          {/* Bài viết 2 */}
          <div className="bg-white rounded-md shadow-sm overflow-hidden group cursor-pointer border border-gray-100">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500" alt="blog" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-500 font-bold mb-2">18 Tháng 10, 2026</p>
              <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-orange-500 transition line-clamp-2 leading-snug">
                Cách huấn luyện mèo đi vệ sinh vào chậu cát
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Mèo đi vệ sinh bậy khắp nhà là nỗi ám ảnh của nhiều sen. Bài viết này sẽ hướng dẫn bạn cách tập cho mèo đi vào chậu cát chỉ trong 3 ngày.
              </p>
            </div>
          </div>

          {/* Bài viết 3 */}
          <div className="bg-white rounded-md shadow-sm overflow-hidden group cursor-pointer border border-gray-100">
            <div className="w-full h-[220px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1537151608804-ea2f1fa3dfc2?auto=format&fit=crop&w=500" alt="blog" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-5">
              <p className="text-xs text-orange-500 font-bold mb-2">15 Tháng 10, 2026</p>
              <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-orange-500 transition line-clamp-2 leading-snug">
                Lịch tiêm phòng chuẩn cho chó con mới về nhà
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Tiêm phòng đúng lịch là cách tốt nhất để bảo vệ cún cưng khỏi các căn bệnh nguy hiểm như Parvo, Care. Xem ngay lịch tiêm chi tiết.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;