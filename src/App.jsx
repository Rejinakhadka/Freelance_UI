import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Hero/Herosection';
import Company from './Components/Companies/Company';
import Automated from './Components/Automated/Automated';

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
    </div>
   
    
  );
};

export default App;
