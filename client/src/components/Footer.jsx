import React from "react";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import logoBCT from '../assets/logo_bct.png'; // Import ảnh từ máy
const { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, MdEmail } = icons;

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col items-center mt-auto border-t border-gray-200">
      {/* ================= PHẦN 1: ĐĂNG KÝ NHẬN TIN ================= */}
      <div className="w-full flex flex-col items-center justify-center py-10 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Thành viên Petcare
        </h2>
        <p className="text-gray-600 mb-6 text-center text-[15px]">
          Đăng ký thành viên ngay hôm nay để nhận email về sản phẩm mới và
          chương trình khuyến mãi của Petcare
        </p>
        <div className="flex w-full max-w-lg h-[44px]">
          <input
            type="email"
            placeholder="Email của bạn..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-orange-500 text-[15px]"
          />
          <button className="px-8 bg-orange-500 text-white font-bold rounded-r-md hover:bg-orange-600 transition-colors text-[15px]">
            Đăng Ký
          </button>
        </div>
      </div>

      {/* ================= PHẦN 2: LIÊN KẾT & THÔNG TIN (4 Cột) ================= */}
      <div className="w-full bg-[#F8F9FA] py-12 flex justify-center">
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cột 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 text-[16px]">Shop</h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-600">
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Dành Cho Chó
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Dành Cho Mèo
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Thương Hiệu
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Bộ Sưu Tập
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 text-[16px]">
              Petcare Pet Shop
            </h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-600">
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Thành Viên Petcare
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Điều Khoản Sử Dụng
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 text-[16px]">
              Hỗ Trợ Khách Hàng
            </h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-600">
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Chính Sách Đổi Trả Hàng
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Phương Thức Vận Chuyển
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Chính Sách Bảo Mật
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Phương Thức Thanh Toán
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 transition">
                  Chính Sách Hoàn Tiền
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ (Với Data của bạn) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800 text-[16px]">Liên Hệ</h3>
            <div className="text-[14px] text-gray-600 flex flex-col gap-2 leading-relaxed">
              <p className="uppercase font-semibold">
                CÔNG TY CỔ PHẦN THƯƠNG MẠI & DỊCH VỤ PETCARE
              </p>
              <p>
                Giấy Chứng Nhận Kinh Doanh Số : 0932867567 do Sở KH&DT TP Cần
                Thơ Cấp ngày 26/08/2026
              </p>
              <p>
                Địa Chỉ: Đại học Nam Cần Thơ, TP. Cần
                Thơ, Việt Nam
              </p>
            </div>

            {/* Hotline & Email */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <FaPhoneAlt size={16} className="text-gray-800" />
                <span>
                  Hotline: <span className="text-orange-500">0932 867 567</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <MdEmail size={18} className="text-gray-800" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:contact@petcare.vn"
                    className="hover:text-orange-500 transition"
                  >
                    contact@petcare.vn
                  </a>
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-3">
              <Link
                to="#"
                className="w-[36px] h-[36px] bg-[#1a2b4c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 transition"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                to="#"
                className="w-[36px] h-[36px] bg-[#1a2b4c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 transition"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                to="#"
                className="w-[36px] h-[36px] bg-[#1a2b4c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 transition"
              >
                <FaTiktok size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PHẦN 3: BẢN QUYỀN & LOGO BCT ================= */}
      <div className="w-full bg-white flex justify-center py-6 border-t border-gray-200">
        <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[14px] text-gray-500">
            @2026 Petcare VN. All Rights Reserved. Đồ án Web Thú Cưng.
          </p>
          <img 
            src={logoBCT} // Dùng biến vừa import
            alt="Đã thông báo bộ công thương" 
            className="w-[150px] object-contain mt-4 md:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
