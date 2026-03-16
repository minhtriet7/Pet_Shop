import React from 'react';

const Personal = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4 mb-6">
        Hồ Sơ Của Tôi
      </h1>
      <p className="text-gray-500 mb-6 text-sm">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>

      <form className="flex flex-col md:flex-row gap-10">
        
        {/* Form nhập liệu */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Tên hiển thị</label>
            <input type="text" defaultValue="Minh Triết" className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" defaultValue="minhtriet@gmail.com" disabled className="px-4 py-2 border border-gray-200 bg-gray-50 text-gray-500 rounded-md outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Số điện thoại</label>
            <input type="text" defaultValue="0987654321" className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-orange-500" />
          </div>

          <button type="button" className="bg-orange-500 text-white font-bold py-2 px-8 rounded-md mt-4 hover:bg-orange-600 transition w-fit">
            Lưu thay đổi
          </button>
        </div>

        {/* Khu vực Avatar */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-l border-gray-200 gap-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="avatar" 
            className="w-24 h-24 rounded-full border border-gray-300 object-cover"
          />
          <input type="file" id="avatar" className="hidden" />
          <label htmlFor="avatar" className="border border-gray-300 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-50 transition">
            Chọn ảnh
          </label>
          <p className="text-xs text-gray-400">Dung lượng file tối đa 1MB. Định dạng: JPEG, PNG</p>
        </div>

      </form>
    </div>
  );
};

export default Personal;