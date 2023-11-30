 import { Box, Show, VStack, Flex, Image, Input, Text, useColorMode, Button} from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
 import {Link} from 'react-scroll'
 import { AiFillStar } from "react-icons/ai"
import { foodOffers } from '../Data/Data'
import { useState, useEffect } from 'react'
 
 // links
 export const Links = () => {
    return(
        <div className='font-primary whitespace-nowrap'>
         <Flex gap={4} fontSize={{base:'14px',sm:'18px',md:'20px',}} direction={{base: 'column',md:'row'}}>
            <Link 
                to='offers' 
                offset={-120}
                  activeClass='active'
                  smooth={true}
                  spy={true} 
                  className='cursor-pointer font-bold'>
                  Today Special Offers
              </Link>
           <Link 
               to='services'
                offset={90}
                  activeClass='active'
                  smooth={true}
                  spy={true} className='cursor-pointer font-semibold'>
              Why FoodHut
              </Link>
           <Link 
             to='menu' 
              offset={90}
              activeClass='active'
              smooth={true}
              spy={true}
             className='cursor-pointer font-semibold'>
             Our Menu
              </Link>
           <Link 
              to='food' 
              className='cursor-pointer font-semibold'>
              Our Popular Food
              </Link>
       </Flex>   
     </div>
    )
}

export const HeadingOne = () => {
    const {colorMode} = useColorMode()
 return (
    <Flex direction={'column'} alignItems={{base:'center',sm:'start'}} px={{base:''}} className='space-y-3 relative'>
     {colorMode === 'dark' ? 
      <>
     <Text w={{sm:'479px',base:'379px',md:'530px'}}>
      <h1 className='lg:text-[3.5rem] font-bold text-[3rem] text-white px-3 lg:px-0'>
       We&apos;re <span className='text-orange'>Serious</span> For <span className='text-orange'>Food</span> & <span className='text-yellow'>Delivery.</span>
      </h1>
         <Image 
            src='/Images/Decore.png'
            alt='line'
            w={{sm:'19rem', base:'12rem', md:'20rem'}}
            position={'absolute'}
            right={{sm:'2rem',base:'10rem',md:'0.5rem'}}
         />
     </Text>
      <Text w={{base:'370px',sm:'379px',md:'472px'}} px={{base:'10px'}} fontSize={{base:'17px',md:'20px'}} color={'white'}>
       Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
      </Text> 
      </>
      : 
      <>
      <Text w={{sm:'479px',base:'379px',md:'530px'}}>
      <h1 className='lg:text-[3.5rem] font-bold text-[3rem] px-3 lg:px-0'>
       We&apos;re <span className='text-orange'>Serious</span> For <span className='text-orange'>Food</span> & <span className='text-yellow'>Delivery.</span>
      </h1>
         <Image 
            src='/Images/Decore.png'
            alt='line'
            w={{sm:'19rem', base:'12rem', md:'20rem'}}
            position={'absolute'}
            right={{sm:'2rem',base:'10rem',md:'0.5rem'}}
         />
     </Text>
      <Text w={{base:'370px',sm:'379px',md:'472px'}} px={{base:'10px'}} fontSize={{base:'17px',md:'20px'}}>
       Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
      </Text>
      </>}
      {colorMode === 'dark' ? 
      <Box px={{base:'12px'}} className='flex items-center relative'>
      <span className='text-xl absolute left-[2rem]'><FaSearch /></span> 
       <Input 
       type='search'
       rounded={'full'}
       w={{sm:'23rem',base:'18.5rem',md:'26rem'}}
       h={'3rem'}
       px={12}
       border={'1px'}
       borderColor={'gray.500'}
       focusBorderColor='yellow.10'
       placeholder='Search for food'
       className='placeholder:p-1 cursor-pointer'
      />  
      <Box position={'relative'} rounded={'full'} bg={'yellow.10'} boxSize={{base:'2.4rem',sm:'2.3rem',md:''}} px={2} py={2} right={{base:'3rem',sm:'3rem',md:'3rem'}}>
       <span className='text-xl'><FaSearch /></span>
      </Box> 
      </Box> 
      : 
      <Box px={{base:'12px'}} className='flex items-center relative'>
      <span className='text-xl absolute left-[2rem]'><FaSearch /></span> 
       <Input 
       type='search'
       rounded={'full'}
       h={'3rem'}
       w={{sm:'25rem',base:'18.5rem',md:'26rem'}}
       px={12}
       border={'1px'}
       borderColor={'gray.500'}
       focusBorderColor='yellow.10'
       placeholder='Search for food'
       className='placeholder:p-1 cursor-pointer'
      />  
      <Box position={'relative'} rounded={'full'} bg={'yellow.10'} boxSize={{base:'2.4rem',sm:'2.3rem',md:''}} px={2} py={2} right={{base:'3rem',sm:'3rem',md:'3rem'}}>
       <span className='text-xl'><FaSearch /></span>
      </Box> 
      </Box>
      }
    </Flex>
 )
} 

