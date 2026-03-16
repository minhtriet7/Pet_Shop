import React, { useState } from 'react';

const ManageBlogs = () => {
  const [blogs] = useState([
    { id: 'B01', title: 'Top 5 loại hạt tốt nhất cho Poodle', author: 'Admin Triết', date: '20/10/2026', views: 1250, status: 'Đã xuất bản' },
    { id: 'B02', title: 'Hướng dẫn tiêm phòng cho chó con', author: 'Admin Triết', date: '18/10/2026', views: 840, status: 'Đã xuất bản' },
    { id: 'B03', title: 'Làm sao để mèo không cào sofa?', author: 'Bác sĩ Thú y', date: '15/10/2026', views: 0, status: 'Bản nháp' },
  ]);

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Bài Viết & Cẩm Nang</h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700 transition shadow-sm">
          + Viết bài mới
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4 w-[40%]">Tiêu đề bài viết</th>
              <th className="p-4">Tác giả</th>
              <th className="p-4">Ngày Đăng</th>
              <th className="p-4">Lượt xem</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition text-sm text-gray-800">
                <td className="p-4 font-bold text-gray-700 hover:text-orange-500 cursor-pointer">{blog.title}</td>
                <td className="p-4 text-gray-500">{blog.author}</td>
                <td className="p-4">{blog.date}</td>
                <td className="p-4 font-medium">{blog.views}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${blog.status === 'Đã xuất bản' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline font-bold mr-3">Sửa</button>
                  <button className="text-red-600 hover:underline font-bold">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogs;