import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import PlayfulEyes from "./components/PlayfulEyes";
import Featured from "./components/Featured";
import Card1 from "./Cards/card1";
import Card2 from "./cards/Card2";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen  text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <PlayfulEyes />
      <Featured />
      <div className="w-full h-screen bg-zinc-100 items-center flex gap-5 px-32">
        <Card1 />
        <Card2 />
      </div>
      <Footer />
    </div>
  );
};

export default App;