export const HeadingTwo = () => {
    const {colorMode} = useColorMode()
    return (
        <>
         {colorMode === 'dark' ? 
         <Box className='flex flex-col items-center'>
          <Text w={{sm:'354px',base:'353px',}} textAlign={'center'} ml={{base:'11rem',sm:'10rem',md:'-4rem'}}>
          <h1 className='lg:text-[3.5rem] lg:whitespace-nowrap font-bold text-[3rem] text-white whitespace-break'>
         Today <span className='text-orange'>Special</span> Offers
          </h1>
        </Text> 
          <Text color={'white'} w={{base:'332px',sm:'494px', md:'685px'}} textAlign={'center'} className='text-[18px] lg:text-[20px] ml-[11rem] lg:ml-[9rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </Text>
        </Box>:
        <Box className='flex flex-col items-center'>
          <Text w={{sm:'354px',base:'353px',}} textAlign={'center'} ml={{base:'11rem',sm:'10rem',md:'-4rem'}}>
          <h1 className='lg:text-[3.5rem] lg:whitespace-nowrap font-bold text-[3rem] text-black whitespace-break'>
         Today <span className='text-orange'>Special</span> Offers
          </h1>
        </Text> 
          <Text color={'black'} w={{base:'332px',sm:'424px', md:'685px'}} textAlign={'center'} className='text-[18px] lg:text-[20px] ml-[11rem] lg:ml-[9rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </Text>
        </Box>
         }
        </>
    )
}

export const HeadingThree = () => {
    const {colorMode} = useColorMode()
    return (
        <>
        {colorMode === 'dark' ? 
         <>
      <Flex direction={'column'}>
        <Text w={{sm:'380px',base:'379px',md:'630px'}}>
       <Text className='lg:text-[4rem] lg:leading-[4rem] font-bold text-[3rem] px-3 lg:px-0' >
       We are <span className='text-orange'>more</span> than <span className='text-yellow'>multiple</span> Service
       </Text>
       </Text>
       <Text w={{base:'',sm:381,md:'41rem'}} color={'whiteAlpha.800'}>
       This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
       </Text>
     </Flex> 
        </>
       : 
       <>
     <Flex direction={'column'}>
     <Text w={{sm:'380px',base:'379px',md:'630px'}}>
      <Text className='lg:text-[4rem] font-bold text-[3rem] px-3 lg:px-0'>
       We are <span className='text-orange'>more</span> than <span className='text-yellow'>multiple</span> Service
      </Text>
     </Text>
     <Text w={{base:'',sm:381,md:690}}>
     This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
     </Text>
     </Flex>
     </>
         } 
         </>
    )
}

export const ButtonHero = () => {
    const {colorMode} = useColorMode()
    return (
        <>
         {colorMode === 'dark' ? 
        <Box className='space-x-10' px={{base:'15px'}}>
          <Button color={'white'} rounded={'full'} size={{sm:'md',base:'sm',md:'lg'}} bg={'orange.10'} _hover={''} className='hover:bg-yellow hover:text-black '> 
        <span className='text-[15px] lg:text-[18px]'>Download App</span>
        </Button>
         <Button rounded={'full'} bg={'dark.10'} size={{sm:'md',base:'sm',md:'lg'}} justifyItems={'center'} ringOffsetColor={'orange.10'} className='space-x-2 text-[12px] lg:text-[18px] shadow-sm shadow-orange'>
            <BsFillPlayFill className='text-orange'/>
            <span className='text-white'>Watch Video</span>
         </Button>
        </Box>
         : 
        <Box className='space-x-10' px={{base:'15px'}}>
         <Button color={'white'} rounded={'full'} size={{sm:'md',base:'sm',md:'lg'}} bg={'orange.10'} _hover={''} className='hover:bg-yellow'> 
        <span className='text-[15px] lg:text-[18px] hover:text-black '>Download App</span>
         </Button>
         <Button rounded={'full'} bg={'whiteAlpha.700'} justifyItems={'center'} size={{sm:'md',base:'sm',md:'lg'}} className='shadow-sm shadow-orange space-x-2'>
            <BsFillPlayFill className='text-orange'/>
            <span className='text-gray-700 text-[12px] lg:text-[18px] opacity-75'>Watch Video</span>
         </Button>
        </Box>
        }
        </>
    )
}

