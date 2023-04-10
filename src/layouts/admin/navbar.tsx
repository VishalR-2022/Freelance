import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { MdLightMode, MdPerson } from 'react-icons/md';

import AnimatedText from '@/components/animation/motionText';
import Search from '@/components/Search';
import type { IBreadcrumb } from '@/layouts/admin';

type NavbarProps = {
  path?: IBreadcrumb[];
  heading?: string;
};

const Navbar = ({ path, heading }: NavbarProps) => {
  const router = useRouter();

  return (
    <div className="navbar sticky top-0 mt-10 flex justify-between bg-base-100 p-6">
      <div className="flex flex-col justify-start">
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
                      {item.label}
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
          <IconContext.Provider value={{ className: 'text-gray-700 text-2xl' }}>
            <MdLightMode />
          </IconContext.Provider>
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="flex rounded-full bg-blue-600 p-3">
            <IconContext.Provider value={{ className: 'text-white text-2xl' }}>
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
  );
};

export default Navbar;
