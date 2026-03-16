import React from 'react';

const History = () => {
  const orders = [
    { id: '#12345', date: '10/03/2026', total: 450000, status: 'Đang giao' },
    { id: '#12340', date: '01/03/2026', total: 110000, status: 'Hoàn thành' },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4 mb-6">Lịch Sử Mua Hàng</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
              <th className="p-4 border-b">Mã đơn</th>
              <th className="p-4 border-b">Ngày đặt</th>
              <th className="p-4 border-b">Tổng tiền</th>
              <th className="p-4 border-b">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="p-4 border-b font-bold text-orange-600">{order.id}</td>
                <td className="p-4 border-b text-gray-600">{order.date}</td>
                <td className="p-4 border-b font-bold">{order.total.toLocaleString()}đ</td>
                <td className="p-4 border-b">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Hoàn thành' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;