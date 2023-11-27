import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import 'swiper/swiper-bundle.css';

const styles={
  global:(props)=>({
    body:{
      color:mode('gray.800', 'whiteAlpha.600')(props),
      bg:mode('gray.100', '#101010')(props),
    },
    components:{
          Button: {
            baseStyle: {
              fontWeight: 'semibold',
            },
            sizes: {
              xl: {
                h: '56px',
                fontSize: 'md',
                px: '32px',
              },
            },
            variants: {
              'with-shadow': {
                bg: 'red.400',
                boxShadow: '0 0 2px 2px #efdfde',
              },
              sm: {
                bg: 'teal.500',
                fontSize: 'md',
              },
            },
            defaultProps: {
              size: 'lg',
              variant: 'sm',
              colorScheme: 'orange',
            },
          },
  }
  })
};

const config = {
  initialColorMode: "dark",
  useSystemColor: "true",
}

const colors={
  gray:{
    light:'#fff',
    dark:'#1e1e1e',
  },
  black:{
    10:'#191919'
  },
  orange:{
    10:'#F54748'
  },
  yellow:{
    10:'#FDC55E'
  },
  linear:{
    10:'#FFC26B', 
 }
}
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
}
const theme = extendTheme({config, colors, styles, breakpoints})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
