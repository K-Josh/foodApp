import { Box, Flex, Image, Show, } from "@chakra-ui/react"
import { Cards, HeadingTwo } from "./Components"
// import Slider from 'react-slick';
// import { useState } from "react";




const Offers = () => {
  // const [slider, setSlider] = useState<Slider | null
  return (
    <>
    <Flex className="space-y-5 group" direction={'column'} id="offers">
     <Box mt={{sm:'-8rem', base:'-10rem',md:'-7rem'}} className="flex justify-center items-center max-h-screen">
       <Flex ml={'1rem'} mx={'-6rem'} direction={'column'} >
        <Show above="md">
          <Image 
            src="/Images/Layer-blur.png"
          />
        </Show>
       </Flex>
      <Flex direction={'column'} mx={{base:'',sm:'4rem',md:'15rem'}}>
       <Show above="md">
         <HeadingTwo />
       </Show>
       <Box ml={{base:'2rem',sm:'0rem'}} className="lg:hidden">
         <HeadingTwo />
       </Box>
      </Flex>
     </Box>
     <div className="">
       <Show above="md">
        <Cards />
       </Show>
       </div>
      <div className="lg:hidden flex-1 overflow-hidden relative`">
       <Box className="carousel_card">
        <Cards />
       </Box>
       <Box className="carousel_card-active">
        <Cards />
       </Box>
       <Flex justifyContent={'center'} mt={12} className="space-x-3 carousel-pagination cursor-pointer">
         <Box w={3} h={3} bg={'orange.10'} className="pagination_active" rounded={'full'}></Box>
         <Box w={3} h={3} bg={'#2F2F2FE5'} className="pagination_active" rounded={'full'}></Box>
         <Box w={3} h={3} bg={'#2F2F2FE5'} className="pagination_active" rounded={'full'}></Box>
         <Box w={3} h={3} bg={'#2F2F2FE5'} className="pagination_active" rounded={'full'}></Box>
       </Flex>
      </div>
      <Box position={'relative'} right={{sm:'-38rem',base:'-17rem',md:'-92rem'}} className="">
        <Image 
         mt={12}
          src="/Images/rosemary.png"/>
      </Box>
    </Flex>
    </>
  )
}

export default Offers
