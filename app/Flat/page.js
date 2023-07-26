"use client"
import { Roboto } from "next/font/google";
import React from "react";
import CardFlat from "../components/CardFlat";
import { useRouter } from "next/navigation";
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Congratulation from "../components/Congratulation";
import { UseGlobal } from "../context/GlobalContext";
const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
  })
function Flat() {
    const router = useRouter()
    const {currentIndex } = UseGlobal();

  return (
    <div className="grid place-items-center w-full h-screen bg-my_bg_image bg-cover relative ">
        <div onClick={()=>router.back()} className="cursor-pointer">
        <FaLongArrowAltLeft className="text-4xl absolute left-0 text-white"/>
        </div>
      <div className="lg:w-[30vw] md:w-1/2 sm:w-[60vw] xs:w-[60vw] xxs:w-[80vw] h-[75vh] relative">
        <p className={`${roboto.className} text-white text-3xl uppercase  absolute -top-10`}>
          Country Quiz
        </p>
        
        {currentIndex !== 5 && <div className="bg-mysvg_image bg-contain w-44 h-44 bg-no-repeat absolute -top-20 right-0  z-20" />}
        {currentIndex !== 5 && (<CardFlat />)}
        {currentIndex === 5 && <Congratulation myPro={'Flag'} /> }

      </div>
    </div>
  );
}

export default Flat;
