import React, { useState } from 'react';

const ManageOrders = () => {
  // Dữ liệu giả lập các đơn hàng
  const [orders] = useState([
    { id: 'DH001', customer: 'Nguyễn Văn A', date: '20/10/2026', total: 450000, status: 'Chờ xác nhận', payment: 'COD' },
    { id: 'DH002', customer: 'Trần Thị B', date: '19/10/2026', total: 1250000, status: 'Đang giao hàng', payment: 'Chuyển khoản' },
    { id: 'DH003', customer: 'Lê Minh C', date: '18/10/2026', total: 320000, status: 'Hoàn thành', payment: 'Momo' },
    { id: 'DH004', customer: 'Phạm Văn D', date: '15/10/2026', total: 850000, status: 'Đã hủy', payment: 'COD' },
  ]);

  // Hàm tạo màu cho trạng thái đơn hàng (UX/UI xịn là ở đây)
  const getStatusColor = (status) => {
    switch (status) {
      case 'Chờ xác nhận': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Đang giao hàng': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Hoàn thành': return 'bg-green-100 text-green-700 border-green-300';
      case 'Đã hủy': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản Lý Đơn Hàng</h1>
      </div>

      {/* Bộ lọc và Tìm kiếm */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-gray-50 p-4 rounded-md border border-gray-100">
        <input 
          type="text" 
          placeholder="Tìm theo mã đơn (VD: DH001)..." 
          className="px-4 py-2 border border-gray-300 rounded-md flex-1 outline-none focus:border-orange-500 text-sm" 
        />
        <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm cursor-pointer">
          <option value="">Tất cả trạng thái</option>
          <option value="Chờ xác nhận">Chờ xác nhận</option>
          <option value="Đang giao hàng">Đang giao hàng</option>
          <option value="Hoàn thành">Hoàn thành</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-bold hover:bg-black transition text-sm">
          Lọc Đơn
        </button>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4">Mã Đơn</th>
              <th className="p-4">Khách Hàng</th>
              <th className="p-4">Ngày Đặt</th>
              <th className="p-4">Thanh Toán</th>
              <th className="p-4">Tổng Tiền</th>
              <th className="p-4">Trạng Thái</th>
              <th className="p-4 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition text-sm text-gray-800">
                <td className="p-4 font-bold text-orange-600">#{order.id}</td>
                <td className="p-4 font-medium">{order.customer}</td>
                <td className="p-4 text-gray-500">{order.date}</td>
                <td className="p-4">{order.payment}</td>
                <td className="p-4 font-bold">{order.total.toLocaleString()}đ</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline">
                    Xem / Cập nhật
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang (Pagination) mồi */}
      <div className="flex justify-end mt-6">
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">Trước</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded-md font-bold shadow-sm">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">Sau</button>
        </div>
      </div>

    </div>
  );
};

export default ManageOrders;