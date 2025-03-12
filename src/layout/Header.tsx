import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import '../styles/header.css';
import logo from '../assets/images/logo.webp';
const navigationPartOne = [
  { name: 'تصميم منيو', href: '/' },
  { name: 'تصميم لوجو', href: '/branding-logo-design' },
  { name: 'سوشال ميديا', href: '/social-media' },
  { name: 'تصميم بنرات', href: '/banner' },
  { name: 'تصميم كروت وفلايرات', href: '/card-flair' },
];

const navigationPartTwo = [
  { name: 'من نحن', href: '/about-us' },
  { name: 'طلب عرض أسعار +', href: '/custom-quote' },
];

const App = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <header className="header__  px-4 ">
      <Disclosure
        as="nav"
        className="
        
         "
      >
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div
            dir="rtl"
            className="relative  flex h-16 items-center justify-between"
          >
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
                onClick={showDrawer}
              >
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <a
                className="logo__ flex items-center gap-x-2 mr-auto ml-0 sm:mr-0 sm:ml-[80px]"
                href="/"
              >
                <span>Deep Design</span>
                <img
                  src={logo}
                  alt=""
                  className="max-w-12"
                />
              </a>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigationPartOne.map((item) => (
                    <NavLink
                      viewTransition
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive ? '  text-[#fed017]!  px-3 py-2 text-sm font-medium' : 'px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <Menu
                    as="div"
                    className="relative"
                  >
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        مطبوعات
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 size-4 my-auto text-gray-400"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <NavLink
                          to="/prints/paper-prints"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-4 py-2 text-white rounded-md' : 'block px-4 py-2 text-sm text-black!')}
                        >
                          مطبوعات ورقية
                        </NavLink>
                      </MenuItem>
                      <hr className="text-[#fed017]" />
                      <MenuItem>
                        <NavLink
                          to="/prints/sublimation-printing"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-4 py-2 text-white rounded-md' : 'block px-4 py-2 text-sm text-black!')}
                        >
                          مطبوعات منوعه
                        </NavLink>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  {navigationPartTwo.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive ? '  text-[#fed017]!  px-3 py-2 text-sm font-medium' : 'px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col space-y-5 p-4">
          {navigationPartOne.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-2 text-sm font-medium' : 'text-black! rounded-md px-3 py-2 text-sm font-medium')}
            >
              {item.name}
            </NavLink>
          ))}
          <Menu
            as="div"
            className="relative "
          >
            <div>
              <MenuButton className="right-0 inline-flex w-fit justify-center gap-x-1.5 text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Prints
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-4 my-auto text-gray-400"
                />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="right-0 z-10 mt-2  w-48 origin-top flex flex-col bg-white  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <NavLink
                  to="/prints/paper-prints"
                  className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-2 text-sm font-medium' : 'text-black! rounded-md px-3 py-2 text-sm font-medium')}
                >
                  Paper Prints
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/prints/sublimation-printing"
                  className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-2 text-sm font-medium' : 'text-black! rounded-md px-3 py-2 text-sm font-medium')}
                >
                  Sublimation Printing
                </NavLink>
              </MenuItem>
            </MenuItems>
          </Menu>
          {navigationPartTwo.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-2 text-sm font-medium' : 'text-black! rounded-md px-3 py-2 text-sm font-medium')}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default App;
