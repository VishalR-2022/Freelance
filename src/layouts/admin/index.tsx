/* eslint-disable import/no-named-as-default */
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { IconContext } from 'react-icons';

import AnimatedText from '@/components/animation/motionText';
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
  const [isActive, setIsActive] = useState(router.pathname);

  return (
    <Main
      meta={
        <Meta
          title={`Admin-${props.heading}`}
          description="Tryyon Admin page"
        />
      }
    >
      <div className="drawer-mobile drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex h-screen flex-col">
          <Navbar path={props.breadcrumbs} heading={props.heading} />
          <div>{props.children}</div>
          <label
            htmlFor="my-drawer-3"
            className="btn-primary drawer-button btn hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side w-72">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu bg-white p-4 text-base-content">
            {SIDEBAR_ITEMS.map((sidebar) => (
              <li
                key={sidebar.title}
                className={`${
                  isActive === sidebar.path ? 'bg-base-200' : ''
                } rounded-lg`}
              >
                <Link
                  className={`${
                    isActive === sidebar.path ? 'text-accent' : 'text-neutral'
                  } cursor-pointer text-xl font-medium active:text-neutral`}
                  href={sidebar.path}
                  onClick={() => {
                    setIsActive(sidebar.path);
                  }}
                >
                  <IconContext.Provider
                    value={{
                      className: `${
                        isActive === sidebar.path
                          ? 'text-accent'
                          : 'text-neutral'
                      } text-md active:text-neutral`,
                    }}
                  >
                    {sidebar.icon}
                  </IconContext.Provider>
                  <AnimatedText tag="h6" animate="fadeInRight">
                    {sidebar.title}
                  </AnimatedText>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default AdminDashboardLayout;
