import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import NotFound from '../pages/404/NotFound';
import { ProductTypePage } from '../pages/ProductTypePage/ProductTypePage';

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
        path: '/type',
        page: ProductTypePage,
        showNav: true,
    },
    {
        path: '/*',
        page: NotFound
    },
]
