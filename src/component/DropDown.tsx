import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/solid'

const DropDown = () => {
  return (
    <>
      <div className="w-56 text-right fixed top-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="bg-gray-300 text-gray-700 
                          font-semibold py-2 px-16 mr-8 
                          rounded inline-flex items-center"
            >
              Options
              {/* <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 
              text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute right-8 w-56 mt-2 origin-top-right
                         bg-white divide-y divide-gray-100 
                         rounded-md shadow-lg ring-1 ring-black
                         ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md
                                items-center w-full px-2 py-2 text-sm`}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md 
                                  items-center w-full px-2 py-2 text-sm`}
                    >
                      {/* {active ? (
                      <DuplicateActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                      Duplicate
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md 
                                 items-center w-full px-2 py-2 text-sm`}
                    >
                      {/* {active ? (
                      <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                      Archive
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md 
                                 items-center w-full px-2 py-2 text-sm`}
                    >
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md 
                                 items-center w-full px-2 py-2 text-sm`}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      )
      {/* <div className="p-10">
        <div className="dropdown inline-block relative">
          <button
            className="bg-gray-300 text-gray-700 
                   font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a
                className="rounded-t bg-gray-200 
             hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 
                hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 
              hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three is the magic number
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default DropDown;
