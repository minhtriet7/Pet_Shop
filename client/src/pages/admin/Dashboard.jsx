import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tổng Quan Hệ Thống</h1>
      
      {/* 4 Khung Thống Kê */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Tổng Doanh Thu</h3>
          <p className="text-2xl font-bold text-gray-800">125.000.000đ</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Đơn Hàng Mới</h3>
          <p className="text-2xl font-bold text-gray-800">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Tổng Sản Phẩm</h3>
          <p className="text-2xl font-bold text-gray-800">320</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Khách Hàng</h3>
          <p className="text-2xl font-bold text-gray-800">1,205</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm h-[400px] flex items-center justify-center border border-gray-100">
        <p className="text-gray-400 font-medium">Bản đồ Biểu đồ doanh thu sẽ nằm ở đây (Sau này cài thư viện Chart.js)</p>
      </div>
    </div>
  );
};

export default Dashboard;