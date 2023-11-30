import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"


const Menu = () => {
    useColorMode()
    const color = useColorModeValue('white')
  return (
    <div id="menu">
      <Box className="mx-auto">
        <Text className={`${color ? 'text-black' : 'text-white'} font-bold text-center`} w={{base:'7rem',md:'12rem'}}>
            <span className="text-orange">Menu</span> That <span className="text-yellow">Always</span> Make You Fall In <span className="
            text-orange">Love</span>
        </Text>
      </Box>
      <Box>
       
      </Box>
    </div>
  )
}

export default Menu