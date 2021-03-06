const authController = require('./controllers/auth');
const orderController = require('./controllers/order');
const userController = require('./controllers/user');

const authMiddleware = require('./middlewares/auth');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);

    app.get('/orders', authMiddleware.checkAuth, orderController.getOrders);
    app.get('/orders/:id', authMiddleware.checkAuth, orderController.getOrder);
    app.post('/orders', authMiddleware.checkAuth, orderController.addOrder);
    // app.get('/user_orders', authMiddleware.checkAuth, userController.getUsersWithOrders);

    app.get('/users', authMiddleware.checkAuth, userController.getAllUsers);
    app.get('/users/:id', authMiddleware.checkAuth, userController.getUser);
}