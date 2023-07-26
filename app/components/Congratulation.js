"use client";
import React from "react";
import { UseGlobal } from "../context/GlobalContext";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Congratulation({ myPro }) {
  const { GoodAnswers, setGoodAnswers,setCurrentIndex } = UseGlobal();
  const router = useRouter();
  const TryAgainbtn = ()=>{
    setCurrentIndex(0)
    setGoodAnswers(0)
  }
  return (
    <div className="flex flex-col items-center bg-white w-full h-full rounded-xl relative">
      <div className="bg-mycongrats_svg bg-contain w-48 h-48 mt-10 bg-no-repeat  z-20" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-[#1d355d] font-bold text-5xl">Results</p>
        <p className="text-[#1d355d] text-lg ">
          You got{" "}
          <font className="text-3xl text-[#6fcf97] font-bold">
            {GoodAnswers}
          </font>{" "}
          correct answers
        </p>
      </div>
      <div className="flex justify-center w-full items-center py-10 absolute bottom-0">
        <div>
          <button
            onClick={() => TryAgainbtn()}
            className=" border-2 border-[#1d355d] px-10 py-3 rounded-lg  hover:bg-[#1d355d] hover:text-white"
          >
            Try again
          </button>
        </div>

        {myPro !== "Flag" ? (
          <Link onClick={()=>TryAgainbtn()} href="Flat" className="absolute right-0 px-5">
            <FaLongArrowAltRight className="text-3xl" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Congratulation;
