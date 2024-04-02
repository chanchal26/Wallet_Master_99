import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu,IoClose } from "react-icons/io5";



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-5 bg-gray-100 text-gray-800 border-b-2 drop-shadow-xl mx-auto ">
      <div className="relative flex items-center h-12 justify-evenly">
        <a
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <FaWallet size={68} className="text-[#9195F6] pr-2" />
          <span className="text-3xl font-bold">
            WALLET <span className="text-gray-500">MASTER</span>
          </span>
        </a>
        <ul className="items-stretch hidden space-x-2 lg:flex">
          <li>
            <div className="relative inline-block text-left">
              <div className="group">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:text-[#9195F6]"
                >
                  How it works <FaAngleDown size={20} className="pl-1 pt-1" />
                </a>

                {/* <!-- Dropdown menu --> */}
                <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Budget
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Expence Tracking
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Planned Payments
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cash Flow Insights
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Bank Sync
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative inline-block text-left">
              <div className="group">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:text-[#9195F6]"
                >
                  Resources <FaAngleDown size={20} className="pl-1 pt-1" />
                </a>

                {/* <!-- Dropdown menu --> */}
                <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Bank to Sync
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Security
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:text-[#9195F6]"
            >
              Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-2 bg-indigo-100 text-[#9195F6] rounded-3xl"
            >
              For Business
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold border-2 border-gray-100 hover:text-[#9195F6] hover:shadow-md mr-2 rounded">
            Sign in
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-[#9195F6] hover:bg-violet-500 text-gray-50">
            Sign up
          </button>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <IoMenu size={32}/>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="#"
                      aria-label="Back to homepage"
                      className="flex items-center p-2"
                    >
                      <FaWallet size={68} className="text-violet-500 pr-2" />
                      <span className="text-3xl font-bold">
                        WALLET <span className="text-gray-500">MASTER</span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IoClose size={32}/>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <div className="relative inline-block text-left">
                        <div className="group">
                          <a
                            href="#"
                            className="flex items-center px-4 py-2 hover:text-[#B7C9F2]"
                          >
                            How it works{" "}
                            <FaAngleDown size={20} className="pl-1 pt-1" />
                          </a>

                          {/* <!-- Dropdown menu --> */}
                          <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Budget
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Expence Tracking
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Planned Payments
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Cash Flow Insights
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Bank Sync
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="relative inline-block text-left">
                        <div className="group">
                          <a
                            href="#"
                            className="flex items-center px-4 py-2 hover:text-[#B7C9F2]"
                          >
                            Resources{" "}
                            <FaAngleDown size={20} className="pl-1 pt-1" />
                          </a>

                          {/* <!-- Dropdown menu --> */}
                          <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Blog
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Bank to Sync
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Careers
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                About Us
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Security
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 hover:text-[#B7C9F2]"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-5 py-2 bg-indigo-100 text-indigo-500 rounded-3xl"
                      >
                        For Business
                      </a>
                    </li>
                    <li>
                      <button className="self-center px-8 py-3 font-semibold border-2 border-gray-100 hover:border-indigo-500 mr-2 rounded">
                        Sign in
                      </button>
                      <button className="self-center px-8 py-3 font-semibold rounded bg-[#9195F6] hover:bg-violet-500 text-gray-50">
                        Sign up
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
