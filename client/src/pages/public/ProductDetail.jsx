import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  // Lấy thông tin từ đường link (để sau này gọi API)
  const { category } = useParams();

  // State quản lý số lượng mua
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    if (type === "plus") setQuantity((prev) => prev + 1);
  };

  // Dữ liệu mẫu giả lập của 1 sản phẩm
  const mockProduct = {
    title: "Thức ăn hạt Royal Canin cho chó Poodle trưởng thành (Túi 1.5kg)",
    price: 350000,
    oldPrice: 450000,
    sold: 125,
    inventory: 50,
    images: [
      "https://down-vn.img.susercontent.com/file/a012ff175d79679f1ecac7cc9a8a72b1",
      "https://down-vn.img.susercontent.com/file/c5b0451a44eefea570ab4856f6ba4334", // Giả sử có nhiều ảnh
    ],
    description:
      "Royal Canin Poodle Adult là thức ăn khô dành riêng cho chó Poodle trên 10 tháng tuổi. Giúp duy trì sức khỏe bộ lông, hỗ trợ tiêu hóa và giảm thiểu mảng bám răng.",
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#f5f5f5] pb-10">
      {/* 1. THANH BREADCRUMB */}
      <div className="w-full bg-white h-[50px] flex items-center justify-center border-b border-gray-200">
        <div className="w-full max-w-7xl px-4 flex items-center gap-2 text-[14px] text-gray-500">
          <Link to="/" className="hover:text-orange-500 transition">
            Trang chủ
          </Link>
          <span>{">"}</span>
          <span className="uppercase hover:text-orange-500 transition cursor-pointer">
            {category || "Danh mục"}
          </span>
          <span>{">"}</span>
          <span className="font-bold text-gray-800 truncate w-[200px] sm:w-auto">
            {mockProduct.title}
          </span>
        </div>
      </div>

      {/* 2. THÔNG TIN CHÍNH CỦA SẢN PHẨM */}
      <div className="w-full max-w-7xl px-4 mt-6">
        <div className="bg-white p-6 rounded-md shadow-sm flex flex-col md:flex-row gap-10">
          {/* CỘT TRÁI: THƯ VIỆN ẢNH */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="w-full h-[400px] border border-gray-200 rounded-md overflow-hidden flex items-center justify-center p-4">
              <img
                src={mockProduct.images[0]}
                alt="product"
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500 cursor-crosshair"
              />
            </div>
            {/* Ảnh nhỏ (Thumbnails) */}
            <div className="flex gap-4">
              {mockProduct.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-[80px] h-[80px] border-2 border-orange-500 rounded-md p-1 cursor-pointer"
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: CHI TIẾT & ĐẶT HÀNG */}
          <div className="w-full md:w-3/5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
              {mockProduct.title}
            </h1>

            {/* Đánh giá & Đã bán */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <span className="text-gray-400 border-l border-gray-300 pl-4">
                Đã bán {mockProduct.sold}
              </span>
            </div>

            {/* Giá tiền */}
            <div className="bg-gray-50 p-4 rounded-md flex items-end gap-4 mt-2">
              <span className="text-3xl font-extrabold text-orange-500">
                {mockProduct.price.toLocaleString()}đ
              </span>
              <span className="text-lg text-gray-400 line-through pb-1">
                {mockProduct.oldPrice.toLocaleString()}đ
              </span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm pb-1 mb-1">
                -22%
              </span>
            </div>

            {/* Thông tin ngắn */}
            <ul className="text-gray-600 text-sm flex flex-col gap-2 mt-4 list-disc pl-5">
              <li>Cam kết 100% hàng chính hãng.</li>
              <li>Miễn phí vận chuyển cho đơn hàng trên 500k.</li>
              <li>Đổi trả trong vòng 7 ngày nếu lỗi từ nhà sản xuất.</li>
            </ul>

            {/* Bộ đếm số lượng */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-gray-700 font-medium">Số lượng:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => handleQuantity("minus")}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 h-10 text-center border-x border-gray-300 outline-none text-gray-700 font-medium"
                />
                <button
                  onClick={() => handleQuantity("plus")}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
              <span className="text-gray-500 text-sm ml-2">
                {mockProduct.inventory} sản phẩm có sẵn
              </span>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-4 mt-6">
              <button className="flex-1 border-2 border-orange-500 text-orange-500 bg-orange-50 hover:bg-orange-500 hover:text-white transition font-bold py-3 rounded-md shadow-sm">
                THÊM VÀO GIỎ HÀNG
              </button>
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white transition font-bold py-3 rounded-md shadow-sm">
                MUA NGAY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MÔ TẢ & ĐÁNH GIÁ (Tabs) */}
      <div className="w-full max-w-7xl px-4 mt-6">
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            <div
              onClick={() => setActiveTab("description")}
              className={`px-8 py-4 font-bold cursor-pointer transition ${activeTab === "description" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              MÔ TẢ SẢN PHẨM
            </div>
            <div
              onClick={() => setActiveTab("reviews")}
              className={`px-8 py-4 font-bold cursor-pointer transition ${activeTab === "reviews" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              ĐÁNH GIÁ (15)
            </div>
          </div>

          <div className="p-6 text-gray-700 leading-relaxed text-[15px]">
            {activeTab === "description" && (
              <div>
                <p>{mockProduct.description}</p>
                <p className="mt-4">
                  Sản phẩm được đóng gói kỹ lưỡng, đảm bảo giữ nguyên hương vị
                  và độ giòn của hạt. Rất phù hợp cho các bé Poodle kén ăn.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="flex flex-col gap-4">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex gap-2 text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                  <p className="font-bold text-sm mt-1">
                    Trần Hữu Kiên{" "}
                    <span className="text-gray-400 font-normal ml-2">
                      20/10/2026
                    </span>
                  </p>
                  <p className="mt-2 text-gray-600">
                    Giao hàng cực nhanh, cún nhà mình rất thích ăn loại này. Sẽ
                    ủng hộ shop dài dài!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
