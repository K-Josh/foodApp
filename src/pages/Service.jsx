import { Box, Flex, Image, Show, Grid, GridItem } from "@chakra-ui/react"
import { HeadingThree } from "../components/Components"


const Service = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', md:'row'}} mt={{sm:'-8rem', base:'-16rem',md:'-18rem'}} id="services">
    {/* <Box bg={'yellow.10'} className="opacity-10 mix-blend-lighten" w={{sm:'20.1rem',base:'17.2rem', md:'26rem'}} h={{sm:'19rem',base:'17.2rem', md:'26rem'}}  rounded={'full'} position={'relative'} top={{sm:'10rem',base:'4rem', md:'-5rem'}} right={{sm:'1.9rem',base:'3.7rem',md:'3rem'}}></Box> */}
      <Box className="lg:max-h-screen" justifyContent={'center'} alignItems={'center'}>
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
         <Show above="md">
        <Flex justifyContent={'center'} className="space-x-4" alignItems={'center'}>
         <Image 
          src="/Images/serviceChef.png"
          alt="chef"
          rounded={'full'}
          h={{base:"",sm:'',md:''}}
          w={{base:"",sm:'',md:'40rem'}}
          position={'relative'}
        />
         <Flex direction={'column'} justifyItems={'start'} className="space-y-[2rem]" mr={{md:'-1rem'}}>
          <Box>
          <HeadingThree />
          </Box>
         <Box>
          <Grid templateColumns='repeat(5, 1fr)'>
           <GridItem colSpan={2} className="space-y-5">
            <div className="flex items-center gap-5">
           <Image 
            src="/Images/onlineOrder.png"
           />
           <span className="text-[14px]">Online order</span>
             </div>
              <div className="flex items-center gap-5">
            <Image 
            src="/Images/reservation.png" />
           <span className="text-[14px]">Pre-Reservation</span>
              </div>
              <div className="flex items-center gap-5">
           <Image 
            src="/Images/SuperChef.png"
           />
           <span className="text-[14px]">Super Chef</span>
              </div>
           </GridItem>
           <GridItem colStart={3} colEnd={6} className="space-y-5">
             <div className="flex items-center gap-5">
             <Image 
             src="/Images/time.png"/>
             <span className="text-[14px]">24/7 services</span>
             </div>
             <div className="flex items-center gap-5">
            <Image  src="/Images/foodHut.png"/>
            <span className="text-[14px]">Organized FoodHut Place</span>
             </div>
             <div className="flex items-center gap-5">
            <Image src="/Images/cleanKitchen.png"/>
            <span className="text-[14px]">Clean Kitchen</span>
             </div>
           </GridItem>
          
           </Grid>
          </Box>
         </Flex>
        </Flex>
        </Show>
      </Box>

    </Flex>
  )
}

export default Service