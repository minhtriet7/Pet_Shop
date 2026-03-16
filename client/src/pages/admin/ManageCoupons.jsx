import React, { useState } from "react";

const ManageCoupons = () => {
  const [coupons] = useState([
    {
      id: "C01",
      code: "WELCOME50",
      type: "Giảm 50.000đ",
      minOrder: 300000,
      exp: "30/10/2026",
      usage: "45/100",
      status: "Đang chạy",
    },
    {
      id: "C02",
      code: "FREESHIP",
      type: "Miễn phí Ship",
      minOrder: 500000,
      exp: "31/12/2026",
      usage: "120/∞",
      status: "Đang chạy",
    },
    {
      id: "C03",
      code: "SALET10",
      type: "Giảm 20%",
      minOrder: 1000000,
      exp: "10/10/2026",
      usage: "50/50",
      status: "Hết hạn",
    },
  ]);

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Mã Giảm Giá (Coupon)
        </h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-700 transition shadow-sm">
          + Tạo mã mới
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-xs uppercase font-bold border-y border-gray-300">
              <th className="p-4">Mã CODE</th>
              <th className="p-4">Loại Giảm Giá</th>
              <th className="p-4">Đơn Tối Thiểu</th>
              <th className="p-4">Đã Dùng</th>
              <th className="p-4">Hạn Sử Dụng</th>
              <th className="p-4">Trạng Thái</th>
              <th className="p-4 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition text-sm text-gray-800"
              >
                <td className="p-4 font-extrabold text-orange-600 text-[16px]">
                  {coupon.code}
                </td>
                <td className="p-4 font-medium">{coupon.type}</td>
                <td className="p-4 text-gray-500">
                  {coupon.minOrder.toLocaleString()}đ
                </td>
                <td className="p-4 font-bold">{coupon.usage}</td>
                <td className="p-4">{coupon.exp}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${coupon.status === "Đang chạy" ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"}`}
                  >
                    {coupon.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline font-bold mr-3">
                    Sửa
                  </button>
                  <button className="text-red-600 hover:underline font-bold">
                    Xóa
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

export default ManageCoupons;
