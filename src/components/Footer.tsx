import React from "react";
import yt from "../../public/assets/yt.png";
import ig from "../../public/assets/ig.png";
import tw from "../../public/assets/tw.png";
import fb from "../../public/assets/fb.png";

const Footer = () => {
  return (
    <div className="mb-[75px] pt-[150px] bg-white">
      <div className="flex justify-center">
        <img src={fb.src} alt="" className="mx-[24px]"/>
        <img src={ig.src} alt="" className="mx-[24px]"/>
        <img src={tw.src} alt="" className="mx-[24px]"/>
        <img src={yt.src} alt="" className="mx-[24px]"/>
      </div>
      <div className="flex justify-center my-9 font-bold text-[#111827]">
        <p className="mx-[24px]">Conditions of Use</p>
        <p className="mx-[24px]">Privacy & Policy</p>
        <p className="mx-[24px]">Press Room</p>
      </div>
      <p className="text-center text-[#6B7280] font-bold">© 2021 MovieBox by Adriana Eka Prayudha </p>
    </div>
  );
};

export default Footer;
