// TODO:: add icons and child path
interface Items {
  title: string;
  path: string;
}
// eslint-disable-next-line import/prefer-default-export
export const SIDEBAR_ITEMS: Items[] = [
  {
    title: 'Dashboard',
    path: '/admin',
  },
  {
    title: 'Attributes',
    path: '/admin/attributes',
  },
  {
    title: 'Products',
    path: '/admin/products',
  },
  {
    title: 'Tenants',
    path: '/admin/tenants',
  },
  {
    title: 'Users',
    path: '/admin/users',
  },
];
