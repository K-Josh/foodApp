import { Box, Text, useColorMode, useColorModeValue, VStack, Flex, Image, Show, SimpleGrid } from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai"
import { ButtonOffers, Cards2 } from "./Components"
import {MenuPage} from '../Data/Data'

const Menu = () => {
    const {colorMode} = useColorMode()
    const color = useColorModeValue('white')
  return (
    <div id="menu" className="lg:my-[12rem] my-[2rem]">
      <Box className="flex items-center justify-center">
        <Text className={`${color ? 'text-black' : 'text-white'} font-bold text-center text-[1rem] lg:text-[2rem]`} w={{base:'7rem',md:'29rem'}} mb={14}>
            <span className="text-orange">Menu</span> That <span className="text-yellow">Always</span> Make You Fall In <span className="
            text-orange">Love</span>
        </Text>
      </Box>
     
        <Show above="md">
       {colorMode === 'dark' ? 
        <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <SimpleGrid columns={4} spacingX={4} gridRowGap={-4} justifyContent={'center'} alignItems={'center'} direction={{md:'row'}} mt={{base:'-3rem',sm:'',md:'-7rem'}} ml={{md:'-2rem'}}>
      {MenuPage.map((item, index)=> (
         <div key={index} >
       <VStack>
        <Box className=' cursor-pointer shadow-sm transition-all duration-500 ease-in'>
         {/* image */}
         <Box position={'relative'} top={{base:'6rem',sm:'7rem',md:'5rem'}} right={{base:'-2.6rem',sm:'-2.5rem',md:'-3rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'12rem',sm:198,md:'14rem'}}
            h={{base:'12rem',sm:207,md:'14rem'}}  
           />
         </Box>

          <Box ml={{md:'1rem'}}>
           <Box bgGradient={'linear(to-b,#ffff 0%,#F62F30 100%)'} className=" opacity-10" mt={{md:'-2rem'}} w={{base:'18rem',md:'18rem'}} h={{base:'19rem',sm:'22rem',md:'23rem'}} rounded={'xl'}>
           </Box>
          </Box>
    {/* avatar and ratings were put in one box and postion relative used */}
          <Flex justifyContent={'center'} position={'relative'}>
           <Box className="flex items-center justify-center space-x-5" mt={{base:'-24rem',sm:'-29rem',md:'-32rem'}} left={{base:'3rem',sm:'4.5rem',md:'5rem'}} position={'relative'}>
           <Image 
          src={item.avatar}
          w={12}
          h={6}
          className=" cursor-pointer"
        />
        <Text className="flex items-center space-x-3">
          <span className="font-bold"><AiFillStar className="text-yellow text-[20px] lg:text-[16px]"/>
          </span>
          <span className="font-bold text-white lg:text-[12px]">{item.rating}</span>
        </Text>
         </Box>
         <Box className="flex items-center justify-center space-x-5 absolute" mt={{base:'-10rem',sm:'-11rem',md:'-13rem'}} left={{base:'',sm:'4rem',md:'2.3rem'}}>
         <Text textAlign={'center'} className="space-y-2 lg:space-y-1">
          <Text className="text-orange font-bold">{item.food}</Text>
          <Text w={{base:169,md:253}} className="text-[13px] font-semibold lg:text-[18px]">{item.text}</Text>
         </Text>
         </Box>
         <Box mt={{base:'-1rem',sm:'-1.5rem',md:'-2rem'}} left={{base:'-4.3rem',sm:'-4rem',md:'-3.5rem'}} position={'relative'}>
          <ButtonOffers />
         </Box>
         </Flex>
         </Box>
      </VStack>
        </div>
        
      ))}
        </SimpleGrid>
         </Box>
       :
       <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <SimpleGrid columns={4} spacing='1px' rowGap={{md:'3px'}} justifyContent={'center'} alignItems={'center'} direction={{md:'row'}} mt={{base:'-3rem',sm:'',md:'-7rem'}} ml={{md:'-2rem'}}>
      {MenuPage.map((item, index)=> (
         <div key={index} >
       <VStack>
        <Box className=' cursor-pointer shadow-sm transition-all duration-500 ease-in'>
         {/* image */}
         <Box position={'relative'} top={{base:'6rem',sm:'7rem',md:'5rem'}} right={{base:'-2.6rem',sm:'-2.5rem',md:'-3rem'}}>
         <Image 
            src={item.image}
            alt={item.name}
            w={{base:'12rem',sm:198,md:'14rem'}}
            h={{base:'12rem',sm:207,md:'14rem'}}  
           />
         </Box>

          <Box ml={{md:'1rem'}}>
           <Box bgGradient={'linear(to-b,#ffff 0%,#F62F30 100%)'} className=" opacity-10" mt={{md:'-2rem'}} w={{base:'18rem',md:'18rem'}} h={{base:'19rem',sm:'22rem',md:'23rem'}} rounded={'xl'}>
           </Box>
          </Box>
    {/* avatar and ratings were put in one box and postion relative used */}
          <Flex justifyContent={'center'} position={'relative'}>
           <Box className="flex items-center justify-center space-x-5" mt={{base:'-24rem',sm:'-29rem',md:'-32rem'}} left={{base:'3rem',sm:'4.5rem',md:'5rem'}} position={'relative'}>
           <Image 
          src={item.avatar}
          w={12}
          h={6}
          className=" cursor-pointer"
        />
        <Text className="flex items-center space-x-3">
          <span className="font-bold"><AiFillStar className="text-yellow text-[20px] lg:text-[16px]"/>
          </span>
          <span className="font-bold text-white lg:text-[12px]">{item.rating}</span>
        </Text>
         </Box>
         <Box className="flex items-center justify-center space-x-5 absolute" mt={{base:'-10rem',sm:'-11rem',md:'-13rem'}} left={{base:'',sm:'4rem',md:'2.3rem'}}>
         <Text textAlign={'center'} className="space-y-2 lg:space-y-1">
          <Text className="text-orange font-bold">{item.food}</Text>
          <Text w={{base:169,md:253}} className="text-[13px] font-semibold lg:text-[18px]">{item.text}</Text>
         </Text>
         </Box>
         <Box mt={{base:'-1rem',sm:'-1.5rem',md:'-2rem'}} left={{base:'-4.3rem',sm:'-4rem',md:'-3.5rem'}} position={'relative'}>
          <ButtonOffers />
         </Box>
         </Flex>
         </Box>
      </VStack>
        </div>
        
      ))}
        </SimpleGrid>
         </Box>
       } 
       </Show>
         
       <div className="lg:hidden relative`">
       <Box flexDirection={'column'} mt={{base:'',sm:'-3rem',md:''}}>
        <Cards2 />
       </Box>
      </div>
      
    </div>
  )
}

export default Menu