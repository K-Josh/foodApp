import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
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
  };
const zIndices = {
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  }

 const theme = extendTheme({colors,breakpoints,zIndices})
 export default theme