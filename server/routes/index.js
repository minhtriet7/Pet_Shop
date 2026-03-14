const productCategoryRouter = require('./productCategory.route');
const brandRouter = require('./brand.route');
const userRouter = require('./user.route');
const productRouter = require('./product.route');
const couponRouter = require('./coupon.route');
const orderRouter = require('./order.route');
const blogRouter = require('./blog.route');
const aiRouter = require('./ai.route');
const initRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);     
    app.use('/api/coupon', couponRouter);
    app.use('/api/order', orderRouter);
    
    // ĐÂY NÀY: Khai báo đường dẫn cho Danh mục sản phẩm
    app.use('/api/prodcategory', productCategoryRouter); 
    app.use('/api/brand', brandRouter);
    app.use('/api/blog', blogRouter);
    app.use('/api/ai', aiRouter);
    // SỬA Ở ĐÂY: Xóa bỏ chữ '*'
    app.use((req, res) => {
        res.status(404).json({
            success: false,
            mes: 'Không tìm thấy đường dẫn API này!'
        });
    });
};

module.exports = initRoutes;