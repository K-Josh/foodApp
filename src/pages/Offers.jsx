import { Box, Flex, Image, Show, Text, VStack, useColorMode, } from "@chakra-ui/react"
import { foodOffers } from '../Data/Data'
import { ButtonOffers, Cards, HeadingTwo } from "../components/Components"
import { AiFillStar } from "react-icons/ai";


const Offers = () => {
  const {colorMode} = useColorMode()
;
  return (
    <>
    <Flex className="space-y-5 group" pt={{md:'3rem'}} direction={'column'} id="offers">
     <Box mt={{sm:'-17rem', base:'-16rem',md:'rem'}} className="flex justify-center items-center lg:my-4 lg:max-h-screen">
       <Flex mr={'-13rem'} direction={'column'} >
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
       <Box className="lg:hidden"><HeadingTwo /></Box>
      </Flex>
     </Box>
      <Show above="md"> {colorMode === 'dark' ? 
       <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={{base:1,md:2}} direction={{md:'row'}} mt={{base:'-3rem',sm:'',md:'-7rem'}} ml={{md:'-2rem'}}>
      {foodOffers.map((item, index)=> (
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
        </Flex>
         </Box>  
       :
       <Box className="transition-all ease-out duration-500 cursor-pointer" justifyContent={'center'} alignItems={'center'}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={{base:1,md:2}} direction={{md:'row'}} mt={{base:'-3rem',sm:'',md:'-7rem'}} ml={{md:'-2rem'}}>
      {foodOffers.map((item, index)=> (
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
          <span className="font-bold text-black lg:text-[12px]">{item.rating}</span>
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
        </Flex>
        </Box> 
       } </Show>
      <div className="lg:hidden relative`">
       <Box mt={{base:'',sm:'-3rem',md:''}}>
        <Cards />
       </Box>
      </div>
      <Box position={'relative'} right={{sm:'-38rem',base:'-29rem',md:'-92rem'}} className="">
        <Image 
         mt={12}
          src="/Images/rosemary.png"/>
      </Box>
    </Flex>
    </>
  )
}

export default Offers
