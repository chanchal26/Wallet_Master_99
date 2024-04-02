import React from "react";
import img from "../assets/board.png";
import { BsSpeedometer } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

const Board = () => {
  return (
    <section className="text-gray-600 body-font bg-indigo-100 lg:mx-48 lg:px-14 lg:mb-10">
      <div className="container flex flex-wrap py-10 px-10 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 ">
          <div className="flex gap-3">
            <BsSpeedometer size={48} className="text-indigo-600" />
            <h2 className="text-4xl font-bold text-gray-900">Board</h2>
          </div>
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2  py-5 text-gray-900">
            Board: Wallet for Business
          </h1>
          <h3 className="sm:text-3xl text-2xl font-medium title-font mb-2 py-3 text-gray-900">
            Looking for Wallet’s powerful features and more to run a small
            business?
          </h3>
          <p className="leading-relaxed text-base">
            That’s why we invented Board: a powerful small business finance
            manager that goes to beyond Point of Sale, to offer you a 360° view of
            your business finances.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <img data-aos="fade-left" data-aos-duration="2000" src={img} alt="" srcSet="" />
          <div className="flex justify-center mt-2">
            <button className="inline-flex text-white bg-[#9195F6] hover:bg-violet-500 border-0 rounded-xl py-2 px-4 focus:outline-none text-lg font-semibold items-center">
              Try Board <FaAngleRight className="pl-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
