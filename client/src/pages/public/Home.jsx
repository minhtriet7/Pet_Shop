import React from "react";
import bannerMain from "../../assets/banner_main.png";
import ProductCard from "../../components/ProductCard";
import BestSeller from "../../components/BestSeller";
import DealDaily from '../../components/DealDaily';
import SubBanners from '../../components/SubBanners';
import FeaturedBlogs from '../../components/FeaturedBlogs';

// Mock data cũ của bạn
const mockProducts = [
  {
    id: 1,
    title: "Thức ăn hạt Royal Canin cho Poodle",
    price: 350000,
    image:
      "https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1",
  },
  {
    id: 2,
    title: "Balo vận chuyển phi hành gia",
    price: 220000,
    image:
      "https://down-vn.img.susercontent.com/file/c5b0451a44eefea570ab4856f6ba4334",
  },
  {
    id: 3,
    title: "Cát vệ sinh đậu nành cho mèo",
    price: 110000,
    image:
      "https://down-vn.img.susercontent.com/file/82302d7eb78263ff002f2323a63b061e",
  },
  {
    id: 4,
    title: "Sữa tắm SOS chuyên dụng",
    price: 150000,
    image:
      "https://down-vn.img.susercontent.com/file/260efb7941784dd57be66ebefc5d18d4",
  },
];

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f5]">
      
      {/* 1. THANH KHUYẾN MÃI */}
      <div className="w-full bg-[#FFD100] h-[40px] flex items-center justify-center text-[13px] font-medium text-gray-800">
        Giảm đến <span className="font-bold mx-1">50% OFF</span> cho thành viên Petcare.
        <button className="ml-2 bg-[#1a2b4c] text-white px-3 py-1 rounded-full text-[12px] hover:bg-gray-800 transition">
          Đăng ký ngay!
        </button>
      </div>

      {/* 2. BANNER CHÍNH */}
      <div className="w-full bg-white flex justify-center">
        <div className="w-full max-w-7xl h-auto">
          <img
            src={bannerMain}
            alt="Banner PetCare"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. CAM KẾT DỊCH VỤ */}
      <div className="w-full flex justify-center mt-6 mb-10">
        <div className="w-full max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white flex items-center gap-4 p-4 rounded-md shadow-sm border border-gray-100">
            <div className="text-[#2B52A1] text-4xl">🚚</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px]">Miễn phí</span>
              <span className="text-gray-600 font-medium text-[15px]">Vận chuyển</span>
            </div>
          </div>
          <div className="bg-white flex items-center gap-4 p-4 rounded-md shadow-sm border border-gray-100">
            <div className="text-[#2B52A1] text-4xl">🏅</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px]">Sản phẩm</span>
              <span className="text-gray-600 font-medium text-[15px]">Chính hãng</span>
            </div>
          </div>
          <div className="bg-white flex items-center gap-4 p-4 rounded-md shadow-sm border border-gray-100">
            <div className="text-[#2B52A1] text-4xl">💳</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px]">Thanh toán</span>
              <span className="text-gray-600 font-medium text-[15px]">Tiện lợi</span>
            </div>
          </div>
          <div className="bg-white flex items-center gap-4 p-4 rounded-md shadow-sm border border-gray-100">
            <div className="text-[#FFD100] text-4xl">🎧</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-[15px]">Hỗ trợ</span>
              <span className="text-gray-600 font-medium text-[15px]">Chuyên nghiệp</span>
            </div>
          </div>
        </div>
      </div>

      <DealDaily />
      <BestSeller />
      <SubBanners />

      {/* 4. MUA SẮM THEO GIỐNG THÚ CƯNG */}
      <div className="w-full max-w-7xl mb-10 px-4 bg-white p-6 rounded-md shadow-sm">
        <div className="flex justify-between items-center border-b-2 border-orange-500 pb-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">
            Mua sắm theo giống thú cưng
          </h2>
          <span className="text-gray-500 cursor-pointer hover:text-orange-500 transition">
            Xem tất cả {">"}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* 5. CẨM NANG THÚ CƯNG (BLOGS) */}
      <FeaturedBlogs />
      
    </div>
  );
};

export default Home;