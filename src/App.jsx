import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Hero/Herosection';
import Company from './Components/Companies/Company';
import Automated from './Components/Automated/Automated';
import Cards from './Components/Cards/Cards';
import Whychooseus from './Components/Whychooseus/Whychooseus';
import Savemoney from './Components/SaveMoney/Savemoney';

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
    </div>
   
    
  );
};

export default App;
