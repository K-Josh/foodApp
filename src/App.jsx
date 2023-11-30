import Carousel from './components/Hero';
import "./App.css"
import { Container } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Offers from './pages/Offers';
import Service from './pages/Service';
import ScrollUp from './components/ScrollUp';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MobileApp from './components/MobileApp';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Container maxW={'md'} theme={theme} >
     <Navbar />
      <Carousel/>
       <Offers/>
       <Service />
      <Menu />
      <MobileApp />
      <ScrollUp /> 
      <Footer />
      <div className='h-[4000px]'></div>
    </Container>
  )
}

export default App
