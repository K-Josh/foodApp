import  { useState } from 'react'
import { Link } from 'react-scroll';
import {BsBellFill, BsFillCartFill} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Navbar = () => {
 
   const [open, setOpen] = useState(false);

   const openMenu = () => {
    setOpen(!open)
   }

  return (
    <nav className="overflow-x-hidden container">
     <div className='flex justify-between p-4 w-full whitespace-nowrap relative'>
      <div className='py-6 lg:text-primary'>
       <p className= "font-semibold">Food Call</p>
      </div>
  {/* menu icons */}
        <div
          onClick={openMenu} 
          className='py-6 left-[16rem] absolute lg:hidden text-primary transition-all duration-700  cursor-pointer text-xl'>
          {open ? <AiOutlineCloseCircle />  : <GiHamburgerMenu />}
        </div>
  {/* menu items */}
       <div className={`flex flex-col lg:flex-row items-center lg:justify-between lg:my-0 my-14 space-y-8 lg:space-y-0 lg:static bg-secondary lg:bg-inherit p-10 lg:p-0 transition-all ease-in duration-700 ${open ? '' : 'mx-[88rem] lg:mx-0' } `} >
          <div className='flex flex-col lg:flex-row items-center space-x-8 lg:-mx-[62rem] space-y-8 lg:space-y-0'>
            <Link id='line'  className='text-primary cursor-pointer'>Menu</Link>
            <Link id='line'  className='text-textColor cursor-pointer hover:text-primary'>Reservations</Link>
            <Link id='line'  className='text-textColor cursor-pointer hover:text-primary'>Call Chef</Link>
          </div>
    {/* button and icons */}
          <div className='flex items-center space-x-4 lg:-mx-[rem] '>
            <button className='btn hover:bg-orange-700'>Login</button>
    {/* icon and notification circle made with a div and the the position property */}
             <div className='flex items-center relative'>
              <BsBellFill className='cursor-pointer'/>
             <div className='text-[12px] text-white bg-primary rounded-full w-4 h-4 absolute left-2 bottom-3 '> <p className='px-1 -mt-[0.4rem]'>3</p></div>
             </div>
             <div className='flex items-center relative'>
              <BsFillCartFill className='cursor-pointer'/>
             <div className='text-[12px] text-white bg-primary rounded-full w-4 h-4 absolute left-2 bottom-3 '> <p className='px-1 -mt-[0.4rem]'>2</p></div>
             </div>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar