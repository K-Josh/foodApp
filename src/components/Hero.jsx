// import  { useState } from "react";
import { Box, Flex, Image, Text} from "@chakra-ui/react";
import {FaLocationArrow} from 'react-icons/fa'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Carousel = () => {

  return (
       <Flex direction={{base:'column', md:'row'}} alignItems={'center'} margin={{md:'2rem'}} justifyContent={'center'} mt={'4rem'} pos={'relative'}>
         
         <Box position={'relative'}>
            <Flex>
              <Box position={'absolute'} left={{sm:'30rem',base:'20.6rem',md:'39.1rem'}} top={{sm:'-4rem', base:'-3rem',md:'-1rem'}} color={'orange.10'}><FaLocationArrow className="transition-all ease-in-out duration-300 -rotate-[45deg] lg:-rotate-[32deg]"/></Box>
               <Image 
                src="/Images/upward_Arrow.png"
                alt="arrow"
                position={'absolute'}
                w={{sm:'8.3rem',base:'4rem'}}
                left={{sm:'22rem',base:'17rem',md:'27rem'}} top={{sm:'-4rem',base:'-3rem'}}
                className="lg:rotate-[410deg] md:rotate-[390deg] rotate-[24deg] "
               />             
            <Box bg={'orange.10'} w={{sm:'20.1rem',base:'17.2rem', md:'20rem'}} h={{sm:'19rem',base:'17.2rem', md:'20rem'}}  rounded={'full'} position={'absolute'} top={{sm:'2rem',base:'4rem', md:''}} right={{sm:'1.9rem',base:'3.7rem'}}>
           <Box position={'absolute'} bottom={{sm:'23rem',base:'20rem', md:'24rem'}} right={{sm:'9rem',base:'7.8rem'}}>🔥</Box>
           <Image 
             src="/Images/leaf.png"
             alt="leaf"
             position={'absolute'}
             w={{sm:'9rem',base:'5.7rem',md:''}}
             left={{sm:'13rem',base:'12.4rem', md:''}}
             top={{sm:"-5rem",base:'-3px',md:''}}
           />
           <Image 
             src="/Images/Lady.png"
             alt="satisfied-lady"
             rounded={'full'}
             w={{sm:'19.3rem',base:'16.5rem', md:'19.8rem'}}
             h={{sm:'24rem',base:'21rem', md:'24.5rem'}}
             position={'absolute'}
             top={{sm:'-4.1rem',base:'-3rem', md:'-4rem'}} right={{sm:'6px',base:'4px', md:'1px'}}
            />

            <Flex>
              <Box bg={'whiteAlpha.900'} w={{base:'8rem',sm:'10rem'}} h={{sm:'3.8rem',base:'3.5rem'}} p={1} rounded={'lg'} position={'absolute'} left={{base:'-1.3rem',sm:'-8rem', md:''}} top={{sm:'4rem',base:'5rem',md:''}}  className="cursor-pointer hover:scale-110 transition-all ease-in duration-500  ">
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
                   <AiFillStar className="text-yellow-400 text-sm"/>
                  <AiFillStar className="text-yellow-400 text-sm"/>
                  <AiFillStar className="text-yellow-400 text-sm"/>
                  <AiFillStar className="text-yellow-400 text-sm"/>
                  <AiOutlineStar className="text-yellow-400 text-sm"/>
                 </Flex>
                 <Text color={'blackAlpha.900'} fontSize={'sm'} fontWeight={'semibold'}><span className="md:text-sm text-xs">$</span>9.50</Text>
               </Flex>
               </Flex>
              </Box>
              <Box bg={'whiteAlpha.900'} w={{sm:'13rem',base:'10.4rem'}} h={{sm:'3rem'}} p={0} rounded={'2xl'} position={'absolute'} left={{sm:'15rem',base:'3.4rem', md:''}} top={{sm:'3rem',base:'14.5rem',md:''}}  className="cursor-pointer hover:scale-110 transition-all ease-in duration-500  ">
            <Flex className="md:space-x-2">
              <Image 
                  src="/Images/ya.png"
                  alt="pizza"
                  w={{sm:'3rem',base:'2rem'}}
                  h={{sm:'3rem',base:'2rem'}}
                />
                 <Flex direction={'column'}>
                  <Text color={'blackAlpha.900'} fontWeight={'semibold'} fontSize={{sm:'12px',base:'11px'}}>Our Happy Customers</Text>
                  <Flex alignItems={'center'} className="space-x-2">
                  <AiFillStar className="text-yellow-400 md:text-sm text-xs"/>
                 <Text color={'blackAlpha.900'} fontSize={{sm:'sm',base:'xs'}} fontWeight={'semibold'}>4.9</Text>
                 <Text color={'gray.500'} fontSize={{sm:'sm',base:'xs'}} >(1.989 reviews)</Text>
                  </Flex>
               </Flex>
              </Flex>
              </Box>
            </Flex>
          </Box>
             
           </Flex>
           <Box w={{base:'24rem'}}>
            <Image 
            src="/Images/ellipse.png"
            w={{sm:'100%',base:'90%', md:'100%'}}
            h={{base:'22rem', md:'25rem'}}
            position={'absolute'}
             top={{base:'4rem', md:'1rem'}} left={{sm:'-0rem',base:'1rem', md:'-'}}
           />
           </Box>
           <Box>
             <Flex>
               <Image 
                src="/Images/plate_1.png"
                alt="food"
                w={{sm:'7rem',base:'6rem'}}
                position={'absolute'}
                top={{sm:'14rem',base:'17rem'}}
                right={{sm:'19rem',base:'17.6rem'}}
               />
               <Image 
                src="/Images/plate_2.png"
                alt="food"
                w={{sm:'6.4rem',base:'5rem'}}
                position={'absolute'}
                top={{sm:'20rem',base:'21.2rem'}}
                right={{sm:'13rem',base:'12.7rem'}}
               />
               <Image 
                src="/Images/plate_3.png"
                alt="food"
                w={{sm:'6.5rem',base:'5rem'}}
                position={'absolute'}
                top={{sm:'14rem',base:'18rem'}}
                right={{sm:'-1rem',base:'2rem'}}
               />
               <Image 
                src="/Images/plate_4.png"
                alt="food"
                w={{sm:'5.8rem',base:'5rem'}}
                position={'absolute'}
                top={{sm:'20.5rem',base:'21.2rem'}}
                right={{sm:'4rem',base:'6rem'}}
               />
             </Flex>
           </Box>
         </Box>
       </Flex>

  )
}
// color for clock background {#FF4040}
// boxShadow={'0 0 2px 2px #F54748'}
export default Carousel