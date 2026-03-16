import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State ẩn/hiện mật khẩu

  const [payload, setPayload] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (isRegister && !payload.name.trim()) newErrors.name = "Vui lòng nhập họ và tên.";
    if (isRegister && !payload.mobile.trim()) newErrors.mobile = "Vui lòng nhập số điện thoại.";
    if (isRegister && !/^\d{10}$/.test(payload.mobile.trim())) newErrors.mobile = "Số điện thoại phải có 10 chữ số.";

    if (!payload.email) newErrors.email = "Vui lòng nhập email.";
    else if (!/\S+@\S+\.\S+/.test(payload.email)) newErrors.email = "Email không hợp lệ.";

    if (!payload.password) newErrors.password = "Vui lòng nhập mật khẩu.";
    else if (payload.password.length < 6) newErrors.password = "Mật khẩu phải từ 6 ký tự.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const endpoint = isRegister ? "register" : "login";
        let dataToSend = { ...payload };

        if (isRegister) {
          const nameParts = payload.name.trim().split(" ");
          dataToSend.lastname = nameParts[0]; 
          dataToSend.firstname = nameParts.slice(1).join(" ") || nameParts[0];
          // Xóa trường name cũ để tránh lỗi cấu trúc backend nếu có check nghiêm ngặt
          delete dataToSend.name; 
        }

        const response = await axios.post(
          `http://localhost:5000/api/user/${endpoint}`,
          dataToSend
        );

        if (response.data.success) {
          if (isRegister) {
            alert("Đăng ký thành công! Vui lòng đăng nhập.");
            setIsRegister(false);
            setPayload({ email: "", password: "", name: "", mobile: "" }); // Reset form
          } else {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("userRole", response.data.userData.role);
            localStorage.setItem("userName", response.data.userData.firstname);

            window.dispatchEvent(new Event("auth-change"));
            navigate("/");
          }
        }
      } catch (error) {
        alert(error.response?.data?.mes || "Có lỗi xảy ra!");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex overflow-hidden min-h-[600px]">
        {/* Cột trái: Ảnh minh họa */}
        <div className="hidden md:block w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-4xl font-extrabold text-white mb-2">PetCare.</h2>
            <p className="text-gray-200 text-lg">Hệ sinh thái chăm sóc thú cưng toàn diện.</p>
          </div>
        </div>

        {/* Cột phải: Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <Link to="/" className="text-sm text-gray-500 hover:text-orange-500 mb-8 inline-block">← Quay lại trang chủ</Link>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            {isRegister ? "Tạo tài khoản" : "Đăng nhập"}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isRegister && (
              <>
                <input type="text" name="name" value={payload.name} onChange={handleChange} placeholder="Họ và Tên"
                  className={`w-full px-5 py-3 bg-gray-50 border rounded-lg outline-none ${errors.name ? "border-red-500" : "border-gray-200"}`} />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}

                <input type="text" name="mobile" value={payload.mobile} onChange={handleChange} placeholder="Số điện thoại"
                  className={`w-full px-5 py-3 bg-gray-50 border rounded-lg outline-none ${errors.mobile ? "border-red-500" : "border-gray-200"}`} />
                {errors.mobile && <span className="text-xs text-red-500">{errors.mobile}</span>}
              </>
            )}

            <input type="text" name="email" value={payload.email} onChange={handleChange} placeholder="Email"
              className={`w-full px-5 py-3 bg-gray-50 border rounded-lg outline-none ${errors.email ? "border-red-500" : "border-gray-200"}`} />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}

            {/* Ô MẬT KHẨU CÓ NÚT XEM */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={payload.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                className={`w-full px-5 py-3 bg-gray-50 border rounded-lg outline-none transition ${errors.password ? "border-red-500" : "border-gray-200 focus:border-orange-500"}`}
              />
              <span 
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-orange-500 transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
              </span>
            </div>
            {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}

            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg mt-2 hover:bg-orange-600 transition shadow-lg uppercase">
              {isRegister ? "Đăng Ký" : "Đăng Nhập"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            {isRegister ? (
              <p>Đã có tài khoản? <b onClick={() => setIsRegister(false)} className="text-orange-500 cursor-pointer">Đăng nhập</b></p>
            ) : (
              <p>Chưa có tài khoản? <b onClick={() => setIsRegister(true)} className="text-orange-500 cursor-pointer">Đăng ký ngay</b></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;