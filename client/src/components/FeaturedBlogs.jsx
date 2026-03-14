import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBlogs = () => {
  // Dữ liệu bài viết mẫu
  const blogs = [
    {
      id: 1,
      title: "Top 5 loại hạt dinh dưỡng giúp lông Poodle luôn mượt mà",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "08/03/2026",
      desc: "Poodle là giống chó dễ bị phai màu lông nếu không chăm sóc kỹ. Cùng tìm hiểu top 5 loại hạt tốt nhất..."
    },
    {
      id: 2,
      title: "Cẩm nang chọn cát vệ sinh khử mùi hiệu quả cho Mèo",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "05/03/2026",
      desc: "Mùi hôi từ khay cát luôn là nỗi ám ảnh của các 'con sen'. Bài viết này sẽ giúp bạn chọn đúng loại cát..."
    },
    {
      id: 3,
      title: "Lịch tiêm phòng chuẩn cho cún con dưới 6 tháng tuổi",
      image: "https://images.unsplash.com/photo-1537151608804-ea6f11cc678e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "01/03/2026",
      desc: "Tiêm phòng đúng lịch là cách tốt nhất để bảo vệ thú cưng khỏi các căn bệnh nguy hiểm như Care, Parvo..."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-16 mt-10">
      {/* Tiêu đề khối */}
      <div className="flex justify-between items-center border-b-2 border-orange-500 pb-2 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">Cẩm nang thú cưng</h2>
        <Link to="#" className="text-gray-500 hover:text-orange-500 transition font-medium">
          Xem tất cả tin tức {'>'}
        </Link>
      </div>

      {/* Lưới bài viết */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 group cursor-pointer">
            {/* Ảnh bài viết */}
            <div className="w-full h-[220px] overflow-hidden relative">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
                {blog.date}
              </div>
            </div>
            
            {/* Nội dung bài viết */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-[17px] font-bold text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-[14px] line-clamp-3 leading-relaxed">
                {blog.desc}
              </p>
              <span className="text-orange-500 font-bold text-[14px] mt-2 inline-block">
                Đọc tiếp ➜
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;