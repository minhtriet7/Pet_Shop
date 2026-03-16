import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MemberLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Giữ lại Header dùng chung */}
      <Header />
      
      <div className="w-full max-w-7xl mx-auto px-4 py-8 flex-grow flex flex-col md:flex-row gap-6">
        
        {/* === SIDEBAR BÊN TRÁI === */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-sm h-fit">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="avatar" 
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <p className="text-gray-500 text-sm">Tài khoản của</p>
              <p className="font-bold text-gray-800">Minh Triết</p>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-gray-700 font-medium text-[15px]">
            <li>
              <Link to="/member/personal" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 rounded-md transition text-orange-500 bg-orange-50">
                Thông tin cá nhân
              </Link>
            </li>
            <li>
  <Link to="/member/history" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 rounded-md transition">
    Lịch sử mua hàng
  </Link>
</li>
            <li>
              <Link to="/member/wishlist" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 rounded-md transition">
                Sản phẩm yêu thích
              </Link>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-red-500 rounded-md transition mt-4 border-t border-gray-100 pt-4">
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>

        {/* === NỘI DUNG BÊN PHẢI (Outlet) === */}
        <div className="w-full md:w-3/4">
          <Outlet />
        </div>

      </div>

      {/* Giữ lại Footer dùng chung */}
      <Footer />
    </div>
  );
};

export default MemberLayout;