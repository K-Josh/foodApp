// import  { useState } from "react";
import { Box, Button, Flex, Image, Show, Text,} from "@chakra-ui/react";
import {FaHeart, FaLocationArrow} from 'react-icons/fa'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { ButtonHero, HeadingOne, SmallCircles } from "./Components";

const Carousel = () => {
  return (
  <div className="min-h-screen">
   <Flex direction={{base:'column', md:'row'}} alignItems={{sm:'center',base:'center',md:'inherit'}} margin={{md:'2rem'}} justifyContent={'center'} mt={{base:'4rem',md:'4rem'}} >
        <Flex className="lg:space-x-[16rem] lg:max-w-screen lg:my-12" justifyContent={'center'} >
        <Box className="lg:mt-[3rem] lg:space-y-5 "> 
          <Show above="md">
             <HeadingOne />
             <ButtonHero/>
           </Show>
          </Box>
         <div className="relative ">
          <Box>
            <Flex>
              <Box position={'absolute'} left={{sm:'28.2rem',base:'20.6rem',md:'30.3rem'}} top={{sm:'-4rem', base:'-3rem',md:'-5rem'}} color={'orange.10'}><FaLocationArrow className="transition-all ease-in-out duration-300 -rotate-[45deg] lg:-rotate-[80deg]"/></Box>
               <Image 
                src="/Images/upward_Arrow.png"
                alt="arrow"
                position={'absolute'}
                w={{sm:'8.3rem',base:'4rem'}}
                left={{sm:'20rem',base:'17rem',md:'27rem'}} top={{sm:'-4rem',base:'-3rem'}}
                className="lg:rotate-[0deg] md:rotate-[380deg] rotate-[25deg] "
               />
        {/*Lady  */}
          <Box bg={'orange.10'} w={{sm:'20.1rem',base:'17.2rem', md:'26rem'}} h={{sm:'19rem',base:'17.2rem', md:'26rem'}}  rounded={'full'} position={'absolute'} top={{sm:'2rem',base:'4rem', md:''}} right={{sm:'1.9rem',base:'3.7rem',md:'3rem'}}>
           <Box position={'absolute'} bottom={{sm:'23rem',base:'20rem', md:'31rem'}} right={{sm:'9rem',base:'7.8rem',md:'12rem'}}>
           🔥
           </Box>
           <Image 
             src="/Images/leaf.png"
             alt="leaf"
             position={'absolute'}
             w={{sm:'8rem',base:'5.7rem',md:''}}
             left={{sm:'13rem',base:'12.4rem', md:'18rem'}}
             top={{sm:"-5rem",base:'-3px',md:''}}
           />
           <Image 
            src="/Images/Mint.png"
            position={'absolute'}
            w={{base:'5rem',sm:'12rem',md:''}}
            right={{base:'-3rem',sm:'-9rem',md:''}}
            top={{base:'10rem',sm:'12rem',md:''}}
           />
           {/* lady */}
           <Image 
             src="/Images/Lady.png"
             alt="satisfied-lady"
             rounded={'full'}
             w={{sm:'19.3rem',base:'16.5rem', md:'29rem'}}
             h={{sm:'24rem',base:'21rem', md:'30.8rem'}}
             position={'absolute'}
             top={{sm:'-4.1rem',base:'-3rem', md:'-4.9rem'}} right={{sm:'6px',base:'4px', md:'1px'}}
            />

            <Flex>
              <Box bg={'whiteAlpha.900'} w={{base:'8rem',sm:'10rem'}} h={{sm:'3.8rem',base:'3.5rem'}} p={1} rounded={'lg'} position={'absolute'} left={{base:'-1.3rem',sm:'-8rem', md:'-3rem'}} top={{sm:'4rem',base:'5rem',md:''}}  className="cursor-pointer hover:scale-110 transition-all ease-in duration-500  ">
                <Flex className="md:space-x-4 space-x-2">
                 <Image 
                  src="/Images/pizza.png"
                  alt="pizza"
                  w={{sm:'3rem',base:'2.7rem'}}
                  h={{sm:'3rem',base:'2.7rem'}}
                />
                 <Flex direction={'column'}>
                  <Text color={'blackAlpha.900'} fontWeight={'semibold'} fontSize={'12px'}>Italian Pizza</Text>
                  <Flex>
                   <AiFillStar className="text-yellow text-sm"/>
                  <AiFillStar className="text-yellow text-sm"/>
                  <AiFillStar className="text-yellow text-sm"/>
                  <AiFillStar className="text-yellow text-sm"/>
                  <AiOutlineStar className="text-yellow text-sm"/>
                 </Flex>
                 <Text color={'blackAlpha.900'} fontSize={'sm'} fontWeight={'semibold'}><span className="md:text-sm text-xs">$</span>9.50</Text>
               </Flex>
               </Flex>
              </Box>

              <Box bg={'whiteAlpha.900'} w={{sm:'13rem',base:'10.4rem'}} h={{sm:'3rem'}} p={0} rounded={'2xl'} position={'absolute'} left={{sm:'15rem',base:'3.4rem', md:'18rem'}} top={{sm:'3rem',base:'14.5rem',md:'4rem'}}  className="cursor-pointer hover:scale-110 transition-all ease-in duration-500  ">
            <Flex className="md:space-x-2">
              <Image 
                  src="/Images/ya.png"
                  alt="pizza"
                  w={{sm:'3rem',base:'2rem'}}
                  h={{sm:'3rem',base:'2rem'}}
                />
                 <Flex direction={'column'}>
                  <Text color={'blackAlpha.900'} fontWeight={'semibold'} fontSize={{sm:'12px',base:'11px'}}>Our Happy Customers</Text>
                  <Flex alignItems={'center'} className="space-x-1">
                  <AiFillStar className="text-yellow md:text-sm text-xs"/>
                 <Text color={'blackAlpha.900'} fontSize={{sm:'sm',base:'xs'}} fontWeight={'semibold'}>4.9</Text>
                 <Text color={'gray.500'} fontSize={{sm:'sm',base:'xs'}} >(1.989 reviews)</Text>
                  </Flex>
               </Flex>
              </Flex>
              </Box>
            </Flex>
          </Box>
         </Flex>

           <Box w={{base:'24rem',md:'32rem'}}>
            <Image 
            src="/Images/ellipse.png"
            w={{sm:'100%',base:'90%', md:'100%'}}
            h={{base:'22rem', md:'25rem'}}
            position={'absolute'}
            top={{base:'4rem', md:'6.5rem'}} left={{sm:'-0rem',base:'1rem', md:'0.1rem'}}
           />
           </Box>
 {/* plates of food we set a defined w and height for all viewports */}
           <Box>
             <Flex>
               <Image 
                src="/Images/plate_1.png"
                alt="food"
                w={{sm:'7rem',base:'6rem',md:'9rem'}}
                position={'absolute'}
                top={{sm:'14rem',base:'17rem',md:'20rem'}}
                right={{sm:'19rem',base:'17rem',md:'23rem'}}
               />
               <Image 
                src="/Images/plate_2.png"
                alt="food"
                w={{sm:'6.4rem',base:'5rem',md:'7.8rem'}}
                position={'absolute'}
                top={{sm:'20rem',base:'21.2rem',md:'25rem'}}
                right={{sm:'13rem',base:'12.7rem',md:'15rem'}}
               />
               <Image 
                src="/Images/plate_3.png"
                alt="food"
                w={{sm:'6.5rem',base:'5rem',md:'8rem'}}
                position={'absolute'}
                top={{sm:'14rem',base:'18rem',md:'19rem'}}
                right={{sm:'-1rem',base:'2rem',}}
               />
               <Image 
                src="/Images/plate_4.png"
                alt="food"
                w={{sm:'5.8rem',base:'5rem',md:'7.5rem'}}
                position={'absolute'}
                top={{sm:'20.5rem',base:'21.2rem',md:'25rem'}}
                right={{sm:'4rem',base:'6rem',md:'5rem'}}
               />
             </Flex>
           </Box>
          </Box>
         </div>
        </Flex>

          <Box my={{sm:'30rem',base:'30.3rem', md:'-2rem'}}>
             <Flex alignItems={'center'} gap={{sm:'22rem',base:'8rem'}} px={3}>
              <Box ml={{base:'2rem',sm:''}} className="lg:hidden">
              <Button size={{sm:'md',base:'sm'}} gap={2} rounded={'full'} bg={'pink.100'} >
                <span className="w-7 h-7 bg-red-600 rounded-full ">
                  <FaHeart className="text-yellow m-1 text-center text-[1.3rem]"/>
                </span>
                <span className="text-black text-xs md:text-sm">People Trust us</span></Button>
              </Box>
              <div className="lg:hidden -rotate-[60deg] ">
               <Image 
                 src="/Images/Orange.png"
                 alt="orange"
                 w={{sm:'',base:'4rem'}}
                 className=""
                 />
              </div>
             </Flex>
    {/* heading and input text on smaller screens */}
             <Flex>
               <Box alignItems={{base:'center'}} className="lg:hidden space-y-3">
                <Box ml={{base:'2rem',sm:'0rem'}}>
                <HeadingOne />
                </Box>
                 <Box ml={{base:'2rem',sm:'0rem'}}>
                  <ButtonHero/>
                 </Box>
               </Box>
             </Flex>
          </Box>
        </Flex>
        <Box mt={'-15rem'} mr={'87rem'}>
          <Show above="md">
          <SmallCircles/>
          </Show>
          
        </Box>
  </div>
  )
}
// color for clock background {#FF4040}
// 
export default Carousel