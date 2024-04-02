import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import UseCase from "./components/UseCase";
import WhyWallet from "./components/WhyWallet";
import RicherLife from "./components/RicherLife";
import Helps from "./components/Helps";
import Board from "./components/Board";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useAlert } from "react-alert";

const App = () => {

  AOS.init();
  const alert = useAlert()
  alert.show(<p>We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy.</p>)
  
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <UseCase />

      <WhyWallet />

      <RicherLife />

      <Helps />

      <Board />

      <Footer />
    </>
  );
};

export default App;
