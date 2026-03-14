import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

// Dữ liệu mẫu (sau này bạn sẽ lấy từ API/Backend)
const mockProducts = [
  { id: 1, title: "Thức ăn hạt Royal Canin cho Poodle", price: 350000, image: "https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1" },
  { id: 2, title: "Balo vận chuyển phi hành gia", price: 220000, image: "https://down-vn.img.susercontent.com/file/c5b0451a44eefea570ab4856f6ba4334" },
  { id: 3, title: "Cát vệ sinh đậu nành cho mèo", price: 110000, image: "https://down-vn.img.susercontent.com/file/82302d7eb78263ff002f2323a63b061e" },
  { id: 4, title: "Sữa tắm SOS chuyên dụng", price: 150000, image: "https://down-vn.img.susercontent.com/file/260efb7941784dd57be66ebefc5d18d4" },
  { id: 5, title: "Pate Whiskas vị cá ngừ", price: 15000, image: "https://down-vn.img.susercontent.com/file/6c8585e05d04ccf8bb85c6ad7144e0b0" },
  { id: 6, title: "Xương gặm sạch răng Orgo", price: 45000, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lsthndh1r1yicf" },
];

const Products = () => {
  // Lấy chữ trên đường link xuống (Ví dụ: 'cho', 'meo', 'thiet-bi-thong-minh'...)
  const { category } = useParams();

  // Logic tự động đổi Tên Danh Mục dựa vào URL
  let pageTitle = "Tất cả sản phẩm";
  if (category === 'cho') {
    pageTitle = "Dành cho Chó";
  } else if (category === 'meo') {
    pageTitle = "Dành cho Mèo";
  } else if (category === 'thiet-bi-thong-minh') {
    pageTitle = "Thiết bị thông minh";
  } else if (category === 'hang-moi-ve') {
    pageTitle = "Hàng mới về";
  } else if (category === 'thuong-hieu') {
    pageTitle = "Thương hiệu nổi bật";
  } else if (category === 'khuyen-mai') {
    pageTitle = "Khuyến mãi mới nhất";
  }

  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f5] pb-10">
      
      {/* 1. THANH ĐIỀU HƯỚNG (BREADCRUMB) CHẠY ĐỘNG */}
      <div className="w-full bg-white h-[50px] flex items-center justify-center border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-7xl px-4 flex items-center gap-2 text-[14px] text-gray-500">
          <span className="hover:text-orange-500 cursor-pointer transition">Trang chủ</span>
          <span>{'>'}</span>
          {/* In cái biến Tên Danh Mục ra đây */}
          <span className="font-bold text-orange-500 uppercase">{pageTitle}</span>
        </div>
      </div>

      {/* 2. KHUNG CHỨA NỘI DUNG CHÍNH (Chia 2 cột) */}
      <div className="w-full max-w-7xl px-4 mt-6 flex flex-col md:flex-row gap-6">
        
        {/* ================= CỘT TRÁI: BỘ LỌC (FILTER) ================= */}
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          
          {/* Lọc Theo Danh Mục */}
          <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 text-[16px] uppercase border-b-2 border-orange-500 pb-2 mb-4">
              Danh mục
            </h3>
            <ul className="flex flex-col gap-3 text-gray-600 text-[14px] font-medium">
              <li className="flex justify-between hover:text-orange-500 cursor-pointer transition">
                <span>Thức ăn hạt</span> <span>(24)</span>
              </li>
              <li className="flex justify-between hover:text-orange-500 cursor-pointer transition text-orange-500">
                <span>Pate & Xúp thưởng</span> <span>(12)</span>
              </li>
              <li className="flex justify-between hover:text-orange-500 cursor-pointer transition">
                <span>Phụ kiện - Đồ chơi</span> <span>(56)</span>
              </li>
              <li className="flex justify-between hover:text-orange-500 cursor-pointer transition">
                <span>Sữa tắm & Vệ sinh</span> <span>(18)</span>
              </li>
            </ul>
          </div>

          {/* Lọc Theo Thương Hiệu */}
          <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 text-[16px] uppercase border-b-2 border-orange-500 pb-2 mb-4">
              Thương hiệu
            </h3>
            <div className="flex flex-col gap-3 text-gray-600 text-[14px]">
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="checkbox" className="w-4 h-4 accent-orange-500" /> Royal Canin
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="checkbox" className="w-4 h-4 accent-orange-500" /> Whiskas
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="checkbox" className="w-4 h-4 accent-orange-500" /> Pedigree
              </label>
            </div>
          </div>

          {/* Lọc Theo Giá */}
          <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 text-[16px] uppercase border-b-2 border-orange-500 pb-2 mb-4">
              Mức Giá
            </h3>
            <div className="flex flex-col gap-3 text-gray-600 text-[14px]">
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="radio" name="price" className="w-4 h-4 accent-orange-500" /> Dưới 100.000đ
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="radio" name="price" className="w-4 h-4 accent-orange-500" /> 100.000đ - 300.000đ
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                <input type="radio" name="price" className="w-4 h-4 accent-orange-500" /> Trên 300.000đ
              </label>
            </div>
          </div>

        </div>

        {/* ================= CỘT PHẢI: LƯỚI SẢN PHẨM ================= */}
        <div className="w-full md:w-3/4 flex flex-col">
          
          {/* Thanh Sắp Xếp (Sorting) */}
          <div className="bg-white p-3 mb-6 rounded-md shadow-sm border border-gray-100 flex justify-between items-center">
            <span className="text-[14px] text-gray-600 font-medium">
              Hiển thị 1 - 6 của 24 sản phẩm
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-gray-600">Sắp xếp:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1.5 text-[14px] text-gray-700 outline-none focus:border-orange-500 cursor-pointer">
                <option value="default">Mới nhất</option>
                <option value="best-seller">Bán chạy nhất</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>

          {/* Lưới Sản Phẩm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Phân Trang (Pagination) */}
          <div className="w-full flex justify-center items-center gap-2 mt-10">
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
              {'<'}
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-md bg-orange-500 text-white font-bold shadow-md">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition font-medium">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition font-medium">
              3
            </button>
            <span className="text-gray-500">...</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
              {'>'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Products;