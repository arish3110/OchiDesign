import React from "react";

const Card2 = () => {
  return (
    <div className="cardconatiner w-1/2 h-[50vh] flex gap-5">
      <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          alt=""
        />
        <button className="absolute left-1 ml-5 text-sm bottom-10 px-3 py-1 border-2 rounded-full uppercase">
          Rating 5.0 on clutch
        </button>
      </div>
      <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
        <img
          className="size-24"
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt=""
        />
        <button className="absolute left-2 bottom-10 px-1 text-sm ml-3 py-1 border-2 rounded-full uppercase">
          Business bootcamp Alumni
        </button>
      </div>
    </div>
  );
};

export default Card2;
