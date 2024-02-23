import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["NeueMontreal-Regular"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-growiing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-64 border-t-[1px] pt-10 border-[#a1a150] mt-20 mb-[40]">
        <div classname="w-1/2">
          <h1 className="text-1xl">What you can expect </h1>
        </div>
        <div className="w-1/2 h-[30] ">
          <h1 className="pr-20 pl-20 mb-5">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </h1>
          <h1 className="pr-10 pl-20">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
      </div>
      <div className="w-full flex gap-64 border-t-[1px] pt-10 border-[#a1a150] mt-20">
        <div classname="w-1/2">
          <h1 className="text-5xl">Our approach : </h1>
          <button className="flex gap-8 items-center px-10 uppercase font-medium py-4 mt-10 bg-zinc-900 text-white rounded-full">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#9db34e] rounded-3xl">
          <img
            className="object-cover h-full rounded-3xl"
            src="./public/images/img_i.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
