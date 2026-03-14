import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PublicLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Cố định Header ở trên cùng */}
      <Header />
      
      {/* Component Outlet chính là cái "ruột". Khi bạn chuyển trang, chỉ phần này thay đổi */}
      <div className="w-full flex-grow flex flex-col items-center">
        <Outlet />
      </div>

      {/* Cố định Footer ở dưới cùng */}
      <Footer />
    </div>
  );
};

export default PublicLayout;