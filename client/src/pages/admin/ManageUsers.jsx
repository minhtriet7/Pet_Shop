import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  // 1. Tạo state rỗng chờ data từ Database đổ về
  const [users, setUsers] = useState([]);

  // 2. Dùng useEffect để tự động gọi API khi vào trang
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Lấy chìa khóa Token bạn đã lưu lúc Đăng Nhập
        const token = localStorage.getItem('accessToken');
        
        // Gọi sang Backend (nhớ kẹp Token vào headers để chứng minh là Admin)
        const response = await axios.get('http://localhost:5000/api/user/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          setUsers(response.data.users); // Bơm data thật vào bảng
        }
      } catch (error) {
        console.log("Lỗi tải danh sách người dùng:", error);
      }
    };

    fetchUsers();
  }, []);

  // Hàm set màu trạng thái (Sửa lại logic theo trường isBlocked trong DB)
  const getStatusColor = (isBlocked) => {
    return !isBlocked 
      ? 'bg-green-100 text-green-700 border-green-300' 
      : 'bg-red-100 text-red-700 border-red-300';
  };

  // Hàm set màu cho quyền
  const getRoleColor = (role) => {
    return role === 'admin' ? 'text-orange-600 font-bold uppercase' : 'text-gray-600 font-medium capitalize';
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Danh Sách Người Dùng</h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700 transition shadow-sm">
          + Thêm tài khoản
        </button>
      </div>

      {/* Bộ lọc */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-gray-50 p-4 rounded-md border border-gray-100">
        <input 
          type="text" 
          placeholder="Tìm theo tên, email, SĐT..." 
          className="px-4 py-2 border border-gray-300 rounded-md flex-1 outline-none focus:border-orange-500 text-sm" 
        />
        <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm cursor-pointer w-[180px]">
          <option value="">Tất cả quyền</option>
          <option value="admin">Quản trị viên</option>
          <option value="user">Khách hàng</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500 text-sm cursor-pointer w-[180px]">
          <option value="">Tất cả trạng thái</option>
          <option value="Hoạt động">Hoạt động</option>
          <option value="Bị khóa">Bị khóa</option>
        </select>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4">STT</th>
              <th className="p-4">Thông tin người dùng</th>
              <th className="p-4">Số Điện Thoại</th>
              <th className="p-4">Phân Quyền</th>
              <th className="p-4">Trạng Thái</th>
              <th className="p-4 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-gray-50 transition text-sm text-gray-800">
                <td className="p-4 font-medium text-gray-500">{index + 1}</td>
                <td className="p-4">
                  {/* Trong Database, tên được chia thành firstname và lastname */}
                  <p className="font-bold text-gray-800">{user.firstname} {user.lastname}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </td>
                {/* SDT trong DB lưu là mobile */}
                <td className="p-4">{user.mobile}</td>
                <td className={`p-4 ${getRoleColor(user.role)}`}>{user.role}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(user.isBlocked)}`}>
                    {user.isBlocked ? 'Bị khóa' : 'Hoạt động'}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline mr-4">
                    Sửa
                  </button>
                  <button className={`${!user.isBlocked ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'} font-bold hover:underline`}>
                    {!user.isBlocked ? 'Khóa' : 'Mở khóa'}
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

export default ManageUsers;