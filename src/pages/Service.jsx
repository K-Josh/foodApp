import { Box, Flex, Image, Show, Grid, GridItem } from "@chakra-ui/react"
import { ButtonServices, HeadingThree } from "../components/Components"


const Service = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', md:'row'}} mt={{sm:'8rem', base:'-16rem',md:'-18rem'}} id="services">
      <Box className="lg:max-h-screen" justifyContent={'center'} alignItems={'center'}>
  {/* small screens */}
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
 {/* various services offered for small screens */}
          <Box my={'2rem'} flexDirection={'column'} className="space-y-[1rem]">
           <div className="flex items-center gap-5">
           <Image 
            src="/Images/onlineOrder.png"
           />
           <span className="lg:text-[14px] font-semibold text-[16px]">Online order</span>
           </div>
           <div className="flex items-center gap-5">
            <Image 
            src="/Images/reservation.png" />
           <span className="lg:text-[14px] font-semibold text-[16px]">Pre-Reservation</span>
            </div>
            <div className="flex items-center gap-5">
           <Image 
            src="/Images/SuperChef.png"
           />
           <span className="lg:text-[14px] font-semibold text-[16px]">Super Chef</span>
             </div>
             <div className="flex items-center gap-5">
             <Image 
             src="/Images/time.png"/>
             <span className="lg:text-[14px] font-semibold text-[16px]">24/7 services</span>
             </div>
             <div className="flex items-center gap-5">
            <Image  src="/Images/foodHut.png"/>
            <span className="lg:text-[14px] font-semibold text-[16px]">Organized FoodHut Place</span>
             </div>
             <div className="flex items-center gap-5">
            <Image src="/Images/cleanKitchen.png"/>
            <span className="lg:text-[14px] font-semibold text-[16px]">Clean Kitchen</span>
             </div>
   {/* button */}
            <div className="ml-[-12px]">
             <ButtonServices />
            </div>
          </Box>
        </div>
  {/* large screens */}
       <Show above="md">
        <Flex justifyContent={'center'} className="space-x-[-3rem]" >
        <Box mr={{md:'-2rem'}} position={'relative'}>
         <Box position={'relative'}>
         <Image 
            src="/Images/serviceChef.png"
          alt="chef"
          rounded={'full'}
          h={{base:"",sm:'',md:''}}
          w={{base:"",sm:'',md:'40rem'}}
          ml={{md:'-2rem'}}
          /> 
         </Box>
          <Box mt={{md:'-43rem'}} ml={{md:'19rem'}} position={'absolute'} zIndex={-9}>
           <Image 
             src="/Images/Decore_2.png"
             alt="decore"
              className=""
             />
          </Box>
          <Box mt={{md:'-50rem'}} ml={{md:'12rem'}} position={'absolute'} zIndex={-9} boxSize={'32rem'}>
            <Image src="/Images/service-Arr.png"
              alt="arrow"
              w={{md:'42rem'}}
              h={{md:'6rem'}}
            />
          </Box>
         </Box>
         <Flex direction={'column'} mt={{md:'15rem'}} justifyItems={'start'} className="space-y-[2rem]" >
          <Box ml={{md:'-3rem'}}>
          <HeadingThree />
          </Box>
         <Box ml={{md:'-3rem'}}>
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
            <div className="my-6">
            <ButtonServices />
            </div>
          </Box>
         </Flex>
        </Flex>
        </Show>
      </Box>

    </Flex>
  )
}

export default Service