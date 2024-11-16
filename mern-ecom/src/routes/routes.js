import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import NotFound from '../pages/404/NotFound';
import { ProductTypePage } from '../pages/ProductTypePage/ProductTypePage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { ProductDetailPage } from '../pages/ProductDetailPage/ProductDetailPage';

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
        path: '/sign-in',
        page: SignInPage,
        showNav: true,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        showNav: true,
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        showNav: true,
    },
    {
        path: '/*',
        page: NotFound
    },
]
