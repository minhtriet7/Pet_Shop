import React, { useState } from 'react';

const ManageServices = () => {
  // Dữ liệu giả lập lịch đặt dịch vụ
  const [bookings] = useState([
    { id: 'DV001', customer: 'Nguyễn Văn A', phone: '0901234567', pet: 'Chó Poodle (Milo)', service: 'Combo Tắm + Cắt tỉa', datetime: '21/10/2026 - 14:00', status: 'Đã xác nhận' },
    { id: 'DV002', customer: 'Trần Thị B', phone: '0912345678', pet: 'Mèo ALN (Luna)', service: 'Gửi Khách Sạn (3 ngày)', datetime: '22/10/2026 - 09:00', status: 'Chờ duyệt' },
    { id: 'DV003', customer: 'Lê Minh C', phone: '0987654321', pet: 'Chó Corgi (Lu)', service: 'Vệ sinh tai + Cắt móng', datetime: '20/10/2026 - 10:30', status: 'Hoàn thành' },
    { id: 'DV004', customer: 'Phạm Văn D', phone: '0965432198', pet: 'Chó Golden (Kiki)', service: 'Khám sức khỏe', datetime: '19/10/2026 - 16:00', status: 'Đã hủy' },
  ]);

  // Hàm tạo màu cho trạng thái (Badge)
  const getStatusColor = (status) => {
    switch (status) {
      case 'Chờ duyệt': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Đã xác nhận': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Hoàn thành': return 'bg-green-100 text-green-700 border-green-300';
      case 'Đã hủy': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Lịch Đặt Dịch Vụ (Spa/Hotel)</h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700 transition shadow-sm">
          + Tạo lịch hẹn mới
        </button>
      </div>

      {/* Bộ lọc và Tìm kiếm */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-gray-50 p-4 rounded-md border border-gray-100">
        <input 
          type="text" 
          placeholder="Tìm theo số điện thoại hoặc tên khách..." 
          className="px-4 py-2 border border-gray-300 rounded-md flex-1 outline-none focus:border-orange-500 text-sm" 
        />
        <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm cursor-pointer">
          <option value="">Tất cả dịch vụ</option>
          <option value="spa">Combo Spa (Tắm, Cắt tỉa)</option>
          <option value="hotel">Khách sạn thú cưng</option>
          <option value="medical">Dịch vụ y tế</option>
        </select>
        <input 
          type="date" 
          className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm text-gray-600 cursor-pointer" 
        />
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4">Mã Đặt</th>
              <th className="p-4">Khách Hàng</th>
              <th className="p-4">Thú Cưng</th>
              <th className="p-4">Dịch Vụ</th>
              <th className="p-4">Thời Gian</th>
              <th className="p-4">Trạng Thái</th>
              <th className="p-4 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition text-sm text-gray-800">
                <td className="p-4 font-bold text-orange-600">#{item.id}</td>
                <td className="p-4">
                  <p className="font-medium text-gray-800">{item.customer}</p>
                  <p className="text-xs text-gray-500">{item.phone}</p>
                </td>
                <td className="p-4 font-medium text-slate-700">{item.pet}</td>
                <td className="p-4">{item.service}</td>
                <td className="p-4 font-medium">{item.datetime}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline">
                    Duyệt / Hủy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageServices;