import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles={
    global:(props)=>({
      body:{
        color:mode('gray.800', 'whiteAlpha.900')(props),
        bg:mode('gray.100', '#101010')(props),
      }
    })
  };
const config={
      initialColorMode:'dark',
      useSystemColor:'true',
  };
const colors={
    gray:{
      light:'#fff',
      dark:'#1e1e1e',
    },
    black:{
        10:'191919'
      },
      orange:{
        10:'#F54748'
      },
      yellow:{
        10:'#FDC55E'
      },
      linear:{
        10:'FFC26B',
      }
}
const theme = extendTheme({config,colors,styles})
export default theme
