import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'products',
    path: '/',
    icon: icon('ic_cart'),
    role: 'all',
  },
  {
    title: 'product-page',
    path: '/product-page',
    role: 'all',
  },
  {
    title: 'cart',
    path: '/path',
    role: ['user']
  },
  {
    title: 'products-stats',
    path: '/products-stats',
    icon: icon('ic_user'),
    role: ['admin'],
  },
  {
    title: 'orders-stats',
    path: '/orders-stats',
    icon: icon('ic_analytics'),
    role: ['admin'],
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
    role: 'all',
  },
];

export default navConfig;
