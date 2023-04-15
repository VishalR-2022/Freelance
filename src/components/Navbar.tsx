import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { MdArrowBack, MdLightMode, MdPerson } from 'react-icons/md';

import { SIDEBAR_ITEMS } from '@/layouts/admin/sidebar';

import AnimatedText from './animation/motionText';
import Search from './Search';

type NavbarProps = {
  path: { redirect: string; display: string }[];
  heading: string;
};
const Navbar = ({ path, heading }: NavbarProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="navbar fixed hidden bg-transparent p-6 md:flex lg:flex">
        <div className="flex-1">
          <div className="flex flex-col">
            {path.map((item) => {
              return (
                <Link
                  key={item.redirect}
                  className="cursor-pointer text-xl"
                  href={item.redirect}
                >
                  {item.display}
                </Link>
              );
            })}
            <AnimatedText
              tag="h3"
              className="text-3xl font-bold text-indigo-900"
              animate="fadeInRight"
            >
              {heading}
            </AnimatedText>
          </div>
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
                    router.push('/login');
                  }}
                >
                  Login as User
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    router.push('/login');
                  }}
                >
                  Login as Admin
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
        <button className="active">
          <div className="drawer-mobile drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <label
              htmlFor="my-drawer-1"
              className="mx-8 flex justify-center rounded-full bg-blue-600 p-4"
            >
              <IconContext.Provider
                value={{ className: 'text-white text-2xl' }}
              >
                <MdPerson />
              </IconContext.Provider>{' '}
            </label>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
                className="drawer-overlay opacity-100"
              ></label>
              <ul className="menu fixed inset-x-0 top-0 z-40 h-5/6 w-full transform-none overflow-y-auto bg-white p-4 text-base-content transition-transform">
                <li className="p-4 font-bold">Welcome to Tryyon! </li>
                <div className="divider m-0"></div>
                <li>
                  <a
                    onClick={() => {
                      router.push('/login');
                    }}
                  >
                    Login as User
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      router.push('/login');
                    }}
                  >
                    Login as Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                      {sidebar.title}
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
