import { Button, useColorMode,} from '@chakra-ui/react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

const Header = () => {
    const {colorMode, toggleColorMode} =useColorMode()
  return (
    <div className='relative'>
     {colorMode === 'dark' ? 
     <Button m='1rem' position={'absolute'}
      bottom={{base:'32rem', md: '2rem'}} right={{base:'3rem'}} top={'0.4rem'} cursor={'pointer'} bg={'#F54748'} _hover={''} className='opacity-100 hover:opacity-75'
      pos={'fixed'} onClick={()=> toggleColorMode()} size={'sm'}
     >
     {colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill /> }
     </Button>
      :
      <Button m='1rem' position={'absolute'} size={'sm'}
      bottom={{base:'32rem', md: '2rem'}} right={{base:'3rem'}} top={'0.4rem'} cursor={'pointer'} _hover={''}
      pos={'fixed'} onClick={()=> toggleColorMode()} bg={'#F54748'}
       className='opacity-100 hover:opacity-75'>
     {colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill className='text-white'/> }
     </Button>
     }
    </div>
  )
}

export default Header