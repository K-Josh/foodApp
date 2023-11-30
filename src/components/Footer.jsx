import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ButtonFooter } from "./Components";


const Footer = () => {
    useColorMode()
    const bg = useColorModeValue('dark');
  return (
    <div className={`${bg ? 'bg-white' : 'bg-black'}  mt-[12rem]`}>
      <Flex className="space-y-6" flexDirection={{base:'column',md:'row'}} alignItems={{md:'center'}} justifyContent={{md:'space-evenly'}} p={'4rem'} gap={'4rem'}>
        <Box className="space-y-2" mt={{md:'1rem'}}>
          <h3 className="text-orange font-bold">FoodHut</h3>
          <Text className="text-[12px]" w={'12rem'}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          </Text>
          <Flex gap={3}>
           <FaFacebookF className="text-yellow" />
           <FaInstagram className="text-yellow" />
           <FaTwitter className="text-yellow" />
          </Flex>
        </Box>
        <Flex className="gap-[7rem]">
         <Box>
         <h3 className="text-orange font-bold whitespace-nowrap">About Us</h3>
          <Box>
            <ul className={`text-[16px] ${bg ? '' : 'text-white' }`}>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">About Us</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">Service Us</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">Contact</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">Company</li>
            </ul>
          </Box>
         </Box>

          <Box>
          <h3 className="text-orange font-bold">Company</h3>
          <Box>
            <ul className={`text-[16px] ${bg ? '' : 'text-white' }`}>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">partner</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in whitespace-nowrap">Terms of use</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">Privacy</li>
              <li className="cursor-pointer hover:translate-x-1 duration-200 ease-in">Sitemap</li>
            </ul>
          </Box>
          </Box>
        </Flex>

        <Flex>  
          <Box mt={{base:'-2rem',md:'1rem'}} className="space-y-[0.5rem]">
            <h3 className="text-orange font-bold mb-10 lg:mb-7">Get In Touch</h3>
            <Text className="text-[13px]" w={'16rem'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
            <div className="pt-2 flex">
              <input type="email" placeholder="Email" className={`${bg ? 'placeholder:text-black focus:outline-orange/60 bg-slate-200' : 'placeholder:text-white focus:outline-yellow/60 '} rounded-2xl px-2 py-1 placeholder:text-sm placeholder:px-1 w-[9rem] focus:outline-1`}/>
              <ButtonFooter />
            </div>
          </Box>
        </Flex>
      </Flex>
       <div>
         <Box className="text-center p-2">
          <span className="text-sm">Copyright {(new Date().getFullYear())} FoodHut</span>
         </Box>
       </div>
    </div>
  )
}

export default Footer
