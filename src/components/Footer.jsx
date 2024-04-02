import React from "react";
import { FaWallet } from "react-icons/fa";
import { AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";


const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
        <a
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <FaWallet size={68} className='text-[#9195F6] pr-2' />
            <span className='text-3xl font-bold'>WALLET <span className='text-gray-500'>MASTER</span></span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-xl font-semibold text-gray-800">Product</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-[#9195F6]" href="#">Features</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">Integrations</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">Pricing</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-xl font-semibold text-gray-800">Company</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-[#9195F6]" href="#">Privacy</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-xl font-semibold text-gray-800">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-[#9195F6]" href="#">Public API</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">Documentation</a>
              </li>
              <li>
                <a className="hover:text-[#9195F6]" href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-xl font-semibold text-gray-800">Social media</div>
            <div className="flex justify-start space-x-3">
              <a href="#" title="Facebook" className="flex items-center p-1">
                <BsFacebook size={32} className="hover:text-[#9195F6]"/>
              </a>
              <a href="#" title="Twitter" className="flex items-center p-1">
                <AiFillTwitterCircle size={32} className="hover:text-[#9195F6]"/>
              </a>
              <a href="#" title="Instagram" className="flex items-center p-1">
                <AiFillInstagram size={32} className="hover:text-[#9195F6]"/>
              </a>
              <a href="#" title="Linkedin" className="flex items-center p-1">
                <ImLinkedin size={32} className="hover:text-[#9195F6]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © 2026 Wallet Master. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
