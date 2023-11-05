import {Flex, Image, Show, Hide, Box, useDisclosure, useColorMode, Collapse, Button} from '@chakra-ui/react'
import { Links } from './Components'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const {colorMode} = useColorMode()
  return (
    <Flex  justifyContent={'space-between'} gap={{ base: 3,}} p={4}
    direction={{ base: 'column', md: 'row' }}>
      {/* logo */}
      <Flex alignItems={'center'} justifyContent={{base:'space-between'}} gap={2} mb={{base:4, md:0}}>
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
             <Button bg={'orange.10'} w={'9rem'} rounded={'full'} _hover={''} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300'>Download App</Button>
            </div>
            </Hide>
            <Box >
            <Hide above='md'>
             <Box p={2}>
              <FiMenu className='cursor-pointer text-4xl text-white transition-all ease-in-out duration-300' onClick={onToggle}/>
            </Box>
            </Hide> 
           </Box>
          </>
          :
          <>
            <Box>
             <Image 
             cursor={'pointer'}
             src='/Images/Logo-Dark.png'
             alt='logo'
             w={{base:'5rem', md:'6.7rem'}}/> 
            </Box>
            <Hide above='lg'>
            <div>
             <Button bg={'orange.10'} w={'9rem'} color={'whiteAlpha.900'} rounded={'full'} _hover={''} className='hover:bg-orange-600 transition-all ease-in-out duration-300'>Download App</Button>
            </div>
            </Hide>
            <Box>
            <Hide above='md'>
             <Box p={2}>
              <FiMenu className='cursor-pointer text-4xl text-black transition-all ease-in-out duration-300 mx-2' onClick={onToggle}/>
            </Box>
            </Hide>
            
            </Box>
          </>
         }
      </Flex>
       
       {colorMode === 'dark' ?
       <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'black'} w={{sm:'37rem',base:'19rem',md:'38rem'}} rounded={'md'}  bg={'whiteAlpha.900'} p={4}>
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
        :
        <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.3}}}>
            <Hide above='md'>
               <Box color={'whiteAlpha.800'} w={{sm:'37rem',base:'19rem',md:'38rem'}} rounded={'md'} bg={'gray.dark'} p={4} >
                <Links/>
               </Box>
           </Hide> 
        </Collapse>
       }
        
          {colorMode === 'dark' ? 
          <div className='mx-[12rem] lg:flex items-center space-x-7' id='line'>
          <Box color={'whiteAlpha.900'}>
          <Show above='md'>
            <Links />
          </Show>
          </Box>
          <Show above='md'>
             <div>
             <Button bg={'orange.10'} w={{sm:'9rem',base:'2px'}} rounded={'full'} _hover={''} className='hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-300'>Download App</Button>
            </div>
          </Show>
          </div>
            :
          <div className='mx-[12rem] lg:flex items-center space-x-7'>
          <Show above='md'>
            <Links />
          </Show>
          <Show above='md'>
           <div>
             <Button bg={'orange.10'} w={'9rem'} color={'whiteAlpha.900'} rounded={'full'} _hover={''} className='hover:bg-orange-600 transition-all ease-in-out duration-300'>Download App</Button>
            </div> 
          </Show>
          </div>
          }  
        
    </Flex>
  )
}

export default Navbar