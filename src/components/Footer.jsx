import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    useColorMode()
    const bg = useColorModeValue('dark');
  return (
    <div className={`${bg ? 'bg-white' : 'bg-black'} max-h-screen mt-[12rem]`}>
      <Flex className="space-y-6" flexDirection={{base:'column',md:'row'}} alignItems={{md:'center'}} p={'4rem'} gap={'4rem'}>
        <Box className="space-y-2">
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
        <Flex className="gap-[9rem]">
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
      </Flex>
    </div>
  )
}

export default Footer
