import React from 'react';
import { Link } from 'react-router-dom';

const Petcare = () => {
  return (
    <div className="w-full min-h-[600px] flex flex-col items-center bg-gray-50 py-10">
      <div className="w-full max-w-5xl bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6 uppercase tracking-wider">
          Về Chúng Tôi - PetCare
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          PetCare tự hào là hệ sinh thái chăm sóc thú cưng toàn diện hàng đầu. Chúng tôi cung cấp những sản phẩm dinh dưỡng tốt nhất, phụ kiện thời trang đa dạng và các dịch vụ Spa, Hotel đẳng cấp 5 sao cho "Boss" của bạn.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000" 
          alt="Petcare About" 
          className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8"
        />
        <Link to="/" className="bg-orange-500 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition shadow-lg">
          Bắt đầu mua sắm ngay
        </Link>
      </div>
    </div>
  );
};

export default Petcare;