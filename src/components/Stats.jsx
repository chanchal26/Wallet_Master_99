import React from "react";
import { FaDownload } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import { GiClick } from "react-icons/gi";

const Stats = () => {
  return (
    <section className="p-6 my-6 text-gray-800">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#9195F6]">
            <FaDownload size={30} className="text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">6.5 M</p>
            <p className="capitalize">Downloads</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#9195F6]">
            <AiFillStar size={30} className="text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">4.8</p>
            <p className="capitalize">Rating</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#9195F6]">
            <BsSpeedometer size={30} className="text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">172%</p>
            <p className="capitalize">Growth</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#9195F6]">
            <GiClick size={30} className="text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">17%</p>
            <p className="capitalize">Bounce rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
