import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import NotFound from '../pages/404/NotFound';

export const routes = [
    {
        path: '/',
        page: HomePage,
        showNav: true,
    },
    {
        path: '/order',
        page: OrderPage,
        showNav: true,
    },
    {
        path: '/product',
        page: ProductPage,
        showNav: true,
    },
    {
        path: '/*',
        page: NotFound
    },
]
