import Carousel from './components/Hero';
import Toggle from './components/Toggle'
import "./App.css"
import { Container } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Offers from './pages/Offers';
import Service from './pages/Service';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Container theme={theme} >
     <Navbar />
       {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Carousel />}/>
          <Route path='/offers' element={<Offers />}/>
          <Route path='/service' element={<Service />}/>
        </Routes>
       </BrowserRouter> */}
         <Carousel/>
       <Offers/>
       <Service />
       <Toggle />
      <div className='h-[4000px]'></div>
    </Container>
  )
}

export default App
