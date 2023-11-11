 import { Box, Show, VStack, Flex, Image, Input, Text, useColorMode, Button} from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
 import {Link} from 'react-scroll'
 import { AiFillStar } from "react-icons/ai"
import { foodOffers } from '../Data/Data'
 
 
 // links
 export const Links = () => {
    return(
        <div className='font-primary whitespace-nowrap'>
         <Flex gap={4} fontSize={{base:'14px',sm:'18px',md:'22px',}} direction={{base: 'column',md:'row'}}>
            <Link to='offers' offset={-200}
                  activeClass='active'
                  smooth={true}
                  spy={true} className='cursor-pointer font-bold'>Today Special Offers</Link>
           <Link to='#' className='cursor-pointer font-bold'>Why FoodHut</Link>
           <Link to='#' className='cursor-pointer font-bold'>Our Menu</Link>
           <Link to='#' className='cursor-pointer font-bold'>Our Popular Food</Link>
       </Flex>   
     </div>
    )
}

export const HeadingOne = () => {
    const {colorMode} = useColorMode()
 return (
    <Flex direction={'column'} px={{base:''}} className='space-y-3 relative'>
     {colorMode === 'dark' ? 
      <>
     <Text w={{sm:'479px',base:'379px',md:'530px'}}>
      <h1 className='lg:text-[4rem] font-bold text-[3rem] text-white px-3 lg:px-0'>
       We&apos;re <span className='text-orange'>Serious</span> For <span className='text-orange'>Food</span> & <span className='text-yellow'>Delivery.</span>
      </h1>
         <Image 
            src='/Images/Decore.png'
            alt='line'
            w={{sm:'19rem', base:'12rem', md:'22rem'}}
            position={'absolute'}
            right={{sm:'2rem',base:'10rem',md:'-3rem'}}
         />
     </Text>
      <Text w={{base:'379px',md:'517px'}} px={{base:'10px'}} fontSize={{base:'17px',md:'25px'}} color={'white'}>
       Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
      </Text> 
      </>
      : 
      <>
      <Text w={{sm:'479px',base:'379px',md:'530px'}}>
      <h1 className='lg:text-[4rem] font-bold text-[3rem] px-3 lg:px-0'>
       We&apos;re <span className='text-orange'>Serious</span> For <span className='text-orange'>Food</span> & <span className='text-yellow'>Delivery.</span>
      </h1>
         <Image 
            src='/Images/Decore.png'
            alt='line'
            w={{sm:'19rem', base:'12rem', md:'22rem'}}
            position={'absolute'}
            right={{sm:'2rem',base:'10rem',md:'-3rem'}}
         />
     </Text>
      <Text w={{base:'379px',md:'517px'}} px={{base:'10px'}} fontSize={{base:'17px',md:'24px'}}>
       Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
      </Text>
      </>}
      {colorMode === 'dark' ? 
      <Box px={{base:'12px'}} className='flex items-center relative'>
      <span className='text-xl absolute left-[2rem]'><FaSearch /></span> 
       <Input 
       type='search'
       rounded={'full'}
       w={{sm:'25rem',base:'18.5rem',md:'28rem'}}
       h={'3rem'}
       px={12}
       border={'1px'}
       borderColor={'gray.500'}
       focusBorderColor='yellow.10'
       placeholder='Search for food'
       className='placeholder:p-1 cursor-pointer'
      />  
      <span className='text-xl bg-yellow rounded-full p-2 absolute lg:right-[5.4rem] right-[5rem] '><FaSearch /></span> 
      </Box> : 
      <Box px={{base:'12px'}} className='flex items-center relative'>
      <span className='text-xl absolute left-[2rem]'><FaSearch /></span> 
       <Input 
       type='search'
       rounded={'full'}
       h={'3rem'}
       w={{sm:'25rem',base:'18.5rem',md:'28rem'}}
       px={12}
       border={'1px'}
       borderColor={'gray.500'}
       focusBorderColor='yellow.10'
       placeholder='Search for food'
       className='placeholder:p-1 cursor-pointer'
      />  
      <span className='text-xl bg-yellow rounded-full p-2 absolute lg:right-[5.4rem] right-[5rem] '><FaSearch /></span> 
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
          <Text w={{sm:'354px',base:'353px',}} textAlign={'center'} ml={{base:'9rem',sm:'10rem',md:'-6rem'}}>
          <h1 className='lg:text-[4rem] lg:whitespace-nowrap font-bold text-[3rem] text-white whitespace-break'>
         Today <span className='text-orange'>Special</span> Offers
          </h1>
        </Text> 
          <Text color={'white'} w={{base:'372px',sm:'424px', md:'840px'}} textAlign={'center'} className='text-[18px] lg:text-[24px] ml-[11rem] lg:ml-[9rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </Text>
        </Box>:
         <Box className='flex flex-col items-center'>
          <Text textAlign={'center'} w={{sm:'353px',base:'353px',md:'530px'}} ml={{base:'9rem',sm:'10rem',md:'-6rem'}}>
        <h1 className='lg:text-[4rem] lg:whitespace-nowrap font-bold text-[3rem] text-black px-3 lg:px-0'>
        Today <span className='text-orange'>Special</span> Offers
        </h1>
          </Text>
        <Text color={'blackAlpha.800'} w={{base:'372px',sm:'424px', md:'856px'}} textAlign={'center'} className='text-[18px] lg:text-[24px] ml-[11rem] lg:ml-[9rem]'>
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
       <Text className='lg:text-[4rem] font-bold text-[3rem] px-3 lg:px-0'>
       We are <span className='text-orange'>more</span> than <span className='text-yellow'>multiple</span> Service
       </Text>
       </Text>
       <Text w={{base:'',sm:381,md:690}}>
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
          <Button color={'white'} rounded={'full'} size={{sm:'md',base:'sm',md:'lg'}} bg={'orange.10'} _hover={''} className='hover:bg-yellow hover:text-black'> 
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
        <span className='text-[15px] lg:text-[18px] hover:text-black'>Download App</span>
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
    return (
        <>
        {colorMode === 'dark' ? 
         <>
         <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>

        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'} gap={{base:1,md:5}}  mt={{md:'-8rem'}}>
      {foodOffers.map((item, index)=> (
       <div key={index} >
       <VStack className=' '>
        <Box position={'relative'}  className=' cursor-pointer shadow-sm overflow-hidden transition-all duration-500'>
         {/* image */}
         <Box position={'relative'} top={{base:'6rem',sm:'7rem',md:'7rem'}} right={{base:'-2.6rem',sm:'-2.5rem',md:'-1.4rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'12rem',sm:198,md:'17rem'}}
            h={{base:'12rem',sm:207,md:'17rem'}}  
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
      ))}
     </Flex>
   </Box> 
         </>
        : 
        <>
         <Box className="group-hover:scale-90 transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>

        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'} gap={{base:1,md:5}}  mt={{md:'-8rem'}}>
      {foodOffers.map((item, index)=> (
       <div key={index} >
       <VStack className=' '>
        <Box position={'relative'}  className=' cursor-pointer shadow-sm overflow-hidden transition-all duration-500'>
         {/* image */}
         <Box position={'relative'} top={{base:'',sm:'7rem',md:'7rem'}} right={{base:'',sm:'-2.5rem',md:'-1.4rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'13rem',sm:198,md:'17rem'}}
            h={{base:'13rem',sm:207,md:'17rem'}}  
           />
         </Box>
          <Box>
           <Box bgGradient={'linear(to-b,#ffff 0%,#F62F30 100%)'} className=" opacity-10" mt={{md:'-2rem'}} w={{base:'12rem',sm:'18rem',md:'20rem'}} h={{base:'17rem',sm:'22rem',md:'27rem'}} rounded={'xl'}>
           </Box>
          </Box>
    {/* avatar and ratings were put in one box and postion relative used */}
          <Flex justifyContent={'center'}>
           <Box className="flex items-center justify-center space-x-5" mt={{base:'16rem',sm:'-29rem',md:'-35rem'}} left={{base:'',sm:'4.5rem',md:'5rem'}} position={'relative'}>
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
         <Box className="flex items-center justify-center space-x-5 absolute" mt={{base:'19rem',sm:'-11rem',md:'-13rem'}} left={{base:'',sm:'4rem',md:'2.3rem'}}>
         <Text textAlign={'center'} className="space-y-2 lg:space-y-1">
          <h1 className="text-orange font-bold">{item.food}</h1>
          <Text w={{base:169,md:253}} className="text-[13px] font-semibold lg:text-[20px]">{item.text}</Text>
         </Text>
         </Box>
         <Box mt={{base:'26rem',sm:'-1.5rem',md:'-2rem'}} left={{base:'',sm:'-4rem',md:'-4.5rem'}} position={'relative'}>
          <ButtonOffers />
         </Box>
         </Flex>
         </Box>
      </VStack>
       </div>
      ))}
     </Flex>
   </Box> 
         </>
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

