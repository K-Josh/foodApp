import  { useState, useEffect } from "react";
import fruit from "../images/tomato.png"
import arrow from "../images/Vector 1.png"
import fire from "../images/fire.png";
import emoji from "../images/Male Memojis.png"
import {AiOutlineClockCircle} from "react-icons/ai"
import {PiTelegramLogoLight} from "react-icons/pi"
import {BsTelephone} from "react-icons/bs";
import Navbar from "./Navbar";
import {tea} from "./items";

const Carousel = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
      setTimeout(() => {
        slideRight();
      }, 3500);
  });

  const slideRight = () => {
    setCurrent(current === tea.length - 1 ? 0 : current + 1);
  };


  const openMenu = () => {
   setOpen(!open)
  }
  return (
    <div className="">
     <div className={`transition-all static ease-in duration-700 ${open ? '-mt-[4rem]' : '-mt-[18rem] lg:mt-0' } w-[80rem] h-[78rem] fixed -mt-[28rem] lg:-mt-[40rem] lg:-mx-[3rem] mx-[1rem] rounded-full bg-slate-100 `}>
    </div>
       <div className="relative"> 
  {/* navbar */}
         <div onClick={openMenu}><Navbar /></div> 
   {/* Carousel */}
       <div    
         className={`flex flex-col justify- transition-all ease-in duration-700 items-center ${open ? 'mt-[0rem] lg:mt-0' : '-mt-[18rem] lg:mt-0' } `}>
  {/* heading */}
         <div className="uppercase absolute left-[15px] w-44 lg:w-full font-bold lg:py-6 lg:text-center lg:text-4xl -mt-[5rem] lg:-mt-10 ">
          <h2><span className="text-primary">Start</span> the <span className="text-primary">day</span> with something <span className="text-primary">hot.</span></h2>
         </div>
    {/* image text buttons*/}
        <div className="flex lg:flex-row items-center justify-center mt-16">
          {tea.map((menu, index) =>{
    {/* condition ? true : false */}
            return(  
              <div  key={index} className={`mt-[20rem] lg:mt-[28rem] lg:-mx-[0rem] -mx-[10rem] ${index === current ? "carousel_card carousel_card-active" : "carousel_card"} flex justify-center`} >
               <img className="w-52 lg:w-80" src={menu.src} alt='coffee'/>
              </div>
            )
          })}
         
    {/* contact */}
          <div className="flex absolute items-center left-[5rem] lg:left-[48rem] mt-[46rem] lg:mt-[54rem]">
      {/* button */}
              <div className="flex items-center flex-col">
                <button className="bg-white font-bold flex items-center lg:w-[19rem] h-[3.8rem] text-sm rounded-3xl whitespace-nowrap hover:shadow-xl shadow-lg">
      {/* emoji */}
                <div className="mx-1"><img src={emoji} alt="" className="w-10 h-10"/></div>
                <span className="mb-3 mx-4"> Richard Watson </span>
                  {/* text */}
               <span className="mt-8 absolute left-[3.6rem] -mx-3 font-light text-sm">Food Courier</span>
               <div className="bg-primary w-10 h-10 mx-7 rounded-full flex items-center justify-center "><BsTelephone className="text-white"/></div>
               </button>
              
            </div>
          </div>
    {/*utilities  */}
          <div className={`flex items-center justify-center space-x-[12rem] lg:space-x-[22rem] absolute top-[20rem] ${open ? 'mt-[16rem] lg:mt-0' : 'mt-[2rem] lg:mt-0' } transition-all ease-in-out duration-500`}>
            <AiOutlineClockCircle className="bg-primary text-white rounded-md w-10 h-10 p-2 -rotate-12"/>
            <div className="">
              <div className="p-6 space-y-8">
              <img src={fire} alt="" className="-mt-8 " />
              <PiTelegramLogoLight className="text-primary -rotate-90 "/></div> 
              <img src={arrow} alt="" className="-mt-6"/>
            </div>
          </div>
        </div>
 {/* payment */}
        <div className={`flex flex-col items-center space-y-3 absolute lg:left-[60rem] lg:top-[24rem] left-[0.5rem] top-[13rem]  ${open ? 'mt-[18rem] lg:mt-0' : '-mt-12rem] lg:mt-0' } transition-all ease-in duration-700`} >
            <span className="text-primary font-bold lg:text-4xl">$5</span>
           <button type="" className="bg-slate-800 px-6 text-white hover:bg-primary">Order</button>
        </div>
        
      <div className="flex flex-col items-center mt-[5rem] lg:mt-[] lg:space-y-3 space-y-0">
        <div className="lg:-mt-[2rem] mx-[6rem] lg:mx-[12rem] -mt-32 lg:left-[1rem] lg:absolute ">
          <button className="bg-secondary flex items-center text-primary p-2 text-sm rounded-2xl whitespace-nowrap hover:shadow-lg shadow-md">More than Faster <span className="px-2"><img src={fruit} alt=""/></span></button>
        </div>
  {/* texts */}
          <div className="flex">
            <ul className="text-semibold flex lg:flex-col space-x-2 lg:space-x-0 mt-[26rem] lg:mt-[1rem] lg:-mx-[32rem] lg:space-y-3 space-y-0 " >
             {tea.map((menu, index)=>{
             return (
              <div key={index}
                className={`${index === current ? 'scale-110 lg:text-2xl text-sm text-primary lg:translate-x-4' : '' } whitespace-nowrap`}
              >
               <li id="line" className="text-md">{menu.text}</li>
              </div>
             )
           })}
            </ul>
          </div>
      </div>
     
    {/* circles */}
    <div className="flex space-x-2 lg:top-[42rem] top-[32rem] carousel-pagination">
     {tea.map((_, index) =>{
       return (
        <div key={index} 
          className={` rounded-full lg:w-5 w-3 lg:h-5 h-3 ${index === current ? ' pagination-dot pagination_active ' : 'pagination-dot'}  ${open ? 'mt-[12rem] lg:mt-0' : 'mt-[1rem] lg:mt-0' } transition-all ease-in-out duration-700`}
          onClick={()=> setCurrent(index)}>
        </div>)
     })}
    </div>
       </div>
   
  </div>
</div>
  )
}
// color for clock background {#FF4040}
export default Carousel