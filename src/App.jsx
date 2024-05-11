import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Hero/Herosection';

const App = () => {
  const divStyle = {
    backgroundImage: 'linear-gradient(to right, #62BADA 0%, #C9E7F2 100%)'
  };

  return (
    <div style={divStyle}>
      <Navbar />
      <Herosection />
    </div>
  );
};

export default App;
