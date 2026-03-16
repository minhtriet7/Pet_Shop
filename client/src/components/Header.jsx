import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import path from '../utils/path';
import icons from '../utils/icons';
import { navigation } from '../utils/constants';

const { FaDog, FiHeart, FiUser, FiShoppingCart, FiSearch, FaChevronDown } = icons;

const Header = () => {
  const navigate = useNavigate();
  // Quản lý trạng thái bằng State để Header tự động render lại
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  // Lắng nghe sự kiện đăng nhập từ Login.jsx
  useEffect(() => {
    const handleAuthChange = () => {
      setUserRole(localStorage.getItem('userRole'));
      setUserName(localStorage.getItem('userName'));
    };
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  // Hàm xử lý Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    window.dispatchEvent(new Event('auth-change'));
    navigate('/'); // Đá về trang chủ mượt mà
  };

  return (
    <div className="w-full flex flex-col sticky top-0 z-50 shadow-md">
      
      {/* ================= TOP BAR: THANH ĐEN ĐĂNG NHẬP / QUẢN TRỊ ================= */}
      <div className="w-full bg-orange-600 text-white h-[36px] flex justify-center items-center text-[13px] font-medium">
        <div className="w-full max-w-7xl px-4 flex justify-between items-center">
          <span>Hotline hỗ trợ: 0932.867.567</span>
          
          <div className="flex items-center gap-4">
            {userRole ? (
              <div className="flex items-center gap-4">
                <span>Xin chào, <b className="text-white text-[14px]">{userName}</b></span>
                
                {userRole === 'admin' && (
                  <Link to="/admin/dashboard" className="bg-white text-orange-600 px-3 py-1 rounded-sm hover:bg-gray-100 transition shadow-sm font-bold">
                    Vào Admin Panel
                  </Link>
                )}

                <button onClick={handleLogout} className="border-l border-orange-300 pl-4 hover:text-gray-200 transition uppercase font-bold text-xs">
                  Đăng xuất
                </button>
              </div>
            ) : (
              <Link to={`/${path.LOGIN}`} className="hover:text-gray-200 transition">
                Đăng ký / Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ================= DÒNG 1: LOGO, TÌM KIẾM, CHỨC NĂNG ================= */}
      <div className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
          
          <Link to={path.HOME} className="flex items-center gap-2 text-orange-500 font-bold text-4xl">
            <FaDog size={40} />
            <span>PetCare</span>
          </Link>

          <div className="flex-1 mx-12 relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm, thương hiệu..." 
              className="w-full bg-gray-100 text-gray-700 h-[44px] px-5 rounded-full outline-none border border-transparent focus:border-orange-400 transition-colors"
            />
            <button className="absolute right-0 top-0 h-full w-[60px] flex items-center justify-center text-gray-500 hover:text-orange-500 rounded-r-full transition">
              <FiSearch size={22} />
            </button>
          </div>

          <div className="flex items-center gap-8 text-gray-600">
            <div className="flex flex-col justify-center">
              <span className="text-[13px] text-gray-500">Hotline</span>
              <span className="font-bold text-[15px] text-orange-500">0932867567</span>
            </div>

            <Link to={`/${path.WISHLIST}`} className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
              <FiHeart size={24} strokeWidth={2} />
              <span className="text-[13px] font-medium">Wishlist</span>
            </Link>

            {userRole ? (
              <Link to="/member/personal" className="flex flex-col items-center gap-1 text-orange-500 hover:text-orange-600 transition">
                <FiUser size={24} strokeWidth={2} />
                <span className="text-[13px] font-medium">Tài khoản</span>
              </Link>
            ) : (
              <Link to={`/${path.LOGIN}`} className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
                <FiUser size={24} strokeWidth={2} />
                <span className="text-[13px] font-medium">Đăng nhập</span>
              </Link>
            )}

            <Link to={`/${path.MY_CART}`} className="flex flex-col items-center gap-1 hover:text-orange-500 transition relative">
              <FiShoppingCart size={24} strokeWidth={2} />
              <span className="text-[13px] font-medium">Giỏ hàng</span>
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white font-bold text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-sm">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= DÒNG 2: THANH MENU ================= */}
      <nav className="w-full bg-orange-400 h-[50px] flex items-center justify-center relative">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
          {navigation.map(el => (
            <div key={el.id} className={`h-full flex items-center group cursor-pointer ${el.type === 'dropdown' ? 'relative' : ''}`}>
              <NavLink
                to={el.path}
                className={({ isActive }) => 
                  `text-white font-bold text-[15px] transition-colors duration-300 h-full flex items-center relative ` +
                  `after:content-[''] after:absolute after:bottom-[10px] after:left-0 after:w-full after:h-[2px] after:bg-white ` +
                  `after:transition-transform after:duration-300 after:origin-left ` +
                  `${isActive ? 'after:scale-x-100' : 'after:scale-x-0 group-hover:after:scale-x-100'}`
                }
              >
                {el.value}
              </NavLink>

              {el.subMenu && el.type === 'mega' && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl hidden group-hover:block z-50 border-t border-gray-200 cursor-default animate-fade-in">
                  <div className="w-full max-w-7xl mx-auto px-4 py-8">
                    <div className="columns-1 md:columns-4 gap-10">
                      {el.subMenu.map((category, index) => (
                        <div key={index} className="break-inside-avoid mb-8">
                          <h3 className="text-orange-500 font-bold text-[16px] mb-3 uppercase">{category.title}</h3>
                          <ul className="flex flex-col gap-3">
                            {category.items.map((item, idx) => (
                              <li key={idx}>
                                <Link to="#" className="text-gray-600 hover:text-orange-500 text-[15px] font-medium transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {el.subMenu && el.type === 'dropdown' && (
                <div className="absolute top-full left-0 bg-white shadow-lg hidden group-hover:block z-50 border border-gray-200 min-w-[220px] animate-fade-in">
                  <ul className="flex flex-col">
                    {el.subMenu[0].items.map((item, idx) => (
                      <li key={idx} className="border-b border-gray-100 last:border-none">
                        <Link to="#" className="block px-4 py-3 text-gray-700 hover:text-orange-500 text-[15px] transition-colors">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="h-full flex items-center group cursor-pointer relative">
            <div className="text-white text-[14px] font-bold flex items-center gap-1 hover:text-orange-100 transition-colors">
              VI / USD <FaChevronDown size={11} />
            </div>
            <div className="absolute top-full right-0 bg-white shadow-lg hidden group-hover:block z-50 border border-gray-200 min-w-[100px] animate-fade-in p-3">
              <div className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition cursor-pointer">
                <img src="https://flagcdn.com/w40/us.png" alt="USD Flag" className="w-5 h-5 rounded-full object-cover border border-gray-300" />
                <span className="text-[14px] font-medium border-b border-gray-800 hover:border-orange-500 pb-[1px]">USD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;