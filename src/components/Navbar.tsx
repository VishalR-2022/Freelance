import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { MdArrowBack, MdLightMode, MdPerson } from 'react-icons/md';

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
              className="text-3xl font-bold text-accent"
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
            <label tabIndex={0} className="flex rounded-full bg-primary p-3">
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
                    router.push('/login/user');
                  }}
                >
                  Login as User
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    router.push('/login/admin');
                  }}
                >
                  Login as Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btm-nav fixed bottom-0 z-50 md:hidden lg:hidden">
        <button onClick={() => router.back()}>
          <label tabIndex={0} className="z-50 flex">
            <IconContext.Provider value={{ className: 'text-black text-2xl' }}>
              <MdArrowBack />
            </IconContext.Provider>
          </label>
        </button>
        <button>
          <div className="drawer-mobile drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <label
              htmlFor="my-drawer-1"
              className="z-50 mx-12 flex justify-center rounded-full bg-primary p-4 pb-3"
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
              <ul className="menu fixed inset-x-0 top-0 z-40 min-h-screen w-full transform-none overflow-y-auto bg-white p-4 text-base-content transition-transform">
                <li className="p-4 font-bold">Welcome to Tryyon! </li>
                <div className="divider m-0"></div>
                <li>
                  <a
                    onClick={() => {
                      router.push('/login/user');
                    }}
                  >
                    Login as User
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      router.push('/login/admin');
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
          <div className="mx-2 flex rounded-full bg-base-100 p-3">
            <IconContext.Provider
              value={{ className: 'text-gray-700 text-2xl' }}
            >
              <MdLightMode />
            </IconContext.Provider>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
