import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { MdArrowBack, MdLightMode, MdPerson } from 'react-icons/md';

import AnimatedText from '@/components/animation/motionText';
import Search from '@/components/Search';
import type { IBreadcrumb } from '@/layouts/admin';
import { SIDEBAR_ITEMS } from '@/layouts/admin/sidebar';

type NavbarProps = {
  path?: IBreadcrumb[];
  heading?: string;
};
const Navbar = ({ path, heading }: NavbarProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="navbar sticky top-0 mt-4 flex justify-between bg-base-100 p-6">
        <div className="flex flex-col items-start justify-start">
          <div className="breadcrumbs text-sm">
            <ul>
              {path &&
                path.length > 0 &&
                path.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        className="cursor-pointer text-xl"
                        href={`${item.href}`}
                      >
                        <AnimatedText tag="h6" animate="fadeInRight">
                          {item.label}{' '}
                        </AnimatedText>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <AnimatedText
            tag="h2"
            className="text-3xl font-bold text-indigo-900"
            animate="fadeInRight"
          >
            {heading}
          </AnimatedText>
        </div>
        <div className="flex rounded-full bg-white px-2 py-1.5 text-gray-600 ">
          <Search />
          <div className="mx-2 flex rounded-full bg-base-100 p-3">
            <IconContext.Provider
              value={{ className: 'text-gray-700 text-2xl' }}
            >
              <MdLightMode />
            </IconContext.Provider>
          </div>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="flex rounded-full bg-blue-600 p-3">
              <IconContext.Provider
                value={{ className: 'text-white text-2xl' }}
              >
                <MdPerson />
              </IconContext.Provider>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <li className="p-4 font-bold">Welcome to Tryyon! </li>
              <div className="divider m-0"></div>
              <li>
                <a
                  onClick={() => {
                    router.push('/logout');
                  }}
                >
                  Logout as Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btm-nav fixed bottom-0 md:hidden lg:hidden">
        <button>
          <label tabIndex={0} className="flex">
            <IconContext.Provider value={{ className: 'text-black text-2xl' }}>
              <MdArrowBack />
            </IconContext.Provider>
          </label>
        </button>
        <button
          className="active"
          onClick={() => {
            router.push('/logout');
          }}
        >
          <IconContext.Provider value={{ className: 'text-white text-2xl' }}>
            <MdPerson />
          </IconContext.Provider>{' '}
        </button>
        <button>
          <div className="drawer-mobile drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="flex justify-center">
              <Hamburger />
            </label>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                className="drawer-overlay opacity-0"
              ></label>
              <ul className="menu fixed inset-x-0 top-0 z-40 h-5/6 w-full transform-none overflow-y-auto bg-white p-4 text-base-content transition-transform">
                {SIDEBAR_ITEMS.map((sidebar) => (
                  <li key={sidebar.title}>
                    <a
                      onClick={() => {
                        router.push(sidebar.path);
                      }}
                    >
                      <AnimatedText tag="h4" animate="fadeInRight">
                        {sidebar.title}
                      </AnimatedText>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
