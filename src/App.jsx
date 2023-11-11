import Carousel from './components/Hero';
import Toggle from './components/Toggle'
import "./App.css"
import { Container } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Service from './components/Service';


const App = () => {
  return (
    <Container theme={theme} maxW={'2xl'}>
      <Navbar />
      <Carousel/>
       <Offers/>
       <Service />
       <Toggle />
      <div className='h-[4000px]'></div>
    </Container>
  )
}

export default App
