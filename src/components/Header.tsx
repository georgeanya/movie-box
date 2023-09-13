import React from "react";
import poster from "../../public/assets/Poster.png";
import tv from "../../public/assets/tv.png";
import Menu from "../../public/assets/Menu.png";
import Search from "../../public/assets/Search.png";
import Play from "../../public/assets/Play.png";
import tomatoes from "../../public/assets/tomatoes.png";
import imdb from "../../public/assets/imdb.png";

const Header = () => {
  return (
    <div className="relative">
      <img src={poster.src} alt="" className="w-full absolute min-h-full" />
      <div className="px-[95px] relative z-10 text-white">
        <div className="flex justify-between">
          <div className="flex items-center mt-[15px]">
            <img src={tv.src} alt="" />
            <p className="ml-[24px] text-[24px] font-bold">MovieBox</p>
          </div>
          <div className="flex items-center my-[22px] border-white border py-[6px] px-[10px] rounded-md min-w-[500px] justify-between">
            <p>What do you want to watch?</p>
            <img src={Search.src} alt="" />
          </div>
          <div className="flex items-center mt-[15px]">
            <p className="mr-[27px] text-[16px] font-bold">Sign in</p>
            <img src={Menu.src} alt="" />
          </div>
        </div>
        <div className="mt-[78px] text-white">
          <p className="font-bold text-5xl max-w-[404px]">
            John Wick 3 : Parabellum
          </p>
          <div className="my-4 flex">
            <img src={imdb.src} alt="" />
            <p className="ml-2.5 mr-9">86.0/100</p>
            <img src={tomatoes.src} alt="" />
            <p className="ml-2.5">95%</p>
          </div>
          <p className="max-w-[303px] text-[14px]">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <div className="flex mt-4 bg-[#BE123C] w-[172px] py-1.5 px-4">
            <img src={Play.src} alt="" />
            <p className="ml-2 text-sm">WATCH TRAILER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
