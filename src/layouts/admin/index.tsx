/* eslint-disable import/no-named-as-default */
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Navbar from './navbar';
import { SIDEBAR_ITEMS } from './sidebar';

export interface IBreadcrumb {
  id: number;
  label: string;
  href?: string;
  onClick?: () => void;
}

export type AdminDashboardLayoutProps = {
  children?: ReactNode;
  breadcrumbs?: IBreadcrumb[];
  heading?: string;
};

const AdminDashboardLayout = (props: AdminDashboardLayoutProps) => {
  const router = useRouter();
  return (
    <Main meta={<Meta title="Home-Admin" description="Tryyon Admin page" />}>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex h-screen flex-col">
          <Navbar path={props.breadcrumbs} heading={props.heading} />
          <div>{props.children}</div>
          <label
            htmlFor="my-drawer-2"
            className="btn-primary drawer-button btn lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side w-72">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-white p-4 text-base-content">
            {SIDEBAR_ITEMS.map((sidebar) => (
              <li key={sidebar.title}>
                <a
                  onClick={() => {
                    router.push(sidebar.path);
                  }}
                >
                  {sidebar.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default AdminDashboardLayout;
