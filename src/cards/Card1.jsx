import React from "react";

const Card1 = () => {
  return (
    <div className="cardconatiner w-1/2 h-[50vh]">
      <div className="card relative w-full h-full  rounded-xl bg-[#004D43] flex items-center justify-center">
        <img
          className="w-32 "
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="absolute px-5 py-1 left-10 bottom-10 border-2 border-[#CDEA68] rounded-full text-[#CDEA68]">
          &copy; 2019-2020
        </button>
      </div>
    </div>
  );
};

export default Card1;
