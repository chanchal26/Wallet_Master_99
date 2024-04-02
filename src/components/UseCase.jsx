import React from "react";

const UseCase = () => {
  
  return (
    <section id="services" className="px-4">
      <div className="container mx-auto my-20">
        <h2 className="text-4xl font-medium mb-8 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32 pb-10">
          <div data-aos="fade-right" data-aos-duration="2000" className="bg-[#F9F07A] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Budgeting</h3>
            <p>
            Set unlimited daily, weekly, monthly, orr one-time budgets
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#9195F6] hover:bg-violet-500 text-white py-2 px-4 rounded"
            >
              See Details
            </a>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="bg-[#FB88B4] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Expense control</h3>
            <p>
            See every transaction, synced and categorized automatically.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#9195F6] hover:bg-violet-500 text-white py-2 px-4 rounded"
            >
              See Details
            </a>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="bg-[#2FA8CC] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Planning</h3>
            <p>
            Get ahead of the curve. Automated upcoming payment notifications.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#9195F6] hover:bg-violet-500 text-white py-2 px-4 rounded"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
