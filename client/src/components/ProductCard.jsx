import React from "react";
import icons from "../utils/icons";

const { AiFillStar, FaCartPlus } = icons;

const ProductCard = ({ product }) => {
  return (
    <div className="w-full border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer group">
      {/* Ảnh sản phẩm (Zoom nhẹ khi hover) */}
      <div className="w-full h-[200px] overflow-hidden rounded-md mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-full flex flex-col gap-1">
        <h3
          className="text-lg font-semibold text-gray-800 line-clamp-1"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Đánh giá sao */}
        <div className="flex text-yellow-400 text-sm">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        {/* Giá và Nút thêm vào giỏ */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-500 font-bold text-lg">
            {product.price.toLocaleString()} VNĐ
          </span>
          <button
            className="bg-primary text-white p-2 rounded-full hover:bg-orange-600 transition"
            title="Thêm vào giỏ hàng"
          >
            <FaCartPlus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
