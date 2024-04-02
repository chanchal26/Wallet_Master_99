import React from "react";
import eWallet from "../assets/online-wallet.jpg";

const WhyWallet = () => {
  return (
    <section id="services" className="px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium mb-8 text-center">Why Wallet Master?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32 pb-10">
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={eWallet}
              alt="Image of wallet"
              srcSet=""
            />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-semibold text-center my-2">Advanced</h2>
              <p className="text-center">
                Wallet is simply smarter. We combine best-in-breed AI driven
                categorization and analytics with a deep set of features that
                are proven to work.
              </p>
            </div>
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={eWallet}
              alt="Image of wallet"
              srcSet=""
            />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-semibold text-center my-2">
                User Driven
              </h2>
              <p className="text-center">
                Wallet isn’t a “system.” You drive your own decision making
                process. Wallet learns from the user to provide only the data
                and tools you need most.
              </p>
            </div>
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={eWallet}
              alt="Image of wallet"
              srcSet=""
            />
            <div className="container mx-auto w-2/3">
              <h2 className="text-2xl font-semibold text-center my-2">Private</h2>
              <p className="text-center">
                BudgetBakers does not sell customer data to 3rd parties. Ever.
                Your data is yours. Our mission is to help you use it to lead a
                richer life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWallet;
