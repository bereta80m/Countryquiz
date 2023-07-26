"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Roboto } from "next/font/google";
import { UseGlobal } from "../context/GlobalContext";
import { AiOutlineCheckCircle,AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

function Card() {
  const { AllCountries, currentObject, handleNext,myIndex,setMyIndex,currentIndex,GoodAnswers, setGoodAnswers } = UseGlobal();
  const [aswerSelected, setAnswerSelected] = useState({})
  const Positions = ["A", "B", "C", "D"];

  const RandomList = useMemo(() => {
    const ItemsToselect = AllCountries.slice(0, 4);
    const Filter = ItemsToselect.filter(
      (item) => item.capital !== currentObject?.capital
    ).slice(0, 3);
    const NewList = [...Filter, currentObject];

    const Randomizer = () => {
      return Math.random() - 0.5;
    };
    
    return NewList.sort(Randomizer);
  }, [AllCountries, currentObject]);

  const SelectAnwser = (Selected, index) => {
    if (myIndex == null) {
      setAnswerSelected(Selected)
      //const MyRightAnswer = RandomList.find( (item, index) => item?.name?.common === Selected?.name?.common );
      setMyIndex(index)
   
      if (Selected === currentObject) {
        setGoodAnswers((Prev)=> Prev + 1)
      }
    }

  };
  
  const verificarRespuesta = (answer)=>{
  
    if (answer?.name?.common === currentObject?.name?.common) {
      return 'bg-[#60bf88] text-white border-[#60bf88]'
    }
    else{
      return 'bg-[#ea8282] text-white '
    }
  }
  

  return (
    <div className="flex flex-col items-center bg-white w-full h-full rounded-xl relative">
      <div className="pt-16">
        <p className={`${roboto.className} text-2xl text-[#2f527b]`}>
          {currentObject?.capital} is the capital of{``}
        </p>
      </div>
      <div className="grid w-full px-5 gap-8 pt-5">
        {RandomList?.map((item, index) => {
          return (
            <motion.button
            whileTap={{rotateX:-50}}

              key={index}
              onClick={() => SelectAnwser(item,index)}
              className={`flex justify-between w-full lg:p-4 md:p-3 sm:p-3 xs:p-2 xxs:p-1 rounded-xl items-center gap-12 hover:bg-[#f9a826] hover:text-white border-2 hover:border-[#f9a826] 
              ${myIndex !== null ? (item?.name?.common === currentObject?.name?.common ? "bg-[#60bf88] text-white border-[#60bf88]" : myIndex === index ? "text-white " :"text-[#9094de] border-[#9094de]" ) :"text-[#9094de] border-[#9094de]"}
              ${ aswerSelected === item && verificarRespuesta(item) }  `}>
              <>
                <p className="font-bold text-lg  ">{Positions[index]}</p>
                <p className="font-bold text-md ">{item?.name?.common}</p>
              </>
              {myIndex !== null ? (item?.name?.common === currentObject?.name?.common ? <AiOutlineCheckCircle className="text-2xl"/> :  <AiOutlineClose className="text-2xl"/>) : <p></p>}
            </motion.button>
          );
        })}
      </div>
      <div className="absolute bottom-0 right-0 p-5">
        {myIndex !== null &&
        <motion.button
 
          onClick={() => handleNext()}
          className="bg-[#f9a826] px-8 py-2 rounded-xl font-bold text-md  text-white"
        >
          Next
        </motion.button>
        }
      </div>
    </div>
  );
}

export default Card;



/*

${ aswerSelected === item ? verificarRespuesta(item) : "text-[#9094de] border-[#9094de]" }  

${aswerSelected.id === index && aswerSelected?.name?.common  !== item?.name?.common ? "bg-[#ea8282] text-white" :""}


             rightAnswer
                  ? "text-white border-[#60bf88]"
                  : "text-[#9094de] border-[#9094de]"

                  
{opciones.map((opcion, index) => (
        <button
          key={index}
          onClick={() => setRespuestaSeleccionada(opcion)}
          className={`block w-full p-2 rounded-lg text-white ${ respuestaSeleccionada === opcion ? verificarRespuesta(opcion) : 'bg-blue-500'} mb-2`} disabled={respuestaSeleccionada !== null} >
          {opcion}
        </button>
      ))}
*/