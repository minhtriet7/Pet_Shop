const path = {
    // PUBLIC ROUTES (Ai cũng vào được)
    PUBLIC: '/',
    HOME: '',
    ALL_PRODUCTS: 'products',
    SERVICES: 'services',
    DETAIL_PRODUCT__CATEGORY__PID__TITLE: 'san-pham/:category/:pid/:title',
    FAQ: 'faq',
    LOGIN: 'login',
    FINAL_REGISTER: 'finalregister/:status',
    RESET_PASSWORD: 'reset-password/:token',

    // ADMIN ROUTES (Chỉ Admin)
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    MANAGE_USERS: 'manage-users',
    MANAGE_PRODUCTS: 'manage-products',
    MANAGE_ORDERS: 'manage-orders',
    CREATE_PRODUCT: 'create-product',
    
    // MEMBER ROUTES (Khách hàng đã đăng nhập)
    MEMBER: 'member',
    PERSONAL: 'personal',
    MY_CART: 'my-cart',
    HISTORY: 'history',
    WISHLIST: 'wishlist',
};

export default path;