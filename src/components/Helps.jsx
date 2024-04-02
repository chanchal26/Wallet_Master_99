import React from 'react'
import { AiFillQuestionCircle,AiOutlineBarChart } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { CgTimer } from "react-icons/cg";

const Helps = () => {
  return (
    <section id="services" className="px-4 my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium mb-8 text-center">Wallet Helps You:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-5 lg:px-32 pb-10">
          <div>
            <AiFillQuestionCircle size={96} className='text-[#9195F6] rounded-md shadow-2xl mx-auto px-5' />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-thin text-center my-2">Ask the Questions</h2>
              <p className="text-center">Where does my money go?</p>
            </div>
          </div>
          <div>

            <FaDatabase size={96} className='text-[#B7C9F2] rounded-md shadow-2xl mx-auto px-5' />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-thin text-center my-2">
              See the Data
              </h2>
              <p className="text-center">
              Unlock key insights.
              </p>
            </div>
          </div>
          <div>
            <CgTimer size={96} className='text-[#F9F07A] rounded-md shadow-2xl mx-auto px-5' />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-thin text-center my-2">Be Efficient</h2>
              <p className="text-center">
              No missed payments.
              </p>
            </div>
          </div>
          <div>
            <AiOutlineBarChart size={96} className='text-[#FB88B4] rounded-md shadow-2xl mx-auto px-5' />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-thin text-center my-2">Have the Answers</h2>
              <p className="text-center">
              Anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Helps