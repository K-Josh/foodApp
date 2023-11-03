 import { Flex} from '@chakra-ui/react'
 import {Link} from 'react-scroll'
 
 // links
 export const Links = () => {
    return(
        <div className='font-primary'>
           <Flex gap={4} fontSize={{
          base:'sm',
          md:'md',
         }}
         direction={{
            base: 'column',
            md:'row'
         }}
         >
            <Link className='cursor-pointer font-bold'>Today Special Offers</Link>
           <Link  className='cursor-pointer font-bold'>Why FoodHut</Link>
           <Link  className='cursor-pointer font-bold'>Our Menu</Link>
           <Link className='cursor-pointer font-bold'>Our Popular Food</Link>
       </Flex>   
     </div>
    )
}