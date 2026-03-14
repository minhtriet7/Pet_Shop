import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import PublicLayout from "./pages/public/PublicLayout";
import Home from "./pages/public/Home";
import Products from "./pages/public/Products";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Routes>
        {/* PUBLIC ROUTES (Layout có Header & Footer) */}
        <Route path={path.PUBLIC} element={<PublicLayout />}>
          
          {/* Mặc định vào Web là ra trang Chủ */}
          <Route path={path.HOME} element={<Home />} />
          
          {/* Bấm vào "Xem tất cả" -> Ra trang /products */}
          <Route path={path.ALL_PRODUCTS} element={<Products />} /> 

          {/* Bấm vào "Dành cho Chó/Mèo" -> Ra trang /products/cho hoặc /products/meo */}
          <Route path={`${path.ALL_PRODUCTS}/:category`} element={<Products />} /> 
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;