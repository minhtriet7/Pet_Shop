import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole'); 
    localStorage.removeItem('userName'); 
    window.dispatchEvent(new Event('auth-change'));
    navigate('/'); 
  };

  return (
    <div className="w-full flex min-h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* SIDEBAR TÔNG ĐEN HIỆN ĐẠI */}
      <div className="w-[260px] bg-slate-900 text-slate-300 flex flex-col fixed h-full shadow-2xl z-20">
        
        <div className="h-[80px] flex items-center justify-center border-b border-slate-800 bg-slate-950">
          <h1 className="text-2xl font-bold tracking-widest text-orange-500">
            PET<span className="text-white font-light">ADMIN</span>
          </h1>
        </div>

        <ul className="flex flex-col mt-2 flex-grow overflow-y-auto text-[14px] font-medium custom-scrollbar">
          
          {/* NÚT VỀ TRANG CHỦ */}
          <li className="mb-4">
            <Link to="/" className="flex items-center gap-3 px-6 py-4 bg-orange-600 text-white hover:bg-orange-500 transition shadow-md">
              <span className="text-lg">🏠</span> Trở Về Cửa Hàng
            </Link>
          </li>
          
          <li className="text-xs uppercase text-slate-500 px-6 py-2 tracking-wider mt-2">Báo Cáo</li>
          <li>
            <Link to="/admin/dashboard" className="block px-6 py-3 hover:bg-slate-800 hover:text-white transition border-l-4 border-transparent hover:border-orange-500">
              📊 Tổng Quan Doanh Thu
            </Link>
          </li>

          <li className="text-xs uppercase text-slate-500 px-6 py-2 tracking-wider mt-4">Quản Lý</li>
          <li>
            <Link to="/admin/manage-orders" className="block px-6 py-3 hover:bg-slate-800 hover:text-white transition border-l-4 border-transparent hover:border-orange-500">
              🛒 Đơn Hàng Của Khách
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-services" className="block px-6 py-3 hover:bg-slate-800 hover:text-white transition border-l-4 border-transparent hover:border-orange-500">
              ✂️ Lịch Đặt Dịch Vụ
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-products" className="block px-6 py-3 hover:bg-slate-800 hover:text-white transition border-l-4 border-transparent hover:border-orange-500">
              📦 Kho Sản Phẩm
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-users" className="block px-6 py-3 hover:bg-slate-800 hover:text-white transition border-l-4 border-transparent hover:border-orange-500">
              👥 Danh Sách Người Dùng
            </Link>
          </li>
        </ul>

        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <button 
            onClick={handleLogout}
            className="w-full bg-slate-800 hover:bg-red-600 text-white py-3 rounded-md transition font-bold text-sm shadow-md"
          >
            Đăng Xuất
          </button>
        </div>
      </div>

      {/* KHU VỰC NỘI DUNG */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <div className="h-[80px] bg-white flex items-center justify-between px-8 border-b border-gray-200 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-800">Bảng Điều Khiển</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-gray-800">Admin Triết</p>
              <p className="text-xs text-orange-500 font-medium">Quản trị viên</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="admin" className="w-10 h-10 rounded-full border-2 border-orange-500 p-0.5 object-cover" />
          </div>
        </div>

        <div className="p-8 flex-grow">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AdminLayout;