import type { ReactElement } from "react";
import { Fragment, useState } from "react";
import Layout from "../layouts/main";
import type { NextPageWithLayout } from "./_app";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { SearchIcon, ScaleIcon } from "@heroicons/react/solid";
import { BellIcon, DotsHorizontalIcon } from "@heroicons/react/outline";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45", summary: "5% in the last week" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45", summary: "5% in the last week"},
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45", summary: "5% in the last week" },
  // More items...
];

const Home: NextPageWithLayout = (props) => {
  return (
    <>
      <div>
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex-1 flex">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  className="bg-black-600 rounded-md block w-[700px] h-full pl-8 pr-8 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className=" text-gray-40 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl leading-6 font-normal text-white">
            Overview
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="bg-black-500 overflow-hidden shadow rounded-lg"
              >
                <div className="p-5 relative ">
                  <div className="absolute right-2">
                    <DotsHorizontalIcon
                      className="h-6 w-6 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex items-center py-8">
                    <div className="ml-5 w-0 flex-1">
                      <dl className="flex flex-col gap-4 text-gray-500">
                        <dt className="text-base font-normal truncate">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-4xl font-normal text-white">
                            {card.amount}
                          </div>
                        </dd>
                        <dd>
                          <div className="text-base font-normal">
                            {card.summary}
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="flex-shrink-0 self-end w-10 h-10 rounded-full bg-green-900 flex items-center justify-center">
                      <card.icon
                        className="h-6 w-6 text-black-900"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
