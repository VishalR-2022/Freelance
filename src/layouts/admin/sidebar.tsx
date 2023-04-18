import {
  MdApartment,
  MdBarChart,
  MdHome,
  MdPerson,
  MdShoppingBag,
} from 'react-icons/md';

interface Items {
  icon: JSX.Element;
  title: string;
  path: string;
}
// eslint-disable-next-line import/prefer-default-export
export const SIDEBAR_ITEMS: Items[] = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <MdHome />,
  },
  {
    title: 'Attributes',
    path: '/admin/attributes',
    icon: <MdBarChart />,
  },
  {
    title: 'Products',
    path: '/admin/products',
    icon: <MdShoppingBag />,
  },
  {
    title: 'Tenants',
    path: '/admin/tenants',
    icon: <MdApartment />,
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <MdPerson />,
  },
];
