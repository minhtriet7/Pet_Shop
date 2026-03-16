import path from "./path";

export const navigation = [
  {
    id: 1,
    value: "Chó",
    path: `/${path.ALL_PRODUCTS}/cho`,
    type: "mega",
    subMenu: [
      {
        title: "Thức Ăn Cho Chó",
        items: [
          "Thức Ăn Hạt",
          "Thức Ăn Ướt",
          "Thức Ăn Hỗ Trợ Điều Trị Bệnh",
          "Thức Ăn Hữu Cơ",
          "Thức Ăn Không Ngũ Cốc",
        ],
      },
      {
        title: "Chăm Sóc Vệ Sinh Cún",
        items: [
          "Vệ Sinh Răng Miệng",
          "Vệ Sinh Tai - Mắt",
          "Sữa Tắm & Phụ Kiện Tắm",
          "Xịt Khử Mùi",
        ],
      },
      {
        title: "Bánh Thưởng",
        items: [
          "Bánh Thưởng Mềm",
          "Xương Gặm Sạch Răng",
          "Súp Thưởng",
          "Bánh Quy",
          "Thịt Sấy Khô",
        ],
      },
      {
        title: "Phụ Kiện",
        items: [
          "Vòng Cổ & Dây Dắt",
          "Quần Áo & Nón Mũ",
          "Dụng Cụ Ăn Uống",
          "Nệm - Chuồng Cho Cún",
          "Tả Lót & Khay Vệ Sinh",
        ],
      },
      {
        title: "Chăm Sóc Sức Khoẻ Cún",
        items: [
          "Vitamin Cho Chó",
          "Trị Ve Rận & Xổ Giun",
          "Thực Phẩm Chức Năng",
        ],
      },
      {
        title: "Đồ Chơi",
        items: ["Xương Gặm", "Nhồi Bông", "Huấn Luyện & Tương Tác"],
      },
      {
        title: "Vận Chuyển",
        items: ["Balo & Túi Vận Chuyển", "Lồng Vận Chuyển"],
      },
    ],
  },
  {
    id: 2,
    value: "Mèo",
    path: `/${path.ALL_PRODUCTS}/meo`,
    type: "mega",
    subMenu: [
      {
        title: "Thức Ăn Cho Mèo",
        items: [
          "Thức Ăn Hạt",
          "Thức Ăn Ướt",
          "Thức Ăn Điều Trị Bệnh",
          "Bánh Thưởng Mèo",
        ],
      },
      {
        title: "Phụ Kiện - Đồ Chơi",
        items: ["Đồ Chơi", "Thời Trang - Quần Áo", "Vòng Cổ - Dây Dắt"],
      },
      {
        title: "Vận Chuyển - Chuồng",
        items: ["Chuồng - Nhà Nệm", "Vận Chuyển"],
      },
      {
        title: "Chăm Sóc Sức Khỏe",
        items: ["Sữa & Bình Bú Cho Mèo", "Vitamin & Thực Phẩm Bổ Sung"],
      },
      {
        title: "Vệ Sinh",
        items: ["Cát Mèo", "Chăm Sóc Răng Miệng", "Sữa Tắm", "Xịt Khử Mùi"],
      },
    ],
  },
  {
    id: 3,
    value: "Thiết bị thông minh",
    path: `/${path.ALL_PRODUCTS}/thiet-bi-thong-minh`,
    type: "dropdown",
    subMenu: [
      {
        items: [
          "Máy Ăn Uống Tự Động",
          "Nhà Vệ Sinh Tự Động",
          "Đồ Chơi Tương Tác",
        ],
      },
    ],
  },
  { id: 4, value: "Hàng mới về", path: `/${path.ALL_PRODUCTS}/hang-moi-ve` },
  { id: 5, value: "Thương hiệu", path: `/${path.ALL_PRODUCTS}/thuong-hieu` },
 { id: 6, value: "Petcare", path: `/petcare` },
  { id: 7, value: "News", path: `/news` },

  {
    id: 8,
    value: "Khuyến Mãi Mới Nhất",
    path: `/${path.ALL_PRODUCTS}/khuyen-mai`,
  },
];
