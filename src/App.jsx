import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Hero/Herosection';
import Company from './Components/Companies/Company';
import Automated from './Components/Automated/Automated';
import Cards from './Components/Cards/Cards';
import Whychooseus from './Components/Whychooseus/Whychooseus';
import Savemoney from './Components/SaveMoney/Savemoney';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Reviews from './Components/Reviews/Reviews';

const App = () => {
  const divStyle = {
    backgroundImage: 'linear-gradient(to right, #62BADA 0%, #C9E7F2 100%)'
  };

  return (
    <div >
       <div style={divStyle}>
      <Navbar />
      <Herosection />
    </div>
    <Company/>
    <Automated/>
    <Cards/>
    <Whychooseus/>
    <Savemoney/>
    <Features/>
    <Testimonials/>
    <Reviews/>
    </div>
   
    
  );
};

export default App;
