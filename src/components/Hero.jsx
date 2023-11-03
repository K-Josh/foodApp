// import  { useState } from "react";
import { Box, Flex, Image, Text} from "@chakra-ui/react";
import {FaLocationArrow} from 'react-icons/fa'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Carousel = () => {

  return (
       <Flex direction={{base:'column', md:'row'}} alignItems={'center'} margin={{md:'2rem'}} justifyContent={'center'} mt={'4rem'} pos={'relative'}>
         
         <Box position={'relative'}>
           <Flex>
             <Box>
               <Box position={'absolute'} left={{base:'30rem', md:''}} top={{base:'-4rem', md:''}} color={'orange.10'}><FaLocationArrow className="transition-all ease-in-out duration-300 -rotate-[45deg]"/></Box>
               <Image 
                src="/Images/upward_Arrow.png"
                alt="arrow"
                position={'absolute'}
                left={{base:'22rem',}} top={{base:'-4rem', md:''}}
                className="rotate-[390deg] "
               />
             </Box>
            <Box bg={'orange.10'} w={{base:'20.1rem', md:'20rem'}} h={{base:'19rem', md:'20rem'}}  rounded={'full'} position={'absolute'} top={{base:'2rem', md:''}} right={{base:'1.9rem'}}>
           <Box position={'absolute'} bottom={{base:'23rem', md:'24rem'}} right={'9rem'}>🔥</Box>
           <Image 
             src="/Images/leaf.png"
             alt="leaf"
             position={'absolute'}
             left={{base:'13rem', md:''}}
             top={{base:"-5rem",md:''}}
           />
           <Image 
             src="/Images/Lady.png"
             alt="satisfied-lady"
             rounded={'full'}
             w={{base:'19.3rem', md:'19.8rem'}}
             h={{base:'24rem', md:'24.5rem'}}
             position={'absolute'}
             top={{base:'-4.1rem', md:'-4rem'}} right={{base:'6px', md:'1px'}}
            />

            <Flex cursor={'pointer'} className="hover:scale-110">
              <Box bg={'whiteAlpha.900'} w={'10rem'} h={'3.8rem'} p={1} rounded={'lg'} position={'absolute'} left={{base:'-8rem', md:''}} top={{base:'4rem',md:''}}  className="transition-all ease-in duration-500  ">
                <Flex className="space-x-4">
                 <Image 
                  src="/Images/pizza.png"
                  alt="pizza"
                  w={'3rem'}
                  h={'3rem'}
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
                 <Text color={'blackAlpha.900'} fontSize={'sm'} fontWeight={'semibold'}><span className="text-sm">$</span>9.50</Text>
               </Flex>
              </Flex>

              </Box>
              <Box bg={'whiteAlpha.900'} w={'13rem'} h={'3rem'} p={0} rounded={'2xl'} position={'absolute'} left={{base:'15rem', md:''}} top={{base:'3rem',md:''}}  className="transition-all ease-in duration-500  ">
            <Flex className="space-x-2">
                 <Image 
                  src="/Images/ya.png"
                  alt="pizza"
                  w={'3rem'}
                  h={'3rem'}
                />
                 <Flex direction={'column'}>
                  <Text color={'blackAlpha.900'} fontWeight={'semibold'} fontSize={'12px'}>Our Happy Customers</Text>
                  <Flex alignItems={'center'} className="space-x-2">
                  <AiFillStar className="text-yellow-400 text-sm"/>
                 <Text color={'blackAlpha.900'} fontSize={'sm'} fontWeight={'semibold'}>4.9</Text>
                 <Text color={'gray.500'} fontSize={'sm'} >(1.989 reviews)</Text>
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
            w={{base:'100%', md:'100%'}}
            h={{base:'22rem', md:'25rem'}}
            position={'absolute'}
             top={{base:'3rem', md:'1rem'}} left={{base:'-0rem', md:'-'}}
           />
           </Box>
         </Box>
       </Flex>

  )
}
// color for clock background {#FF4040}
// boxShadow={'0 0 2px 2px #F54748'}
export default Carousel