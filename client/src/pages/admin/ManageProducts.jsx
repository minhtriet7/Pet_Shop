import React, { useState } from 'react';

const ManageProducts = () => {
  const [products] = useState([
    { id: 'SP01', name: 'Thức ăn hạt Royal Canin', category: 'Chó', price: 350000, stock: 50 },
    { id: 'SP02', name: 'Cát vệ sinh đậu nành', category: 'Mèo', price: 110000, stock: 120 },
  ]);

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Kho Sản Phẩm</h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700 transition">
          + Thêm Sản Phẩm Mới
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4">Mã SP</th>
              <th className="p-4">Tên Sản Phẩm</th>
              <th className="p-4">Danh mục</th>
              <th className="p-4">Giá Bán</th>
              <th className="p-4">Tồn Kho</th>
              <th className="p-4 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 text-sm text-gray-800">
                <td className="p-4 font-bold text-orange-600">{item.id}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4 font-bold">{item.price.toLocaleString()}đ</td>
                <td className="p-4">{item.stock}</td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline font-medium mr-4">Sửa</button>
                  <button className="text-red-600 hover:underline font-medium">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;