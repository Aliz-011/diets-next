import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiDumbbell, BiMenuAltRight } from 'react-icons/bi';
import { MdCheck, MdWarning } from 'react-icons/md';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className="bg-gray-100">
      <nav className="flex px-4 py-4 w-full md:px-16 justify-between items-center">
        <Link href="/" className="flex items-center font-bold text-2xl">
          <p>diets</p>
          <span className="text-orange-500">app</span>
        </Link>

        <Menu as="div" className="flex items-center gap-6">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="hidden md:flex items-center gap-6 h-full"
          >
            <li className="cursor-pointer">
              <a href="#" className="font-medium">
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#" className="font-medium">
                Exercises
              </a>
            </li>
            <li className="cursor-pointer flex items-center">
              <Popover className="relative">
                <Popover.Button className="flex self-center">
                  <BiDumbbell className="text-xl" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition easa-out duration-100"
                  enterFrom="transform scale-95"
                  enterTo="transform scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform scale-100"
                  leaveTo="transform scale-95"
                >
                  <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                    <div className="relative p-3">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-gray-700 font-medium">
                          Notification
                        </p>
                        <a className="text-sm text-orange-500" href="#">
                          Mark all as done
                        </a>
                      </div>

                      <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                        <div className="flex">
                          <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                            <MdCheck className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-gray-700">
                              Push-ups
                            </p>
                            <p className="font-sm text-gray-500 truncate">
                              15 reps - 3 sets
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                        <div className="flex">
                          <div className="rounded-full shrink-0 bg-red-200 h-8 w-8 flex items-center justify-center">
                            <MdWarning className="h-4 w-4 text-red-600" />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-gray-700">
                              Pull-ups
                            </p>
                            <p className="font-sm text-gray-500 truncate">
                              10 reps - 2 sets
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </li>
            <li className="cursor-pointer">
              {session ? (
                <button
                  onClick={() => signOut()}
                  class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
                    Logout
                  </span>
                </button>
              ) : (
                <Link
                  href={'/login'}
                  className="border-none bg-orange-400 hover:bg-orange-600 text-white px-5 py-1.5 rounded tracking-wider duration-150 ease-out transition"
                >
                  Login
                </Link>
              )}
            </li>
          </motion.ul>
        </Menu>

        <Menu as="div" className="flex items-center md:hidden">
          <BiMenuAltRight className="text-xl" />
        </Menu>
      </nav>
    </header>
  );
};

export default Navbar;
