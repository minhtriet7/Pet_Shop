import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 2 dòng này cực kỳ quan trọng để sửa lỗi của bạn
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Đây chính là cái màng bọc Router mà lỗi nó đang đòi hỏi */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
