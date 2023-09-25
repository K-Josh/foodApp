import  { useState, useEffect } from "react";
import fruit from "../images/tomato.png"
import arrow from "../images/Vector 1.png"
import fire from "../images/fire.png";
import emoji from "../images/Male Memojis.png"
import {AiOutlineClockCircle} from "react-icons/ai"
import {PiTelegramLogoLight} from "react-icons/pi"
import {BsTelephone} from "react-icons/bs";
import Navbar from "./Navbar";
import {tea, text} from "./items";

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
    <div className="w-full">
     <div className={`transition-all ease-in duration-700 w-[80rem] h-[78rem] fixed -mt-[28rem] lg:-mt-[26rem] lg:-mx-[8rem] mx-[1rem] rounded-full bg-slate-100 `}>
    </div>
   <header className="relative"> 
  {/* navbar */}
         <div onClick={openMenu}><Navbar /></div> 
   {/* Carousel */}
   <div className={`flex flex-col-reverse lg:flex-row justify-center transition-all ease-in duration-700 -mt-[8rem] lg:-mt-0 ${open ? '-mt-[14rem] lg:mt-0' : '-mt-[18rem] lg:mt-0' } `}>
  {/* heading */}
         <div className={` uppercase absolute lg:left-[15px] left-[1.8rem] w-44 lg:w-full font-bold lg:py-10 lg:text-center lg:text-4xl  lg:-mt-10 -mt-[19rem] ${open ? '-mt-[26rem] lg:mt-0' : '-mt-[52rem] lg:mt-0' } transition-all ease-in-out duration-500`} >
          <h2><span className="text-primary">Start</span> the <span className="text-primary">day</span> with something <span className="text-primary">hot.</span></h2>
         </div>
  
  {/*Left side of page  */}
      <div className={`${open ? 'mt-[19.9rem] lg:mt-0' : 'mt-[17rem] lg:mt-0' } transition-all ease-in-out duration-500 lg:flex lg:flex-col items-center mt-[17rem] lg:mt-[20rem] lg:space-y-3 lg:-mx-20 px-[3rem] space-y-9 mx-4 space-x-8 lg:space-x-0`}>
        <div className="lg:-mt-[2rem] -mt-32 -mx-6 lg:-mx-0">
          <button className="bg-secondary flex items-center text-primary p-2 text-sm rounded-2xl whitespace-nowrap hover:shadow-lg shadow-md">More than Faster <span className="px-2"><img src={fruit} alt=""/></span></button>
        </div>
  {/* texts */}
          <div className="flex mx-6">
            <ul className="text-semibold lg:flex-1 flex lg:flex-col space-x-3 lg:space-x-0  lg:mt-[1rem] lg:space-y-3 space-y-0 " >
             {tea.map((menu, index)=>{
             return (
              <div key={index}
                className={` ${index === current ? 'scale-110 lg:text-2xl text-sm text-primary lg:translate-x-[1rem]' : '' } whitespace-nowrap`}
              >
               <li id="line" className="text-md">{menu.labels}</li>
              </div>
             )
           })}
            </ul>
          </div>
      </div>

   {/* right section of page image text buttons*/}
       <div className={`transition-all ease-out duration-700 ${open ? "mt-[24rem] " : "mt-[4rem] lg:mt-0 "} flex flex-col justify-center items-center lg:mt-1  lg:mx-[10rem]`} >  
         <div className="flex flex-col items-center py-[8rem] lg:-mt-[4rem] mt-[10rem] ">
           {/* images */}
           {tea.map((menu, index) =>{
    {/* condition ? true : false */}
        return(  
          <div  key={index} className={` ${open ? '-mt-[19rem] lg:mt-0' : '-mt-[24rem] lg:mt-0'} transition-all ease-in-out duration-500 lg:-mx-[0rem] -mx-[10rem] ${index === current ? "carousel_card carousel_card-active" : "carousel_card"} flex justify-center`} >
            <img className="w-52 lg:w-80" src={menu.src} alt='coffee'/>
          </div>
            )
          })}

           {/* circles */}
       <div className="flex space-x-2 lg:mt-[28rem] mt-[4rem]">
        {tea.map((_, index) =>{
       return (
        <div key={index} 
          className={`-mt-[8rem] lg:-mt-0 rounded-full lg:w-5 w-3 lg:h-5 h-3 ${index === current ? ' pagination-dot pagination_active ' : 'pagination-dot'}  ${open ? '-mt-[3rem] lg:mt-0' : 'mt-[1rem] lg:mt-0' } transition-all ease-in-out duration-700`}
          onClick={()=> setCurrent(index)}>
        </div>)
     })}
        </div>
       </div>

    {/*utilities  */}
          <div className={`lg:-mt-[32rem] -mt-[34rem] flex items-center justify-center space-x-[14rem] lg:space-x-[22rem] ${open ? 'mt-[rem] lg:mt-0' : '-mt-[26rem] lg:mt-0'} transition-all ease-in-out duration-500`}>
        {/* clock */}
            <div className="mx-2">
            <AiOutlineClockCircle className="bg-primary text-white rounded-md w-10 h-10 p-2 -rotate-12"/>
            </div>
            <div className="-mx-4">
              <div className="p-6 space-y-8">
              <img src={fire} alt="" className="-mt-8 " />
              <PiTelegramLogoLight className="text-primary -rotate-90 "/></div> 
              <img src={arrow} alt="" className="-mt-6"/>
            </div>
          </div>

      <div className={`absolute flex-col-reverse lg:flex-row lg:mt-[19rem] space-y-[16rem] lg:space-y-[2rem] space-x-40 lg:space-x-0 lg:flex ${open ? '-mt-[5rem] lg:-mt-0' : '-mt-[17rem] lg:-mt-0'} transition-all ease-in-out duration-500`}>
          {/* contact div*/}
        <div className="lg:flex-1 items-center flex-col-reverse lg:space-y-[12rem] mt-[8rem] lg:mt-[16rem] ">
      {/* button */}
             <div className="flex items-center flex-col lg:mx-[12rem]">
                <button className="bg-white font-bold flex flex-1 items-center text-sm rounded-3xl whitespace-nowrap hover:shadow-xl shadow-lg">
      {/* general div for button emoji */}
                <div className="flex items-center">
        {/* emoji div */}
                 <div className="flex mx-3"><img src={emoji} alt="" className="w-10 h-10"/></div>
          {/* text */}
                  <div className="flex flex-col items-start">
                   <span className="py-2 "> Richard Watson </span>
                   <span className="py-1 -mt-2 font-light text-sm">Food Courier</span>
                  </div>
                </div>
                
               <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mx-[2rem] "><BsTelephone className="text-white"/></div>
               </button>
              
            </div>
         </div>
    {/* payment */}
         <div className={`flex flex-col items-center space-y-2 lg:mt-[30rem] mt-11 lg:-mx-[12rem]  ${open ? '-mt-[32rem] lg:mt-0' : '-mt-12rem] lg:mt-0' } transition-all ease-in duration-700`} >
            <div className="flex flex-col items-center">
             <span className="text-primary font-bold lg:text-4xl">$5</span>
             <button type="" className="bg-slate-800 px-6 text-white hover:bg-primary">Order</button>
            </div>
          </div>
     </div>
     
       </div>   
    
   </div>
   
  </header>
</div>
  )
}
// color for clock background {#FF4040}
export default Carousel