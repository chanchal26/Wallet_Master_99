import React from "react";
import adv_1 from "../assets/adv1.jpg";
import adv_2 from "../assets/adv2.jpg";

const RicherLife = () => {
  return (
    <>
      <section className="bg-gray-100 my-20">
        <h1 className="text-center text-4xl font-medium py-10">Leading a Richer Life</h1>
        <div className="text-gray-600 body-font lg:px-32">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Our mission at
                <br />
                Budgetbakers is to help
                <br />
                you <span className="text-[#9195F6]">lead a richer life</span>.
              </h1>
              <p className="mb-8 leading-relaxed">
                Building a picture of all your assets, monitoring your money and
                controlling your spending has one purpose, and onee purpose only:
                to lead to a richer life.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                data-aos="flip-left"
                data-aos-duration="3000"
                className="object-cover object-center rounded"
                alt="hero"
                src={adv_1}
              />
            </div>
          </div>
        </div>
        <div className="text-gray-600 body-font lg:px-32">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                data-aos="flip-right"
                data-aos-duration="3000"
                className="object-cover object-center rounded"
                alt="hero"
                src={adv_2}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                A rich life isn’t just about money.{" "}
                <span className="text-[#9195F6]">
                  It’s about how you use it
                </span>
                .
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RicherLife;
