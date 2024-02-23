import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="txtarea mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="txtanima">
              <div className="w-fit flex items-center overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                    className="mr-[1.3vw] w-[6vw] rounded-md h-[4vw] relative"
                  >
                    <img
                      className="rounded-md"
                      src="https://media.istockphoto.com/id/1172217300/photo/scandinavian-style-living-and-dining-room.webp?b=1&s=170667a&w=0&k=20&c=zq5abU6pPk5JF2WKgEofxnkIO_QG_BzEQg-iJLxVKM8="
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className=' -mb-[1vw] uppercase relative top-[.5vw] text-[7vw] flex  justify-center items-center  leading-[6.8vw] font-["fg"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 py-5 px-20 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="py-2 px-5 border-[1px] text-md uppercase rounded-full border-zinc-400 font-light">
            Start the Project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full flex justify-center items-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
