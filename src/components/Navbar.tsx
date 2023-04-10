import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { MdLightMode, MdPerson } from 'react-icons/md';

import AnimatedText from './animation/motionText';
import Search from './Search';

type NavbarProps = {
  path: { redirect: string; display: string }[];
  heading: string;
};
const Navbar = ({ path, heading }: NavbarProps) => {
  const router = useRouter();

  return (
    <div className="navbar fixed bg-transparent p-6">
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
