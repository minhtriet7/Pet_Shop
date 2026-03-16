import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import path from "./utils/path";

// === Import Layout ===
import PublicLayout from "./pages/public/PublicLayout";
import MemberLayout from "./pages/public/MemberLayout"; 
import AdminLayout from "./pages/admin/AdminLayout"; 

// === Import Trang Public & Member ===
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import ProductDetail from "./pages/public/ProductDetail";
import Login from "./pages/public/Login";
import Cart from "./pages/public/Cart";
import Checkout from "./pages/public/Checkout";
import Personal from "./pages/public/Personal"; 
import Wishlist from "./pages/public/Wishlist";
import News from "./pages/public/News"; 
import Petcare from "./pages/public/Petcare"; // <-- Đã thêm Petcare

// === Import Trang Admin ===
import Dashboard from "./pages/admin/Dashboard";
import ManageOrders from "./pages/admin/ManageOrders"; 
import ManageServices from "./pages/admin/ManageServices";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageBlogs from "./pages/admin/ManageBlogs";
import ManageCoupons from "./pages/admin/ManageCoupons";
import ManageProducts from "./pages/admin/ManageProducts"; // <-- Đã thêm Kho Sản Phẩm
import History from "./pages/public/History";
// ==============================================================
// COMPONENT BẢO VỆ ĐƯỜNG DẪN ADMIN
// ==============================================================
const ProtectedAdminRoute = ({ children }) => {
  const role = localStorage.getItem('userRole'); 
  if (role !== 'admin') {
    alert("Cảnh báo: Bạn không có quyền truy cập vào khu vực Quản trị!");
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Routes>
        
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path={path.PUBLIC} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ALL_PRODUCTS} element={<Products />} /> 
          <Route path={`${path.ALL_PRODUCTS}/:category`} element={<Products />} /> 
          <Route path={path.DETAIL_PRODUCT__CATEGORY__PID__TITLE} element={<ProductDetail />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_CART} element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          
          {/* CÁC TRANG CÔNG KHAI KHÁC */}
          <Route path="news" element={<News />} /> 
          <Route path="petcare" element={<Petcare />} /> 
        </Route>

        {/* ================= MEMBER ROUTES ================= */}
        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />} />
          <Route path="history" element={<History />} />
          <Route path="wishlist" element={<Wishlist />} /> 
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route 
          path="admin" 
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-services" element={<ManageServices />} />
          <Route path="manage-products" element={<ManageProducts />} /> 
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-blogs" element={<ManageBlogs />} />
          <Route path="manage-coupons" element={<ManageCoupons />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;