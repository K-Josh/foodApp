import { useState } from "react"
import { FaArrowUp } from "react-icons/fa"
import { Link } from "react-scroll"

const ScrollUp = () => {
  const [scroll, setScroll] = useState()
  return (
    <div className="scroll-smooth">
        <Link to="" 
             activeClass='active'
              smooth={true}
              spy={true}  
              onClick={()=>setScroll(scroll)}
              className={`fixed ${scroll >= 250 ? '-bottom-1/2' : 'bottom-4'} shadow-sm hover:translate-y-1 ease-in duration-200 px-4 py-2 cursor-pointer`}>
          <FaArrowUp className="bg-yellow rounded-full w-[2rem] h-[2rem] text-sm p-1 text-black/80"/>
        </Link>
    </div>
  )
}

export default ScrollUp