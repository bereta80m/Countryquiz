"use client"
import Image from 'next/image'
import Card from "./components/Card"
import { Roboto } from 'next/font/google'
import Congratulation from './components/Congratulation'
import { UseGlobal } from './context/GlobalContext'
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})
export default function Home() {
  const {currentIndex } = UseGlobal();
  
  return (
    <div className='grid place-items-center w-full h-screen bg-my_bg_image bg-cover relative '>

      <div className='lg:w-[30vw] md:w-1/2 sm:w-[60vw] xs:w-[60vw] xxs:w-[80vw] h-[75vh] relative'>
        <p className={`${roboto.className} text-white text-3xl uppercase  absolute -top-10`}>Country Quiz</p>

        {currentIndex !== 5 && <div className='bg-mysvg_image bg-contain w-44 h-44 bg-no-repeat absolute -top-20 right-0  z-20' />}
        {currentIndex === 5 ? <Congratulation myPro={'Card'}/> : <Card />}
        
      </div>
    </div>
  )
}
