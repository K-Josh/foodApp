import {Flex, Image, Show, Hide, Box, useDisclosure, useColorMode, Collapse, Button, } from '@chakra-ui/react'
import { Links } from './Components'
import { FiMenu } from 'react-icons/fi'
import Toggle from './Toggle'

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const {colorMode} = useColorMode()
  return ( 
   <>
    {colorMode === 'dark' ? 
    <Flex className='fixed top-0 w-full bg-black z-50' justifyContent={'space-between'} gap={{base: 1,}} py={{md:'3px'}} p={{base:1}}
    direction={{ base: 'column', md: 'row' }}>
     <Toggle />
      {/* logo */}
      <Flex alignItems={'center'} justifyContent={{base:'space-between'}} mb={{base:4, md:0}} >
         
         {colorMode === 'dark' ? 
           <>
            <Box>
             <Image 
             cursor={'pointer'}
             src='/Images/logo.png'
             alt='logo'
             w={{base:'5rem', md:'6rem'}}/> 
            </Box>
            <Hide above='lg'>
            <div>
             <Button bg={'orange.10'} w={{sm:'9rem', base:'7.5rem'}} rounded={'full'} _hover={''} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300 '>Download App</Button>
            </div>
            </Hide>
            <Box >
            <Hide above='md'>
             <Box p={1} mt={'15px'} mr={'12px'}>
              <FiMenu className='cursor-pointer text-3xl text-white transition-all ease-in-out duration-300' onClick={onToggle}/>
            </Box>
            </Hide> 
           </Box>
          </>
          :
          <>
  {/*Logo for white mode  */}
            <Box>
             <Image 
             cursor={'pointer'}
             src='/Images/Logo-Dark.png'
             alt='logo'
             w={{base:'5rem', md:'6rem'}}/> 
            </Box>
    {/* button element in dark mode  */}
            <Hide above='lg'>
            <div>
             <Button bg={'orange.10'} w={{sm:'9rem', base:'7.5rem'}} rounded={'full'} _hover={''} className='hover:bg-orange-500 hover:text-black transition-all ease-in-out duration-300 '>Download App</Button>
            </div>
            </Hide>
            <Box >
            <Hide above='md'>
             <Box p={1} mt={'15px'} mr={'12px'}>
              <FiMenu className='cursor-pointer text-3xl text-black transition-all ease-in-out duration-300' onClick={onToggle}/>
            </Box>
            </Hide> 
           </Box>
          </>
         }
      </Flex>
  {/* Menu collapse white mood */}
       {colorMode === 'dark' ?
       <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'black'} w={{sm:'39rem',base:'29.4rem',md:'38rem'}} rounded={'md'} bg={'whiteAlpha.900'} p={4}>
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
        :
        <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'whiteAlpha.800'} w={{sm:'39rem',base:'29.4rem',md:'38rem'}} rounded={'md'} bg={'gray.dark'} p={4} >
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
       }
        
          {colorMode === 'dark' ? 
          <div className='mx-[12rem] lg:flex items-center space-x-7' id='line'>
          <Box color={'whiteAlpha.900'} mr={{md:'-1rem'}}>
          <Show above='md'>
            <Links />
          </Show>
          </Box>
          <Show above='md'>
            <Box>
             <Button bg={'orange.10'} w={{sm:'9rem',base:'2px'}} rounded={'full'} _hover={''} mr={{md:'-4rem'}} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300'>Download App</Button>
            </Box>
          </Show>
          </div>
            :
          <div className='mx-[12rem] lg:flex items-center space-x-7'>
          <Box mr={{md:'-1rem'}}>
           <Show above='md'>
            <Links />
          </Show>
          </Box>
          <Show above='md'>
           <Box >
             <Button bg={'orange.10'} w={'9rem'} color={'whiteAlpha.900'} rounded={'full'} mr={{md:'-4rem'}} _hover={''} className='hover:bg-orange-600 transition-all ease-in-out duration-300'>Download App</Button>
            </Box> 
          </Show>
          </div>
          }  
        
    </Flex>
      :
      <Flex className='fixed top-0 w-full bg-white z-50' justifyContent={'space-between'} gap={{base: 1,}} py={{md:'3px'}} p={{base:1}}
    direction={{ base: 'column', md: 'row' }}>
     <Toggle />
      {/* logo */}
      <Flex alignItems={'center'} justifyContent={{base:'space-between'}} mb={{base:4, md:0}} >
         
         {colorMode === 'dark' ? 
           <div>
            <Box>
             <Image 
             cursor={'pointer'}
             src='/Images/logo.png'
             alt='logo'
             w={{base:'5rem', md:'6rem'}}/> 
            </Box>
            <Hide above='lg'>
            <div>
             <Button bg={'orange.10'} w={{sm:'9rem', base:'7.5rem'}} rounded={'full'} _hover={''} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300 '>Download App</Button>
            </div>
            </Hide>
            <Box >
            <Hide above='md'>
             <Box p={1}>
              <FiMenu className='cursor-pointer text-4xl text-white transition-all ease-in-out duration-300' onClick={onToggle}/>
            </Box>
            </Hide> 
           </Box>
          </div>
          :
          <>
            <Box>
             <Image 
             cursor={'pointer'}
             src='/Images/Logo-Dark.png'
             alt='logo'
             w={{base:'5rem', md:'6rem'}}/> 
            </Box>
            <Hide above='lg'>
            <div>
             <Button bg={'orange.10'} w={{sm:'9rem', base:'7.5rem'}} rounded={'full'} _hover={''} className='hover:bg-orange-600 opacity-95 hover:opacity-75 hover:text-white transition-all ease-in-out duration-300 '>Download App</Button>
            </div>
            </Hide>
            <Box >
            <Hide above='md'>
             <Box p={1} mt={'15px'} mr={'12px'}>
              <FiMenu className='cursor-pointer text-3xl text-black transition-all ease-in-out duration-300' onClick={onToggle}/>
            </Box>
            </Hide> 
           </Box>
          </>
         }
      </Flex>
       
       {colorMode === 'dark' ?
       <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'black'} w={{sm:'39rem',base:'29.4rem',md:'38rem'}} rounded={'md'}  bg={'whiteAlpha.900'} p={4}>
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
        :
        <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'whiteAlpha.800'} w={{sm:'39rem',base:'29.4rem',md:'38rem'}} rounded={'md'} bg={'gray.dark'} p={4} >
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
       }
        
          {colorMode === 'dark' ? 
          <div className='mx-[12rem] lg:flex items-center space-x-7' id='line'>
          <Box color={'whiteAlpha.900'} mr={{md:'-1rem'}}>
          <Show above='md'>
            <Links />
          </Show>
          </Box>
          <Show above='md'>
            <Box>
             <Button bg={'orange.10'} w={{sm:'9rem',base:'2px'}} rounded={'full'} _hover={''} mr={{md:'-4rem'}} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300'>Download App</Button>
            </Box>
          </Show>
          </div>
            :
          <div className='mx-[12rem] lg:flex items-center space-x-7'>
          <Box mr={{md:'-1rem'}}>
           <Show above='md'>
            <Links />
          </Show>
          </Box>
          <Show above='md'>
           <Box >
             <Button bg={'orange.10'} w={'9rem'} color={'whiteAlpha.900'} rounded={'full'} mr={{md:'-4rem'}} _hover={''} className='hover:bg-orange-600 transition-all ease-in-out duration-300'>Download App</Button>
            </Box> 
          </Show>
          </div>
          }  
        
    </Flex>
    }
    </>
  )
}

export default Navbar