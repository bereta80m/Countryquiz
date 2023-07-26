"use client";

import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [AllCountries, setAllCountries] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentObject, setCurrentObject] = useState({});
  const [myIndex, setMyIndex] = useState(null)
  const [GoodAnswers, setGoodAnswers] = useState(0)
  const Randomizer = () => {
    return Math.random() - 0.5;
  };
  const GetDataApi = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const RandomList = data.sort(Randomizer);
    setAllCountries(RandomList);
    setCurrentObject(RandomList[currentIndex])
  };

  const handleNext=()=>{
    setCurrentIndex((Prev)=> Prev + 1)
    setMyIndex(null)
  }
  useEffect(() => {
    GetDataApi();
  }, []);

  useEffect(() => {
    setCurrentObject(AllCountries[currentIndex])
    GetDataApi();
  }, [currentIndex])

  return (
    <GlobalContext.Provider value={{ AllCountries, currentObject,handleNext,myIndex,setMyIndex ,currentIndex,setCurrentIndex,GoodAnswers, setGoodAnswers}}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const UseGlobal = () => useContext(GlobalContext);

/*
  const [AllCountries, setAllCountries] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentObject, setCurrentObject] = useState([])
  const [randomPosition, setRandomPosition] = useState([])

  const GetDataApi = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    setAllCountries(data)
  }

  const GetCurrentObject = (data)=>{
    setCurrentObject(AllCountries[currentIndex])
    console.log(AllCountries[currentIndex])
  }
  const GetSomeRandomn = (amount)=>{
    const ListaAleactoria = AllCountries.sort(()=> 0.5 - Math.random())  
    const FiltrarTres = ListaAleactoria.slice(0,amount)
    return FiltrarTres
  }
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  const Datos = GetSomeRandomn(3)
  const NewList = [...Datos,currentObject]
  useEffect(() => {
    GetDataApi()
  }, [])

  useEffect(() => {
    GetCurrentObject()
    const RandomPositions = NewList.sort(compareRandom);
    setRandomPosition(RandomPositions)
  }, [currentIndex])


*/