export const Cards = () => {
    const {colorMode} = useColorMode()
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex(prevIndex => (prevIndex + 1) % foodOffers.length);
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval);
      }, [foodOffers.length]);

    return (
        <>
        {colorMode === 'dark' ? 
        <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'} gap={{base:1,md:5}}  mt={{base:'-3rem',sm:'',md:'-7rem'}} className='carousel_card-active'>
      {foodOffers.map((item, index)=> (
        activeIndex === index && (
         <div key={index} >
       <VStack>
        <Box  className=' cursor-pointer shadow-sm overflow-hidden transition-all duration-500 carousel_card-active ease-'>
         {/* image */}
         <Box position={'relative'} top={{base:'6rem',sm:'7rem',md:'5rem'}} right={{base:'-2.6rem',sm:'-2.5rem',md:'-1.4rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'12rem',sm:198,md:'14rem'}}
            h={{base:'12rem',sm:207,md:'14rem'}}  
           />
         </Box>

          <Box>
           <Box bgGradient={'linear(to-b,#ffff 0%,#F62F30 100%)'} className=" opacity-10" mt={{md:'-2rem'}} w={{base:'18rem',md:'20rem'}} h={{base:'19rem',sm:'22rem',md:'27rem'}} rounded={'xl'}>
           </Box>
          </Box>
    {/* avatar and ratings were put in one box and postion relative used */}
          <Flex justifyContent={'center'}>
          <Box className="flex items-center justify-center space-x-5" mt={{base:'-24rem',sm:'-29rem',md:'-35rem'}} left={{base:'3rem',sm:'4.5rem',md:'5rem'}} position={'relative'}>
           <Image 
          src={item.avatar}
          w={12}
          h={6}
          className=" cursor-pointer"
        />
        <Text className="flex items-center space-x-3">
          <span className="font-bold"><AiFillStar className="text-yellow text-[20px] lg:text-[22px]"/></span>
          <span className="font-bold text-white">{item.rating}</span>
        </Text>
         </Box>
         <Box className="flex items-center justify-center space-x-5 absolute" mt={{base:'-10rem',sm:'-11rem',md:'-13rem'}} left={{base:'',sm:'4rem',md:'2.3rem'}}>
         <Text textAlign={'center'} className="space-y-2 lg:space-y-1">
          <Text className="text-orange font-bold">{item.food}</Text>
          <Text w={{base:169,md:253}} className="text-[13px] font-semibold lg:text-[20px]">{item.text}</Text>
         </Text>
         </Box>
         <Box mt={{base:'-1rem',sm:'-1.5rem',md:'-2rem'}} left={{base:'-4.3rem',sm:'-4rem',md:'-4.5rem'}} position={'relative'}>
          <ButtonOffers />
         </Box>
         </Flex>
         </Box>
      </VStack>
        </div>
        )
      ))}
        </Flex>
        <Flex justifyContent={'center'} mt={12} className="space-x-3 cursor-pointer ">
         <Box w={3} h={3} bg={'orange.10'} rounded={'full'}/>
         {foodOffers.map((_, index) => (
            <Box key={index} w={3} h={3}
            bg={activeIndex === 'index' ? 'orange.10' : '#ffff'} rounded={'full'} onClick={()=> setActiveIndex(index)} className='pagination-dot pagination_active'/>
         ))}
         </Flex>
         </Box> 
        : 
        <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'} gap={{base:1,md:5}}  mt={{base:'-3rem',sm:'',md:'-7rem'}} className='carousel_card-active'>
      {foodOffers.map((item, index)=> (
        activeIndex === index && (
         <div key={index} >
       <VStack>
        <Box  className=' cursor-pointer shadow-sm overflow-hidden transition-all duration-300 carousel_card-active ease-in-out'>
         {/* image */}
         <Box position={'relative'} top={{base:'6rem',sm:'7rem',md:'5rem'}} right={{base:'-2.6rem',sm:'-2.5rem',md:'-1.4rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'12rem',sm:198,md:'14rem'}}
            h={{base:'12rem',sm:207,md:'14rem'}}  
           />
         </Box>
          <Box>
           <Box bgGradient={'linear(to-b,#ffff 0%,#F62F30 100%)'} className=" opacity-10" mt={{md:'-2rem'}} w={{base:'18rem',md:'20rem'}} h={{base:'19rem',sm:'22rem',md:'27rem'}} rounded={'xl'}>
           </Box>
          </Box>
    {/* avatar and ratings were put in one box and postion relative used */}
          <Flex justifyContent={'center'}>
          <Box className="flex items-center justify-center space-x-5" mt={{base:'-24rem',sm:'-29rem',md:'-35rem'}} left={{base:'3rem',sm:'4.5rem',md:'5rem'}} position={'relative'}>
           <Image 
          src={item.avatar}
          w={12}
          h={6}
          className=" cursor-pointer"
        />
        <Text className="flex items-center space-x-3">
          <span className="font-bold"><AiFillStar className="text-yellow text-[20px] lg:text-[22px]"/></span>
          <span className="font-bold text-black">{item.rating}</span>
        </Text>
         </Box>
         <Box className="flex items-center justify-center space-x-5 absolute" mt={{base:'-10rem',sm:'-11rem',md:'-13rem'}} left={{base:'',sm:'4rem',md:'2.3rem'}}>
         <Text textAlign={'center'} className="space-y-2 lg:space-y-1">
          <Text className="text-orange font-bold">{item.food}</Text>
          <Text w={{base:169,md:253}} className="text-[13px] font-semibold lg:text-[20px]">{item.text}</Text>
         </Text>
         </Box>
         <Box mt={{base:'-1rem',sm:'-1.5rem',md:'-2rem'}} left={{base:'-4.3rem',sm:'-4rem',md:'-4.5rem'}} position={'relative'}>
          <ButtonOffers />
         </Box>
         </Flex>
         </Box>
      </VStack>
        </div>
        )
      ))}
        </Flex>
        <Flex justifyContent={'center'} mt={12} className="space-x-3 cursor-pointer ">
         <Box w={3} h={3} bg={'orange.10'} rounded={'full'}/>
         {foodOffers.map((_, index) => (
            <Box key={index} w={3} h={3}
            bg={activeIndex === 'index' ? 'orange.10' : '#2F2F2F2F'} rounded={'full'} onClick={()=> setActiveIndex(index)} className='pagination-dot pagination_active'/>
         ))}
         </Flex>
         </Box>
         }
       </>
    )
}
export const ButtonOffers = () => {
    const {colorMode} = useColorMode()
    return (
        <>
         {colorMode === 'dark' ? 
        <Box className='space-x-10' px={{base:'15px'}}>
          <Button color={'white'} rounded={'full'} size={{sm:'md',base:'sm',md:'lg'}} bg={'orange.10'} _hover={''} className='hover:bg-yellow hover:text-black'> 
        <span className='text-[15px] lg:text-[18px]'>Order Now</span>
        </Button>
        </Box>
         : 
        <Box className='space-x-10' px={{base:'15px'}}>
         <Button color={'white'} rounded={'full'} size={{sm:'md',base:'sm',md:'lg'}} bg={'orange.10'} _hover={''} className='hover:bg-yellow'> 
        <span className='text-[15px] lg:text-[18px] hover:text-black'>Order Now</span>
         </Button>
        </Box>
        }
        </>
    )
}
export const ButtonServices = () => {
  const {colorMode} = useColorMode()
  return (
      <>
       {colorMode === 'dark' ? 
      <Box className='space-x-10' px={{base:'15px'}}>
        <Button color={'white'} rounded={'full'} size={'sm'} bg={'orange.10'} _hover={''} className='hover:bg-yellow hover:text-black'> 
      <span className='text-[15px] '>About us</span>
      </Button>
      </Box>
       : 
      <Box className='space-x-10' px={{base:'15px'}}>
       <Button color={'white'} rounded={'full'} size={'sm'} bg={'orange.10'} _hover={''} className='hover:bg-yellow'> 
      <span className='text-[15px] hover:text-black'>About us</span>
       </Button>
      </Box>
      }
      </>
  )
}
export const ButtonFooter = () => {
  const {colorMode} = useColorMode()
  return (
      <>
       {colorMode === 'dark' ? 
      <Box className='space-x-10' px={{base:'11px'}}>
        <Button color={'white'} rounded={'full'} size={'sm'} bg={'orange.10'} _hover={''} className='hover:bg-yellow hover:text-black '> 
      <span className='text-[13px] lg:text-[15px]'>Subscribe</span>
      </Button>
      </Box>
       : 
      <Box className='' px={{base:'11px'}}>
       <Button color={'white'} rounded={'full'} size={'sm'} bg={'orange.10'} _hover={''} className='hover:bg-yellow'> 
      <span className='text-[13px] lg:text-[15px] hover:text-black '>Subscribe</span>
       </Button>
      </Box>
      }
      </>
  )
}

export const SmallCircles = () => {
    return (
        <Show above="md">
          <VStack >
          <Box w={3} h={3} rounded={'full'} bg={'yellow.10'}></Box>
          <Box w={2} h={2} rounded={'full'} bg={'yellow.10'}></Box>
          <Box w={1} h={1} rounded={'full'} bg={'yellow.10'}></Box>
           <Box w={0.5} h={0.5} rounded={'full'} bg={'yellow.10'}></Box>
             <FaChevronDown className='text-orange'/>
              </VStack>
        </Show>
    )
}

