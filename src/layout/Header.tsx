import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import '../styles/header.css';

import logo from '../assets/images/logo.webp';
import logoSm from '../assets/images/logo-sm.webp';

const navigation = [
  { name: 'تصميم منيو', href: '/' },
  { name: 'تصميم لوجو', href: '/branding-logo-design' },
  { name: 'سوشيال ميديا', href: '/social-media' },
  { name: 'تصميم بنرات', href: '/banner' },
];
const navigationMenu = [
  { name: 'مطبوعات ورقية', href: '/prints/paper-prints' },
  { name: 'مطبوعات منوعه', href: '/prints/sublimation-printing' },
  { name: 'تصميم كروت و فلايرات', href: '/prints/card-flair' },
];
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <header className="header__  px-3 sm:px-4  py-1 sm:py-8 z-50 ">
      <Disclosure
        as="nav"
        className="mx-auto  px-2 sm:px-0 xl:px-8"
      >
        <div
          dir="rtl"
          className="relative  flex h-16 items-center justify-between"
        >
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <DisclosureButton
              className="group iconBar__ relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
              onClick={showDrawer}
            >
              <Bars3Icon
                aria-hidden="true"
                className="block size-6"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center gap-x-8 xl:gap-x-20 ">
            <a
              className="logo__ flex items-center gap-x-2 mr-auto ml-0 md:mr-0"
              href="/"
            >
              <span className="font-[Qwigley] text-2xl lg:text-3xl mt-2">Deep Design</span>
              <img
                src={logo}
                alt="logo"
                className="max-w-12  hidden lg:block"
              />
              <img
                src={logoSm}
                alt="logo"
                className="w-8 block lg:hidden"
              />
            </a>
            <div className="hidden  md:flex sm:items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => (isActive ? '  text-[#fed017]! sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'sm:px-1 xl:px-3 py-2 text-sm font-medium')}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Menu
                  as="div"
                  className="relative flex flex-col items-center"
                >
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-gray-300  hover:text-white mx-auto text-center rounded-md  py-2 text-sm font-medium">
                    مطبوعات
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-4 my-auto text-gray-400"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-11 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <NavLink
                        to="/prints/paper-prints"
                        className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white! rounded-t-md' : 'text-black! hover:bg-gray-900 rounded-t-md hover:text-white! block px-3 py-2 ')}
                      >
                        مطبوعات ورقية
                      </NavLink>
                    </MenuItem>
                    <hr className="text-[#fed017]" />
                    <MenuItem>
                      <NavLink
                        to="/prints/sublimation-printing"
                        className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white ' : 'text-black! hover:bg-gray-900  hover:text-white! block px-3 py-2 ')}
                      >
                        مطبوعات منوعه
                      </NavLink>
                    </MenuItem>
                    <hr className="text-[#fed017]" />
                    <MenuItem>
                      <NavLink
                        to="/prints/card-flair"
                        className={({ isActive }) => (isActive ? 'bg-gray-900 block px-2 py-2 text-white rounded-b-md' : 'text-black! hover:bg-gray-900 rounded-b-md hover:text-white! block px-3 py-2 ')}
                      >
                        تصميم كروت و فلايرات
                      </NavLink>
                    </MenuItem>
                  </MenuItems>
                </Menu>

                <NavLink
                  to={'/about-us'}
                  className={({ isActive }) => (isActive ? '  text-[#fed017]!  sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'sm:px-1 xl:px-3 py-2 text-sm font-medium')}
                >
                  من نحن
                </NavLink>

                <NavLink
                  to="/custom-quote"
                  className={({ isActive }) => (isActive ? 'bg-white!  px-4 py-2 rounded-md text-black!' : 'bg-[#fed017] block px-4 py-2 rounded-md  hover:bg-white transition-colors duration-300 text-black!')}
                >
                  + طلب عرض أسعار
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      <Drawer
        placement="left"
        closable={true}
        onClose={onClose}
        open={open}
        className=""
      >
        <div className="flex flex-col transition-all duration-300 items-center space-y-4 p-4">
          {navigation.map((item) => (
            <NavLink
              onClick={onClose}
              key={item.name}
              to={item.href}
              className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium' : ' py-1.5 sm:py-2 text-black! rounded-md px-3 text-sm font-medium')}
            >
              {item.name}
            </NavLink>
          ))}
          <Menu
            as="div"
            className="relative flex flex-col items-center"
          >
            <MenuButton className=" mx-auto  inline-flex w-fit justify-center  text-black cursor-pointer rounded-md text-sm font-medium">
              مطبوعات
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-4 my-auto text-gray-400"
              />
            </MenuButton>
            <MenuItems
              transition
              className="z-10 mt-2 mx-auto items-center w-48 origin-top flex flex-col bg-white  transition-all focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              {navigationMenu.map((item) => (
                <MenuItem>
                  <NavLink
                    onClick={onClose}
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'bg-gray-700! w-fit text-white! rounded-md px-3 py-2 text-sm font-medium' : 'text-black! rounded-md px-3 py-2 text-sm font-small')}
                  >
                    {item.name}
                  </NavLink>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          <NavLink
            onClick={onClose}
            to={'/about-us'}
            className={({ isActive }) => (isActive ? ' bg-gray-700! w-fit py-0 sm:py-2 text-white! rounded-md px-3 text-sm font-medium' : 'text-black! rounded-md px-3 py-0 sm:py-2 text-sm font-medium')}
          >
            من نحن
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/custom-quote"
            className={({ isActive }) => (isActive ? 'bg-black! w-fit px-2 py-3 text-white! rounded-md' : 'bg-[var(--bg-secondary)]! rounded-md font-bold w-fit py-2.5 px-5 leading-[20px] text-sm text-black!')}
          >
            طلب عرض أسعار +
          </NavLink>
        </div>
      </Drawer>
    </header>
  );
};

export default App;
