import { Box, Flex, Image, Show } from "@chakra-ui/react"
import { HeadingThree } from "./Components"


const Service = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', md:'row'}} mt={{md:'-13rem'}}>
    <Box bg={'yellow.10'} className="opacity-10 mix-blend-lighten" w={{sm:'20.1rem',base:'17.2rem', md:'26rem'}} h={{sm:'19rem',base:'17.2rem', md:'26rem'}}  rounded={'full'} position={'relative'} top={{sm:'10rem',base:'4rem', md:'-5rem'}} right={{sm:'1.9rem',base:'3.7rem',md:'3rem'}}></Box>
      <Box justifyContent={'center'} alignItems={'center'}>
        <div className="lg:hidden">
         <Image 
          src="/Images/chef.png"
          alt="chef"
          w={'full'}
          h={{base:'',sm:'',md:''}}
          mt={{base:'',sm:'-32rem',md:''}}
          position={'relative'}
        />
        <Box ml={{base:'',sm:'',md:'-12rem'}} mt={{base:'',sm:'-22rem',md:''}}>
        <HeadingThree />
       </Box>
        </div>
        <Flex justifyContent={'center'} alignItems={'center'}>
         <Show above="md">
         <Image 
          src="/Images/serviceChef.png"
          alt="chef"
          rounded={'full'}
          h={{base:"",sm:'',md:''}}
          w={{base:"",sm:'',md:'53rem'}}
          ml={{md:'1rem'}}
          position={'relative'}
        />
         <Box ml={{base:'',sm:'',md:'-12rem'}} >
          <HeadingThree />
         </Box>
        </Show>
        </Flex>
      </Box>

    </Flex>
  )
}

export default Service