import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';


function App() {
  return (

    <div className="App"> 
      <Header />
       <Body/>
       <Footer /> 
    </div>
  
  );
}

export default App;
